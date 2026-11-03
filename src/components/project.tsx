import Image from "next/image";
import Link from "next/link";

export default function Project({
  url,
  image,
  title,
  description,
  repo,
  tags,
}: {
  url?: string;
  image?: string;
  title: string;
  description: string;
  repo: string;
  tags: string[];
}) {
  return (
    <article className="project">
      {image ? (
        <Link
          href={url ?? repo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-media"
        >
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
          />
        </Link>
      ) : (
        <div className="project-media project-media--text">
          <span>{title}</span>
        </div>
      )}

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <ul className="project-tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-actions">
          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit site
            </Link>
          )}
          <Link
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Source
          </Link>
        </div>
      </div>
    </article>
  );
}
