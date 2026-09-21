'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { productForms } from '@/data/productForms';

export default function RangeOfProductsPage() {
  const [selectedId, setSelectedId] = useState(productForms[0].id);
  const [menuOpen, setMenuOpen] = useState(true);
  const selectedProduct = productForms.find((item) => item.id === selectedId) ?? productForms[0];

  useEffect(() => {
    const selectFromHash = () => {
      const id = window.location.hash.slice(1);
      if (productForms.some((item) => item.id === id)) setSelectedId(id);
    };

    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);
    return () => window.removeEventListener('hashchange', selectFromHash);
  }, []);

  const selectProduct = (id) => {
    setSelectedId(id);
    window.history.replaceState(null, '', `#${id}`);
    if (window.innerWidth < 1024) setMenuOpen(false);
  };

  return (
    <div className="bg-[#faf8ff] pb-20 pt-28 xl:pt-[164px]">
      <header className="border-y border-primary/10 bg-white px-5 py-12 text-center sm:py-16">
        <p className="text-[11px] font-black uppercase tracking-[0.32em] text-primary">Flexible dosage formats</p>
        <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-dark sm:text-5xl">Range of Products</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Select a dosage format to explore the manufacturing and packaging options available for your brand.
        </p>
      </header>

      <section className="container-max grid gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-10 lg:py-16">
        <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-28">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex w-full items-center justify-between border-b border-slate-200 px-6 py-5 text-left text-xl font-black text-slate-950"
            aria-expanded={menuOpen}
            aria-controls="product-format-menu"
          >
            <span className="border-b-2 border-slate-900 leading-tight">Range Of Products</span>
            <ChevronDown className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} size={21} />
          </button>

          <AnimatePresence initial={false}>
            {menuOpen && (
              <motion.div
                id="product-format-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <nav className="flex flex-col p-3" aria-label="Product formats">
                  {productForms.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectProduct(item.id)}
                      className={`rounded-xl px-4 py-4 text-left text-lg transition ${
                        selectedId === item.id
                          ? 'bg-primary text-white shadow-md'
                          : 'text-slate-700 hover:bg-primary/5 hover:text-primary'
                      }`}
                    >
                      <span className={selectedId === item.id ? 'border-b border-white' : ''}>{item.name}</span>
                    </button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>

        <AnimatePresence mode="wait">
          <motion.article
            key={selectedProduct.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(55,31,112,0.1)] md:grid-cols-2"
          >
            <div className="relative min-h-[300px] bg-[#eee7fa] md:min-h-[540px]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">{selectedProduct.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-dark sm:text-4xl">{selectedProduct.title}</h2>
              <p className="mt-5 leading-7 text-slate-500">{selectedProduct.description}</p>

              <ul className="mt-7 space-y-4">
                {selectedProduct.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="shrink-0 text-primary" size={19} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={`/range-of-products/${selectedProduct.id}/`} className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5">
                  View Demo Products <ArrowRight size={18} />
                </Link>
                <Link href="/customize" className="inline-flex items-center rounded-full border border-primary/20 px-7 py-4 text-sm font-black text-primary transition hover:bg-primary hover:text-white">
                  Customize
                </Link>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </section>
    </div>
  );
}
