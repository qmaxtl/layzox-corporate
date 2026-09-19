import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IntelligenceSection() {
  return <section className="intelligence-section" aria-labelledby="intelligence-heading"><div className="site-container intelligence-layout"><div><span className="eyebrow">LAYZOX Intelligence</span><h2 id="intelligence-heading">A little perspective.<br />A better starting point.</h2></div><div><p>Notes on product decisions, engineering, and the questions behind the systems we build.</p><Link href="/intelligence" className="text-link">Explore our thinking <ArrowUpRight size={17} /></Link></div></div></section>;
}
