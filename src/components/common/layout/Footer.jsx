import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { footerCapabilities, footerQuickLinks } from '@/data/navigation';

const Footer = () => (
  <footer className="relative overflow-hidden bg-[#17133f] text-white">
    <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[130px]" />
    <div className="pointer-events-none absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]" />

    <div className="container-max relative z-10 py-14 sm:py-16">
      <div className="mb-14 flex flex-col gap-7 rounded-3xl border border-white/10 bg-white/[0.06] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.3em] text-orange-300">Ready to launch?</p>
          <h2 className="text-2xl font-black text-white sm:text-3xl">Let&apos;s build your nutraceutical brand.</h2>
          <p className="mt-3 text-sm leading-6 text-white/60">Discuss your formula, packaging, MOQ and launch timeline with our manufacturing team.</p>
        </div>
        <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-primary px-8 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5">
          Request a Quote <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid gap-11 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.75fr_1.35fr] lg:gap-10">
        <div>
          <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-2">
            <Image src="/admire-nutra-logo.png" alt="Admire Nutra" width={230} height={90} className="h-16 w-auto object-contain" />
          </Link>
          <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-white/60">India-based partner for custom formulation, private-label supplements and quality-focused third-party nutraceutical manufacturing.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+917291856050" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:border-accent hover:bg-accent"><Phone size={15} /> Call Us</a>
            <a href="mailto:sales@admirenutra.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:border-primary hover:bg-primary"><Mail size={15} /> Email Us</a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-white">Capabilities</h3>
          <ul className="space-y-4">
            {footerCapabilities.map(([label, href]) => <li key={href}><Link href={href} className="text-sm font-medium text-white/60 transition hover:text-orange-300">{label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-white">Quick Links</h3>
          <ul className="space-y-4">
            {footerQuickLinks.map(([label, href]) => <li key={href}><Link href={href} className="text-sm font-medium text-white/60 transition hover:text-orange-300">{label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-white">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-300"><MapPin size={18} /></span>
              <div><p className="mb-1 text-xs font-black uppercase tracking-wider text-white">Corporate Office</p><p className="text-sm leading-6 text-white/55">Alpha-1, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh – 201308</p></div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-300"><MapPin size={18} /></span>
              <div><p className="mb-1 text-xs font-black uppercase tracking-wider text-white">Manufacturing Unit</p><p className="text-sm leading-6 text-white/55">Ecotech-III, Udyog Kendra Extension 2, Greater Noida, Uttar Pradesh – 201306</p></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href="tel:+917291856050" className="flex items-center gap-3 text-sm font-semibold text-white/70 hover:text-white"><Phone size={16} className="text-orange-300" /> +91 72918 56050</a>
              <a href="tel:+918447623792" className="flex items-center gap-3 text-sm font-semibold text-white/70 hover:text-white"><Phone size={16} className="text-orange-300" /> +91 84476 23792</a>
              <a href="mailto:sales@admirenutra.com" className="flex items-center gap-3 text-sm font-semibold text-white/70 hover:text-white sm:col-span-2 lg:col-span-1 xl:col-span-2"><Mail size={16} className="text-orange-300" /> sales@admirenutra.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-medium text-white/40">© 2026 Admire Nutra Private Limited. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
          <Link href="/privacy" className="text-xs font-semibold text-white/40 transition hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-xs font-semibold text-white/40 transition hover:text-white">Terms of Service</Link>
          <Link href="/portal/dashboard" className="text-xs font-semibold text-white/40 transition hover:text-white">Client Portal</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;