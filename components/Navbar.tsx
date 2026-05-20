export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-slate-800 bg-slate-950/70">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Soumyajyoti
        </h1>

        <div className="flex gap-6 text-slate-300">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>

      </div>
    </nav>
  );
}
