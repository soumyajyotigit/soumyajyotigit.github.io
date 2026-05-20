import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-6">

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border border-slate-800 bg-slate-900 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold">
                {exp.company}
              </h3>

              <p className="text-cyan-400">
                {exp.role}
              </p>

              <p className="text-slate-400">
                {exp.period}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
