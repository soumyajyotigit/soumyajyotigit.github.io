import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-slate-800 bg-slate-900 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400">
                {project.stack}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
