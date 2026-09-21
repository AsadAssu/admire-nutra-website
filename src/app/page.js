'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ChevronDown } from 'lucide-react';
import PageTransition from '@/animations/PageTransition';
import Hero from '@/components/common/home/Hero';
import ContactSection from '@/components/common/home/ContactSection';
import Reveal from '@/components/common/ui/Reveal';
import SectionTitle from '@/components/common/ui/SectionTitle';
import {
  capabilities,
  categories,
  certificationHighlights,
  certificationLogos,
  faqs,
  manufacturingProcess,
  productRanges,
  reasons,
  solutions,
} from '@/data/homeContent';

export default function Home() {
  const [openProcess, setOpenProcess] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageTransition className="pt-[100px] xl:pt-[136px]">
      <Hero />

      <section className="bg-dark px-5 py-5 text-center text-sm font-bold tracking-wide text-white sm:text-lg">
        Your Trusted Nutraceutical Third-Party Manufacturing Partner in India
      </section>

      <section className="bg-[#fbf7ff] px-4 py-16 sm:py-20">
        <div className="container-max grid items-stretch overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden bg-[#eee3ff]">
            <Image src="/manufacuting-unit-image.png" alt="Admire Nutra manufacturing facility" fill className="object-cover opacity-25" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="rounded-2xl border border-primary/10 bg-white/85 px-10 py-8 text-center backdrop-blur-sm">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Who We Are</span>
                <h2 className="mt-3 text-4xl font-black text-primary">About Admire Nutra</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="mb-5 text-sm font-semibold leading-7 text-slate-600">Admire Nutra is an Indian nutraceutical manufacturing partner helping emerging and established brands turn product ideas into market-ready supplements.</p>
            <p className="text-sm font-medium leading-7 text-slate-500">From formulation and ingredient sourcing to compliant manufacturing, packaging and dispatch, our team provides one accountable workflow. Our focus is consistent quality, practical MOQs, transparent communication and dependable delivery.</p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-primary hover:text-accent">Discover our company <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7ff] px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="What We Do">End-to-End Manufacturing Capabilities</SectionTitle>
        <div className="container-max grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.07} className="h-full">
                <article className="group flex h-full min-h-[320px] flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-[0_12px_35px_rgba(30,70,60,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-8">
                  <div className="relative mb-7 pb-5">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#eadfff] bg-[#f5efff] sm:h-32 sm:w-32">
                      <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-110" sizes="(min-width: 640px) 128px, 112px" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_18px_rgba(92,35,143,0.28)]">
                      <Icon size={19} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 flex min-h-[3rem] items-center justify-center text-lg font-black leading-6 text-dark">{item.title}</h3>
                    <p className="mx-auto max-w-sm text-sm leading-6 text-slate-500">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-dark px-4 py-14 text-white">
        <div className="container-max">
          <SectionTitle light>Manufacturing at Your Ease</SectionTitle>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-7 text-sm leading-7 text-white/80">At Admire Nutra, we simplify supplement manufacturing for brands at every stage. Our specialists coordinate formulation, sourcing, trials, documentation and production so you can focus on building your market.</div>
            <div className="rounded-2xl bg-white/10 p-7 text-sm leading-7 text-white/80">With flexible product formats, scalable quantities and dedicated project support, your product moves through a clear workflow from approved concept to finished, packed inventory.</div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="Explore">Product Categories</SectionTitle>
        <div className="container-max grid overflow-hidden rounded-3xl shadow-xl md:grid-cols-3">
          {categories.map((item) => (
            <Link href={item.href} key={item.title} className="group relative min-h-[330px] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123f3b]/95 via-transparent to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-6 text-center text-xl font-black text-white">{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#faf8ff] px-4 py-16 sm:py-20">
        <div className="container-max grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative aspect-video overflow-hidden rounded-3xl shadow-xl">
            <Image src="/manufacuting-unit-image.png" alt="Contract supplement manufacturing" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">Your Growth Partner</span>
            <h2 className="my-4 text-4xl font-black uppercase text-dark">Contract Manufacturing</h2>
            <p className="mb-4 leading-7 text-slate-600">Build your nutraceutical range with an experienced team covering formula development, production planning, quality systems and packaging.</p>
            <p className="leading-7 text-slate-500">Whether you need a ready-to-launch product or a differentiated proprietary formula, we adapt the project around your brand goals.</p>
            <Link href="/services/third-party-mfg" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-white transition hover:bg-accent">Explore manufacturing <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbf3ff] px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="Flexible Formats">Our Product Ranges</SectionTitle>
        <div className="container-max grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {productRanges.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-3 shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-xl"><Image src={item.image} alt={item.title} fill className="object-cover" sizes="220px" /></div>
              <h3 className="py-4 text-center text-sm font-black text-dark">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/products" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white">View all products <ArrowRight size={16} /></Link></div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="Quality Systems">Our Certifications</SectionTitle>
        <div className="container-max mb-10 grid gap-4 md:grid-cols-2">
          {certificationHighlights.map((item) => (
            <a
              key={item.title}
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-[#e5d8f3] bg-[#fbf8ff] px-6 py-4 font-bold text-primary transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Open ${item.title} certificate`}
            >
              <span>{item.title}</span>
              <BadgeCheck size={20} />
            </a>
          ))}
        </div>
        <div className="container-max grid grid-cols-2 items-center gap-7 sm:grid-cols-3 lg:grid-cols-5">
          {certificationLogos.map((item) => (
            <a
              key={item.name}
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-24 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Open ${item.name} certificate`}
            >
              <Image src={item.image} alt={`${item.name} certification`} fill className="object-contain p-4" sizes="180px" />
            </a>
          ))}
        </div>
      </section>

      <section className="grid text-center text-white lg:grid-cols-2">
        <div className="flex min-h-[280px] items-center bg-dark px-6 py-14 sm:px-10 lg:py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-black uppercase text-white sm:text-3xl">Turning Ideas Into High-Quality Nutraceutical Products</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">From concept and formulation to manufacturing and final delivery, we provide end-to-end nutraceutical solutions that help brands build products aligned with market demand, quality standards and business goals.</p>
          </div>
        </div>
        <div className="flex min-h-[280px] items-center border-t border-white/25 bg-primary px-6 py-14 sm:px-10 lg:border-l lg:border-t-0 lg:py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-black uppercase text-white sm:text-3xl">End-to-End Product Development &amp; Manufacturing</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75">Bring your product vision to life with flexible manufacturing options, innovative formulations and expert support. Whether you need an existing formulation or a product developed specifically for your brand, our solutions are tailored to your target consumers, category and market requirements.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2ff] px-4 py-16">
        <div className="container-max grid gap-4 sm:grid-cols-2">
          {solutions.map((solution) => <Link href="/products" key={solution} className="flex items-center justify-between rounded-xl bg-primary px-6 py-4 font-bold text-white transition hover:bg-accent"><span>{solution}</span><ArrowRight size={17} /></Link>)}
        </div>
      </section>

      <section className="bg-[#f7f0ff] px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="The Admire Advantage">Why Choose Us</SectionTitle>
        <div className="container-max grid grid-cols-2 gap-5 md:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return <Reveal key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-sm"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3eaff] text-primary"><Icon size={23} /></div><h3 className="text-sm font-black leading-5 text-dark">{item.title}</h3></Reveal>;
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="Simple & Transparent">Our Manufacturing Process</SectionTitle>
        <div className="container-max max-w-4xl space-y-3">
          {manufacturingProcess.map(([number, title, text], index) => (
            <div key={number} className="overflow-hidden rounded-xl border border-slate-200">
              <button onClick={() => setOpenProcess(openProcess === index ? -1 : index)} className="flex w-full items-center justify-between bg-[#fbf8ff] px-5 py-4 text-left">
                <span className="flex items-center gap-4 font-bold text-dark"><b className="text-primary">{number}</b>{title}</span><ChevronDown className={`transition ${openProcess === index ? 'rotate-180' : ''}`} size={18} />
              </button>
              <AnimatePresence initial={false}>{openProcess === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 py-4 text-sm leading-6 text-slate-500">{text}</motion.p>}</AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#f4fbff] px-4 py-14">
        <SectionTitle eyebrow="Built on Trust">Our Clients & Partners</SectionTitle>
        <div className="container-max flex flex-wrap items-center justify-center gap-4">
          {['Emerging D2C Brands', 'Fitness & Wellness', 'Healthcare Partners', 'Export Distributors', 'Private Labels'].map((client) => <div key={client} className="rounded-xl border border-slate-200 bg-white px-7 py-5 text-sm font-black uppercase tracking-wide text-slate-500 shadow-sm">{client}</div>)}
        </div>
      </section>

      <ContactSection />

      <section className="bg-[#f6efff] px-4 py-16 sm:py-20">
        <SectionTitle eyebrow="Need Help?">Frequently Asked Questions</SectionTitle>
        <div className="container-max max-w-4xl space-y-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-dark"><span>{question}</span><ChevronDown className={`shrink-0 transition ${openFaq === index ? 'rotate-180 text-primary' : ''}`} size={18} /></button>
              <AnimatePresence initial={false}>{openFaq === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-slate-100 px-5 py-4 text-sm leading-6 text-slate-500">{answer}</motion.p>}</AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}