import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="shell">
      <section className="notfound">
        <p className="notfound-code" aria-hidden="true">
          404
        </p>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-text">
          The link may be old, or the page has moved.
        </p>
        <Link href="/" className="btn btn--primary">
          Back to home
        </Link>
      </section>
    </div>
  );
}
