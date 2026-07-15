import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { blogPosts } from "../data/content";

export default function Blog() {
  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="From the shop"
        title="Garage door guides that don't try to sell you anything"
        subtitle="Straightforward answers from the technicians who actually do the work — no fluff, no forms to fill out just to keep reading."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-panel-lg"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-red">{post.category}</span>
                <h2 className="mt-3 font-display text-xl font-bold uppercase leading-snug tracking-tight text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft/65">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft/45">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-red">
                    Read <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
