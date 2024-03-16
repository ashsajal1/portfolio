import Image from "next/image";

export default function Project() {
    return (
        <div className="m-auto border flex flex-col items-center w-full gap-2 p-2">
            <div className="h-[280px] w-full relative">
                <Image
                    src="/webapp/reactjs-nextjs-gig-image-1.png"
                    alt="project image"
                    fill={true} 
                />
            </div>

            <div>
                <h3 className="text-lg font-bold">AI Image Classification</h3>
                <p className="text-sm">AI Image Classification</p>
            </div>

            <div className="flex items-center justify-between gap-2 w-full">
                <button className="p-2 bg-primary text-sm text-slate-50 rounded hover:bg-primaryLow w-full">Preview</button>
                <button className="p-2 border border-primary text-sm text-primary hover:bg-primaryLow rounded  w-full">Preview</button>
            </div>
        </div>
    )
}
