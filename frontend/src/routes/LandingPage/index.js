import React from "react"

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-8">We help with Mental Awareness, read below for more information </h1>
            <h2 className="text-xl mt-4">Easy to use Navigation for writing down your thoughts in the journal about your mental health. Write down your thought, feelings, excitement and more in the journal.</h2>
            <h3 className="text-lg mt-4">Learn more about mental health from the resources page</h3>

            <h1 className="text-3xl font-bold mt-8">Here is a small demo on how it works</h1>
            <div className="relative mt-8">
                <div className="w-64 h-64 rounded-full bg-blue-500 opacity-50 absolute animate-pulse"></div>
                <div className="w-64 h-64 rounded-full bg-blue-500 opacity-25 absolute animate-ping"></div>
                <div className="w-64 h-64 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">information here</span>
                </div>
            </div>
            
                <h1 className="text-xl font-bold mt-4">Here are some articles to check out from other people about there Mental Health</h1>
            <div className="grid grid-col-3 gap-4 gap-6">
                    <div>
                        <h2 className="mb-6 text-xl font-bold">Title of the Article</h2>
                    </div>
                    <div class="mb-6 flex-grow">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
            </div>
        </div>
    )
}

export default HomePage
