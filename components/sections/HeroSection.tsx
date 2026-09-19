import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FlowField } from "@/components/brand/FlowField";

export function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="hero-headline">
      <div className="site-container">
        <div className="hero-eyebrow"><span className="small-signal" />Built for what comes next</div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 id="hero-headline">Technology<br />that moves<br />business <span>forward.</span></h1>
            <p>Thoughtful products. Intelligent systems.<br className="desktop-break" /> Technology that turns ambition into everyday progress.</p>
            <div className="hero-actions">
              <Link className="btn-primary" href="#products">Discover our products <ArrowUpRight size={17} /></Link>
              <Link className="text-link" href="/solutions">Build with us <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          <div className="hero-art">
            <FlowField />
            <div className="hero-art-caption"><span>From possibility.</span><span>To progress.</span></div>
          </div>
        </div>
        <div className="hero-baseline">
          <span>Products. Engineering. Possibility.</span>
          <a href="#products">Explore LAYZOX <ArrowDown size={14} /></a>
        </div>
      </div>
    </section>
  );
}
