import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function Project({ url, image, title, description, repo }: { url: string, image: string, title: string, description: string, repo: string }) {
    return (
        <div className="group m-auto border border-secondaryLow/50 rounded-2xl flex flex-col items-center w-full gap-3 p-4 bg-white/50 dark:bg-slate-900/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
            <div className="h-[280px] w-full relative rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={`${title} preview`}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="w-full">
                <h3 className="text-lg font-bold gradient-text">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full mt-auto">
                <Link className="w-full" href={url} target="_blank" rel="noopener noreferrer">
                    <button className="p-2 bg-primary text-sm text-slate-50 rounded-lg hover:bg-primaryLow hover:text-slate-900 dark:hover:text-slate-50 hover:scale-[1.02] active:scale-95 transition-all duration-200 w-full flex items-center justify-center gap-2">
                        <FiExternalLink />
                        Preview
                    </button>
                </Link>
                <Link className="w-full" href={repo} target="_blank" rel="noopener noreferrer">
                    <button className="p-2 border border-primary text-sm text-primary hover:bg-primary hover:text-slate-50 rounded-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 w-full flex items-center justify-center gap-2">
                        <FaGithub />
                        GitHub repo
                    </button>
                </Link>

            </div>
        </div>
    )
}