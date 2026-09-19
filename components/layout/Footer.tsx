import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-invitation"><div className="site-container"><span className="eyebrow">A conversation is a good beginning.</span><Link href="/contact" className="footer-headline">What’s next?<br /><span>Let’s build it.</span><ArrowUpRight aria-hidden="true" /></Link><div className="footer-contact"><p>Have a question, a challenge, or an idea?</p><a href="mailto:contact@layzox.com">contact@layzox.com <ArrowUpRight size={17} /></a></div></div></div>
    <div className="footer-brand-band"><div className="site-container"><div className="footer-navigation"><Link href="/" aria-label="LAYZOX home"><Image src="/brand/layzox-master-logo.png" alt="LAYZOX — Technology for a Brighter Tomorrow" width={1620} height={402} sizes="220px" className="footer-brand-image" /></Link><nav aria-label="Footer navigation"><Link href="/products">Products</Link><Link href="/solutions">Solutions</Link><Link href="/intelligence">Intelligence</Link><Link href="/company">Company</Link><Link href="/contact">Contact</Link></nav><a className="back-to-top" href="#main-content">Back to top ↑</a></div><div className="footer-legal"><p>© 2026 Layzox India Pvt Ltd. All rights reserved.</p><nav aria-label="Legal"><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/cookies">Cookies</Link></nav></div></div></div>
  </footer>;
}
