import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt.slice(0, 155),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt.slice(0, 155),
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="shell">
      <article className="reader">
        <Link href="/blog" className="text-link reader-back">
          Back to all notes
        </Link>

        <div className="reader-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="reader-title">{post.title}</h1>

        <ul className="reader-tags">
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="reader-rule" />

        <div className="reader-body">
          {post.content.map((section) => (
            <section key={section.heading} className="reader-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="reader-cta">
          <h2>Have a site that needs this?</h2>
          <p>
            Tell me what you are working on, and I will tell you what I would check
            first.
          </p>
          <Link href="mailto:ashsajal@yahoo.com" className="btn btn--primary">
            Start a conversation
          </Link>
        </aside>
      </article>
    </div>
  );
}
