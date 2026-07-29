import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Focused on useful software, not just features." description="A company-neutral overview of the outcomes and engineering practices I bring to product teams." />
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {experiences.map((exp) => (
            <article className="grid gap-5 py-8 md:grid-cols-[.6fr_1.4fr]" key={exp.label}>
              <div><p className="font-medium text-white">{exp.label}</p><p className="mt-3 text-sm text-indigo-300">{exp.period}</p></div>
              <div><h3 className="text-xl font-medium text-white">{exp.role}</h3><p className="mt-2 leading-7 text-slate-300">{exp.summary}</p><ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">{exp.highlights.map((highlight) => <li className="flex gap-3" key={highlight}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />{highlight}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
