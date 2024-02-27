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

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3x1 font-bold mb-4">Resources page</h1>
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Articles</h2>
                <ul className="list-disc pl-4">
                    {articles.map((article, index) => (
                        <li key={index}>
                            <a href={article.link} className="text-blue-600 hover:underline">{article.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Hotlinks</h2>
                <ul className="list-disc pl-4">
                    {hotlinks.map((hotlink, index) => (
                        <li key={index}>
                            <a href={hotlink.link} className="text-blue-600 hover:underline">{hotlink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Resources
