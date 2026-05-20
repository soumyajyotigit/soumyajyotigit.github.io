import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
