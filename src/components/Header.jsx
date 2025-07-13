import { Link } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Soumyajyoti</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}