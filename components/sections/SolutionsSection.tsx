import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  { title: "Product engineering", description: "From the first question to the details that make a product work." },
  { title: "AI & automation", description: "Practical intelligence for complex processes, with people in control." },
  { title: "Business systems", description: "Software shaped around your operations and the people behind them." },
  { title: "Digital infrastructure", description: "The foundations for dependable, connected digital experiences." },
];

export function SolutionsSection() {
  return <section className="solutions-section section-space" aria-labelledby="solutions-heading" id="solutions"><div className="site-container">
    <div className="section-topline"><span className="eyebrow">02 / Built with you</span><span className="section-aside">From the question to the working system</span></div>
    <div className="solutions-layout"><div className="solutions-intro"><h2 id="solutions-heading">Your ambition.<br /><span>Our engineering.</span></h2><p>Some challenges need a product of their own. We work with businesses to design and build the technology their next chapter needs.</p><Link className="text-link" href="/solutions">How we can help <ArrowUpRight size={17} /></Link></div><div className="service-list">{solutions.map((solution, index) => <Link href="/solutions" key={solution.title} className="service-row"><span className="service-number">0{index + 1}</span><div><h3>{solution.title}</h3><p>{solution.description}</p></div><ArrowUpRight size={21} /></Link>)}</div></div>
  </div></section>;
}
