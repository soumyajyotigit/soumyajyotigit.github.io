import { BrainCircuit, Cloud, Layers3 } from "lucide-react";
import { focusAreas } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Layers3, BrainCircuit, Cloud];

export default function FocusAreas() {
  return (
    <section className="section px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How I work" title="Product thinking backed by engineering depth." description="I build across the stack, while keeping architecture, security, performance, and deployment in view from the first commit." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = icons[index];
            return <article className="surface p-6" key={area.title}><Icon className="text-indigo-300" size={24} /><h3 className="mt-7 text-xl font-medium text-white">{area.title}</h3><p className="mt-3 leading-7 text-slate-400">{area.description}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
