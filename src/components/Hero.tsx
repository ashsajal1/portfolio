
export default function Hero() {
    return (
        <div className='hero bg-base-200 dark:bg-gray-800 dark:text-slate-50 pb-2'>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-4 md:text-5xl md:mb-6 bg-gradient-to-r from-green-500 via-green-500 to-blue-500 text-transparent bg-clip-text text-center">Hello there</h1>
                    <p className="pt-2 pb-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn  btn-success rounded-2xl">Get Started</button>
                    <div className="flex flex-row justify-center items-center md:flex-row gap-4 mt-2">
                        <button className="btn btn-outline btn-success text-white">Get Started</button>
                        <button className="btn btn-outline btn-success text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

