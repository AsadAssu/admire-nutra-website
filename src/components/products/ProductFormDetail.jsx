import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PackageCheck } from 'lucide-react';
import { productForms } from '@/data/productForms';

export default function ProductFormDetail({ product }) {
  return (
    <div className="bg-[#faf8ff] pb-20 pt-28 xl:pt-[164px]">
      <section className="container-max px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_rgba(55,31,112,0.12)] lg:grid-cols-2">
          <div className="relative min-h-[340px] bg-[#eee7fa] lg:min-h-[560px]">
            <Image src={product.image} alt={product.title} fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-transparent" />
            <span className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2 text-xs font-black uppercase tracking-widest text-primary backdrop-blur-sm">{product.name}</span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-accent">{product.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-dark sm:text-5xl">{product.title}</h1>
            <p className="mt-6 leading-7 text-slate-500">{product.description}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />{feature}
                </li>
              ))}
            </ul>
            <Link href="/customize" className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-accent to-primary px-7 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5">
              Start Your Product <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-max px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-9 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.32em] text-primary">Sample catalogue</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-dark sm:text-4xl">Demo {product.name} Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">These examples can be customized around your ingredients, positioning, serving size and packaging goals.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {product.demoProducts.map((item, index) => (
            <article key={item.name} className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><PackageCheck size={24} /></span>
                <span className="text-4xl font-black text-primary/10">0{index + 1}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">{item.category}</p>
              <h3 className="mt-3 text-xl font-black text-dark">{item.name}</h3>
              <p className="mt-4 inline-flex rounded-full bg-[#f5efff] px-4 py-2 text-xs font-bold text-primary">{item.pack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-max px-4 sm:px-6">
        <div className="rounded-3xl bg-dark p-7 text-white sm:p-10">
          <h2 className="text-xl font-black uppercase sm:text-2xl">Explore Other Product Formats</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {productForms.filter((item) => item.id !== product.id).map((item) => (
              <Link key={item.id} href={`/range-of-products/${item.id}/`} className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-dark">{item.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
