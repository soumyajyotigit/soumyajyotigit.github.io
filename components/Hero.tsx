export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div>

        <p className="text-cyan-400 mb-4 text-lg">
          Full-Stack Developer • AI Builder • Cloud Engineer
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Soumyajyoti
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-8">
          Building scalable cloud-native applications using MERN,
          Kubernetes, Docker, AWS and AI integrations.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="https://github.com/soumyajyotigit"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            className="border border-slate-700 px-6 py-3 rounded-xl"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  );
}
