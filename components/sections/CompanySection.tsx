import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CompanySection() {
  return <section className="company-section section-space" aria-labelledby="company-heading"><div className="site-container">
    <div className="section-topline"><span className="eyebrow">03 / The way we think</span><span className="section-aside">Considered from the start</span></div>
    <div className="company-layout"><h2 id="company-heading">Good technology<br />starts with a<br /><span>better question.</span></h2><div className="company-copy"><p className="large-copy">What would make the work better?</p><p>That question guides LAYZOX. We bring product thinking, design, and engineering together to understand the problem before we build the answer.</p><p>Useful over complicated. Clear over clever. Thoughtful decisions, down to the last detail.</p><Link className="text-link" href="/company">Get to know LAYZOX <ArrowUpRight size={17} /></Link></div></div>
    <div className="principle-strip"><div><span>01</span><h3>Understand deeply.</h3><p>Start with the people and the work.</p></div><div><span>02</span><h3>Build deliberately.</h3><p>Give every decision a reason.</p></div><div><span>03</span><h3>Keep improving.</h3><p>Leave room for what comes next.</p></div></div>
  </div></section>;
}
