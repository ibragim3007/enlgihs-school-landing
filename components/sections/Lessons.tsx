import { SECTION_IDS } from "@/constants/navigation";
import {
  LESSONS_HEADING,
  LESSONS_DESCRIPTION,
  LESSONS_ADDITIONAL,
} from "@/constants/lessons";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Lessons() {
  const steps = [
    {
      number: 1,
      title: "Занятие начинается",
      description: "Разминка и повторение материала",
      icon: "🎯",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      title: "Активная практика",
      description: "2 часа в неделю говорим по-английски",
      icon: "💬",
      color: "from-green-500 to-green-600",
    },
    {
      number: 3,
      title: "Новый материал",
      description: "Учим грамматику, лексику, фразы",
      icon: "📚",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: 4,
      title: "Закрепление",
      description: "Упражнения и полезные материалы",
      icon: "✅",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: 5,
      title: "Домашнее задание",
      description: "Проверяется автоматически в кабинете",
      icon: "🏠",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const additionalActivities = [
    {
      title: "Лекции и воркшопы",
      description: "По актуальным тема и интересованиям",
      icon: "🎓",
    },
    {
      title: "Разговорные клубы",
      description: "Общение в неформальной атмосфере",
      icon: "💬",
    },
    {
      title: "Читательские клубы",
      description: "Чтение интересных текстов вместе",
      icon: "📖",
    },
  ];

  return (
    <section
      id={SECTION_IDS.lessons}
      className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/40 via-white to-primary-50/40"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-4 lg:mb-6">
          {LESSONS_HEADING}
        </SectionHeading>

        <p className="text-base lg:text-lg text-neutral-700 leading-relaxed max-w-2xl mb-12 lg:mb-16">
          {LESSONS_DESCRIPTION}
        </p>

        {/* Timeline Steps */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl font-bold text-neutral-950 mb-10 flex items-center gap-2">
            <span>🔄</span>
            Как выглядит одно занятие
          </h3>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-orange-400 transform -translate-y-1/2"></div>

              {/* Steps */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Number circle */}
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all`}
                    >
                      {step.number}
                    </div>

                    {/* Step content */}
                    <div className="bg-white p-4 rounded-xl border-2 border-neutral-200 text-center w-full">
                      <p className="text-xl font-bold text-neutral-950 mb-1">
                        {step.icon}
                      </p>
                      <p className="text-sm font-semibold text-neutral-900 mb-2">
                        {step.title}
                      </p>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-20">
                {/* Vertical connecting line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-7 top-16 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-green-400"></div>
                )}

                {/* Circle number */}
                <div
                  className={`absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                >
                  {step.number}
                </div>

                {/* Card content */}
                <div className="bg-white p-5 rounded-xl border-2 border-neutral-200">
                  <p className="text-2xl mb-2">{step.icon}</p>
                  <p className="text-sm font-semibold text-neutral-900 mb-1">
                    {step.title}
                  </p>
                  <p className="text-xs text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Activities */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-950 mb-8 flex items-center gap-2">
            <span className="text-3xl">✨</span>
            Дополнительно к практикам
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalActivities.map((activity, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 border-2 border-neutral-200 hover:border-primary-400 transition-all hover:shadow-xl"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {activity.icon}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-950 mb-2 group-hover:text-primary-700 transition-colors">
                    {activity.title}
                  </h4>
                  <p className="text-neutral-700 text-sm leading-relaxed group-hover:text-neutral-800 transition-colors">
                    {activity.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-100 opacity-0 group-hover:opacity-20 transition-opacity rounded-full -mr-8 -mt-8"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary-700 to-primary-800 text-white">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
            <div>
              <p className="text-2xl lg:text-3xl font-bold mb-2">
                🎯 Результат за счёт системности
              </p>
              <p className="text-primary-100 text-lg">
                Именно пошаговый процесс делает обучение эффективным
              </p>
            </div>
            <div className="text-5xl lg:text-6xl">📈</div>
          </div>
        </div>
      </div>
    </section>
  );
}
