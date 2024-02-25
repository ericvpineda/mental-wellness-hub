import React from "react"

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-8">Welcome to our Mental Health </h1>
            <h2 className="text-xl mt-4">Easy to use Navigation for writing down your thoughts in the journal about your mental health. Write down your thought, feelings, excitement, etc in the journal.</h2>
            <h3 className="text-lg mt-4">Learn more about mental health from the resources page</h3>

            <h1 className="text-3xl font-bold mt-8">Here is a small demo on how it works</h1>
            <p></p>
            <div className="relative mt-8">
                <div className="w-64 h-64 rounded-full bg-blue-500 opacity-50 absolute animate-pulse"></div>
                <div className="w-64 h-64 rounded-full bg-blue-500 opacity-25 absolute animate-ping"></div>
                <div className="w-64 h-64 rounded-full bg-blue-500 absolute flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">information here</span>
                </div>
            </div>
            
            <p>Footer below</p>
            

<footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

        </div>
    )
}

export default HomePage
