import Link from "next/link";
import { notFound } from "next/navigation";
import { FiClock, FiCalendar, FiArrowLeft } from "react-icons/fi";
import { blogPosts } from "@/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary transition-all duration-200 hover:gap-3 mb-8"
        >
          <FiArrowLeft />
          Back to blog
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiClock />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold gradient-text leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-secondaryLow/50 dark:border-secondaryLow/20 bg-secondaryLow/10 dark:bg-secondary/10 px-3 py-0.5 text-xs font-medium text-secondary dark:text-secondaryLow"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-transparent" />

        <article className="space-y-10">
          {post.content.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 mt-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-secondaryLow/50 dark:border-secondaryLow/20 p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-bold gradient-text mb-2">
            Have a project like this in mind?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 max-w-md mx-auto">
            Let&apos;s talk about how the right software decisions can grow your business.
          </p>
          <Link
            href="mailto:ashsajal@yahoo.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium bg-gradient-to-br from-primary to-secondary text-slate-50 hover:to-secondaryHigh transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
