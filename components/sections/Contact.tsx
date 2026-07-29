import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: "tel:+919674087083", icon: Phone },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", href: profile.github, icon: Github, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-28 pt-12">
      <div className="contact-panel mx-auto max-w-6xl">
        <p className="eyebrow">Get in touch</p>
        <div className="mt-5 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="max-w-xl text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">Have a product problem worth solving?</h2><p className="mt-4 max-w-xl leading-7 text-slate-300">I’m open to full-stack roles, cloud and AI product work, and thoughtful technical collaborations.</p></div><a className="button button-primary shrink-0" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17} /></a></div>
        <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map(({ label, href, icon: Icon, external }) => <a className="contact-link" href={href} key={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><Icon size={17} />{label}</a>)}
        </div>
        <p className="mt-5 flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} /> Based in {profile.location}; open to opportunities and collaborations.</p>
      </div>
    </section>
  );
}
