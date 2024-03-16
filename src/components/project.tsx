import Image from "next/image";
import Link from "next/link";

export default function Project({ url, image, title, description, repo }: { url: string, image: string, title: string, description: string, repo: string }) {
    return (
        <div className="m-auto border flex flex-col items-center w-full gap-2 p-2">
            <div className="h-[280px] w-full relative">
                <Image
                    src={image}
                    alt="project image"
                    fill={true}
                />
            </div>

            <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
                <Link className="w-full" href={url} target="_blink">
                    <button className="p-2 bg-primary text-sm text-slate-50 rounded hover:bg-primaryLow w-full">Preview</button>
                </Link>
                <Link className="w-full" href={repo} target="_blink">
                    <button className="p-2 border border-primary text-sm text-primary hover:bg-primaryLow rounded  w-full">Github repo</button>
                </Link>

            </div>
        </div>
    )
}
