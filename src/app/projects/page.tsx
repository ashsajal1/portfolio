import Project from "@/components/project";

export default function Projects() {
  return (
    <div>
      <h3 className="text-xl gradient-text font-medium text-center p-2 border-b w-1/2 m-auto border-secondary">Here is a list of projects!</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <Project title="AI Image Classification" image="/webapp/reactjs-nextjs-gig-image-1.png" description="Ai image classification built with Next.js and Typescript. API is provided by Huggingface" url="https://nextjs-image-classification.vercel.app/" repo='https://github.com/ashsajal1/nextjs-image-classification' />
        <Project title="AI Image Classification" image="/webapp/reactjs-nextjs-gig-image-1.png" description="AI Image Classification" url="https://nextjs-image-classification.vercel.app/" repo='https://github.com/ashsajal1/nextjs-image-classification' />
        <Project title="AI Image Classification" image="/webapp/reactjs-nextjs-gig-image-1.png" description="AI Image Classification" url="https://nextjs-image-classification.vercel.app/" repo='https://github.com/ashsajal1/nextjs-image-classification' />
        
      </div>
    </div>
  )
}
