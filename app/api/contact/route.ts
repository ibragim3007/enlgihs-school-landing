import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import {
  GoogleSpreadsheet,
  type GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const MESSENGER_LABELS: Record<string, string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  vk: "ВКонтакте",
  max: "Max",
};

function getPrivateKey(): string {
  const raw = process.env.GOOGLE_PRIVATE_KEY;
  if (!raw) {
    throw new Error("GOOGLE_PRIVATE_KEY is not set");
  }
  return raw.replace(/\\n/g, "\n");
}

function messengerLabel(code: string): string {
  return MESSENGER_LABELS[code] ?? code;
}

/** Московское время, формат как в таблице: 15.03.2026 15:41 */
const SUBMITTED_AT_TIMEZONE = "Europe/Moscow";

function formatSubmittedAt(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: SUBMITTED_AT_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const pick = (type: Intl.DateTimeFormatPart["type"]) =>
    parts.find((p) => p.type === type)?.value ?? "";

  return `${pick("day")}.${pick("month")}.${pick("year")} ${pick("hour")}:${pick("minute")}`;
}

const CONSENT_HEADER = "Согласие";

/** `addRow` requires a non-empty header row; empty sheets need `setHeaderRow` first. */
const DEFAULT_HEADER_ROW = [
  "Дата и время (МСК)",
  "Телефон",
  "Программа",
  "Мессенджер",
  CONSENT_HEADER,
] as const;

async function ensureHeaderRow(
  sheet: GoogleSpreadsheetWorksheet,
): Promise<void> {
  try {
    await sheet.loadHeaderRow();
  } catch (err) {
    const msg = err instanceof Error ? err.message : "";
    if (
      msg.includes("No values in the header row") ||
      msg.includes("All your header cells are blank")
    ) {
      await sheet.setHeaderRow([...DEFAULT_HEADER_ROW]);
      return;
    }
    throw err;
  }
}

/** Дополняет строку заголовков колонкой согласия, если таблица создана раньше без неё. */
async function ensureConsentHeaderColumn(
  sheet: GoogleSpreadsheetWorksheet,
): Promise<void> {
  await sheet.loadHeaderRow();
  const headers = sheet.headerValues;
  if (headers.includes(CONSENT_HEADER)) {
    return;
  }
  await sheet.setHeaderRow([...headers, CONSENT_HEADER]);
}

export async function POST(request: Request) {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !sheetId) {
      console.error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SHEET_ID");
      return NextResponse.json(
        { ok: false, error: "Server configuration error" },
        { status: 500 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body" },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    const { phone, program, messenger, legalConsent } = body as Record<
      string,
      unknown
    >;

    if (typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { ok: false, error: "Phone is required" },
        { status: 400 },
      );
    }

    if (legalConsent !== true) {
      return NextResponse.json(
        { ok: false, error: "Consent is required" },
        { status: 400 },
      );
    }

    const programStr = typeof program === "string" ? program : "";
    const messengerCode = typeof messenger === "string" ? messenger : "";
    const messengerStr = messengerCode ? messengerLabel(messengerCode) : "";

    const auth = new JWT({
      email: serviceAccountEmail,
      key: getPrivateKey(),
      scopes: SCOPES,
    });

    const doc = new GoogleSpreadsheet(sheetId, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      return NextResponse.json(
        { ok: false, error: "Spreadsheet has no sheets" },
        { status: 500 },
      );
    }

    const submittedAt = formatSubmittedAt(new Date());

    await ensureHeaderRow(sheet);
    await ensureConsentHeaderColumn(sheet);
    await sheet.loadHeaderRow();

    const consentLabel = "Да";

    await sheet.addRow({
      "Дата и время (МСК)": submittedAt,
      Телефон: phone.trim(),
      Программа: programStr,
      Мессенджер: messengerStr,
      [CONSENT_HEADER]: consentLabel,
    } as Record<string, string>);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to save submission" },
      { status: 500 },
    );
  }
}
