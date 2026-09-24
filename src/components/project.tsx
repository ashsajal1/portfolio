import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function Project({ url, image, title, description, repo }: { url?: string, image?: string, title: string, description: string, repo: string }) {
    return (
        <div className="group m-auto border border-secondaryLow/50 rounded-2xl flex flex-col items-center w-full gap-3 p-4 bg-white/50 dark:bg-slate-900/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
            <div className="h-[280px] w-full relative rounded-xl overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={`${title} preview`}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
                        <FaGithub aria-hidden="true" className="text-5xl text-primary dark:text-secondary" />
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">GitHub Repository</span>
                    </div>
                )}
            </div>

            <div className="w-full">
                <h2 className="text-lg font-bold gradient-text">{title}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full mt-auto">
                {url ? (
                    <Link href={url} target="_blank" rel="noopener noreferrer" className="w-full p-2 bg-primary text-sm text-slate-50 rounded-lg hover:bg-primaryLow hover:text-slate-900 dark:hover:text-slate-50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                        <FiExternalLink aria-hidden="true" />
                        Preview
                    </Link>
                ) : (
                    <div className="w-full" />
                )}
                <Link href={repo} target="_blank" rel="noopener noreferrer" className="w-full p-2 border border-primary text-sm text-primary hover:bg-primary hover:text-slate-50 rounded-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                    <FaGithub aria-hidden="true" />
                    GitHub repo
                </Link>

            </div>
        </div>
    )
}
