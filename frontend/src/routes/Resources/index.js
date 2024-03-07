import React from "react";

const Resources = () => {

    const articles = [
        { title: "Understanding Anxiety Disorders", link: "https://example.com/article1" },
        { title: "Tips for Managing Stress", link: "https://example.com/article2" },
        { title: "Importance of Self-Care", link: "https://example.com/article3" }
    ];

    const hotlinks = [
        { title: "National Alliance on Mental Illness", link: "https://nami.org" },
        { title: "Mental Health America", link: "https://mhanational.org" },
        { title: "Crisis Text Line", link: "https://www.crisistextline.org" }
    ]

    const videos = [
        { title: "Understanding Bipolar Disorder", link: "https://www.youtube.com/watch?v=O4D8XIsoU0Y"},
        { title: "Overcoming PTSD: Personal Stories", link: "https://www.youtube.com/watch?v=fxM0aeZ3vLg"},
        { title: "Self-Care and Mental Wellness", link: "https://www.youtube.com/watch?v=IYq0h3KgDpY"}
    ]

    return (
        <div className="container mx-auto px-4 py-8 flex">
            <div className="w-1/2 pr-8">
                <h1 className="text-3xl font-bold mb-4">Mental Health Resources</h1>
                <p>Access articles and external resources to support mental well-being</p>
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-2">Articles</h2>
                    <ul className="list-disc pl-4">
                        {articles.map((article, index) => (
                            <li key={index}>
                                <a href={article.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    <span className="mr-1"></span>{/* Link Icon */}
                                    {article.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Hotlinks</h2>
                    <ul className="list-disc pl-4">
                        {hotlinks.map((hotlink, index) => (
                            <li key={index}>
                                <a href={hotlink.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{hotlink.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-1/2">
                <h2 className="text-xl font-bold mb-2">Videos</h2>
                <ul className="list-disc pl-4">
                    {videos.map((video, index) => (
                        <li key={index}>
                            <a href={video.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{video.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Resources;
