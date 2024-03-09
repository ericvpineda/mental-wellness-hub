import React from "react";

const ContactUs = () => {
    return (
        <div class="container grid max-w-3xl min-h-screen place-content-center px-4 space-y-4">
            <div class="space-y-2">
                <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200">Contact Us</h1>
                <p class="text-gray-600 dark:text-gray-400">
                    Please fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800 dark:text-gray-200"
                            for="first-name"
                        >
                            First name
                        </label>
                        <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-field"
                            id="first-name"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div class="space-y-2">
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800 dark:text-gray-200"
                            for="last-name"
                        >
                            Last name
                        </label>
                        <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-field"
                            id="last-name"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>
                <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800 dark:text-gray-200"
                        for="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-field"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800 dark:text-gray-200"
                        for="subject"
                    >
                        Subject
                    </label>
                    <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-field"
                        id="subject"
                        placeholder="Enter the subject"
                    />
                </div>
                <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800 dark:text-gray-200"
                        for="message"
                    >
                        Message
                    </label>
                    <textarea
                        class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] input-field"
                        id="message"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 btn-primary">
                    Send message
                </button>
            </div>
            <div class="space-y-2">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Need immediate assistance?</h2>
                <p class="text-gray-600 dark:text-gray-400">Call our support line: +1 (555) 123-4567</p>
            </div>
        </div>
    )
}

export default ContactUs