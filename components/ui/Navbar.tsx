import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Expertise", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Selected work", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="header-inner">
        <a href="#top" className="brand" aria-label="Soumyajyoti home">
          <span className="brand-mark">S</span>
          <span className="brand-name">Soumyajyoti</span>
        </a>

        <div className="header-links">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>

        <a className="header-cta" href="#contact">
          <span>Start a conversation</span><ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
