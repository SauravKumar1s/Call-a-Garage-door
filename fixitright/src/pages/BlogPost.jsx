import { useParams, Link } from "react-router-dom";
import { Clock, Phone, ArrowLeft } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBanner from "../components/CtaBanner";
import { blogPosts } from "../data/content";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero crumb={post.title} eyebrow={post.category} title={post.title} />

      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <Reveal>
          <Link to="/blog" className="flex items-center gap-2 text-sm font-semibold text-ink-soft/60 transition-colors hover:text-red">
            <ArrowLeft size={15} /> Back to all articles
          </Link>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft/45">
            <Clock size={13} /> {post.readTime}
          </div>
          <div className="prose-none mt-8 space-y-5 text-[17px] leading-relaxed text-ink-soft/80">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between rounded-2xl bg-panel p-6">
            <div>
              <p className="font-display text-base font-bold uppercase tracking-tight text-ink">Still not sure what's wrong?</p>
              <p className="mt-1 text-sm text-ink-soft/60">A technician can diagnose it over the phone in most cases.</p>
            </div>
            <a href="tel:18005551234" className="flex shrink-0 items-center gap-2 rounded-full bg-red px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              <Phone size={15} /> Call now
            </a>
          </div>
        </Reveal>
      </article>

      <section className="bg-panel py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">More guides</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-panel-lg"
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-red">{p.category}</span>
                  <h3 className="mt-2 font-display text-sm font-bold uppercase leading-snug tracking-tight text-ink">{p.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
