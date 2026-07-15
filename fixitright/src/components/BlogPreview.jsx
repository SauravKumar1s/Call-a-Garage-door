import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "../data/content";
import Reveal from "./Reveal";

export default function BlogPreview() {
  return (
    <section className="bg-panel py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-red">From the shop</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Guides worth reading before you call anyone
            </h2>
          </div>
          <Link
            to="/blog"
            className="group flex shrink-0 items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
          >
            All articles
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-panel-lg"
              >
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-red">{post.category}</span>
                <h3 className="mt-3 font-display text-base font-bold leading-snug uppercase tracking-tight text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft/60">{post.excerpt}</p>
                <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft/45">
                  <Clock size={12} /> {post.readTime}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
