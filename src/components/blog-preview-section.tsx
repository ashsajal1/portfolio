import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { blogPosts } from "@/lib/blogPosts";

export default function BlogPreviewSection() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-12">
      <div className="container w-full mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold gradient-text">
              Latest Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl text-sm sm:text-base">
              Practical thinking on profitability, automation, and how the right software decisions grow your business.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary transition-all duration-200 hover:gap-3 shrink-0"
          >
            View all posts
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col border border-secondaryLow/50 rounded-2xl p-6 bg-white/50 dark:bg-slate-900/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiClock />
                  {post.readTime}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:gradient-text transition-all duration-200">
                {post.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary transition-all duration-200 hover:gap-3"
              >
                Read article
                <FiArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
