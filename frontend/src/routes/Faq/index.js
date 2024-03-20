import React, { useState } from "react";

const Faq = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false)

    const toggleAnswer1 = () => {
        setShowAnswer1(!showAnswer1);
    };

    const toggleAnswer2 = () => {
        setShowAnswer2(!showAnswer2);
    };

    const toggleAnswer3 = () => {
        setShowAnswer3(!showAnswer3);
    }

    return (
        <div className="px-6 py-8 bg-white rounded-lg max-w-7xl mx-auto">            
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-700 mb-8">The significance of mental health cannot be overstated; it constitutes a fundamental aspect of overall health and well-being, encompassing emotional, psychological, and social dimensions. Below, you will find responses to frequently asked questions concerning mental health, aimed at enhancing your comprehension and fostering support for your mental well-being.</p>
            <div className="border-t border-b border-gray-200 py-4">
                <h2 className="text-lg font-semibold flex items-center justify-between cursor-pointer" onClick={toggleAnswer1}>
                    What is Mental Health?
                    <span>{showAnswer1 ? '▼' : '▶'}</span>
                </h2>
                {showAnswer1 && (
                    <div className="mt-4">
                        <p className="text-gray-700">Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.</p>
                        <p className="text-gray-700 mt-2">It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
                    </div>
                )}
            </div>
            <div className="border-t border-b border-gry-200 py-4">
                <h2 className="text-lg font-semibold flex items-center justify-between cursor-pointer" onClick={toggleAnswer2}>
                    How can I improve my mental health?
                    <span>{showAnswer2 ? '▼' : '▶'}</span>
                </h2>
                {showAnswer2 && (
                    <div className="mt-4">
                        <p className="text-gray-700">There are many ways to improve your mental health, including engaging in regular physical activity, getting enough sleep, maintaining a healthy diet, practicing relaxation techniques such as meditation or deep breathing exercises, seeking social support, and avoiding or reducing the use of alcohol and other substances.</p>
                    </div>
                )}
            </div>
            <div className="border-t border-b border-gry-200 py-4">
                <h2 className="text-lg font-semibold flex items-center justify-between cursor-pointer" onClick={toggleAnswer3}>
                    Where can I find resources for mental health support?
                    <span>{showAnswer3 ? '▼' : '▶'}</span>
                </h2>
                {showAnswer3 && (
                    <div className="mt-4">
                        <p className="text-gray-700">There are many resources available for mental health support, including mental health hotlines, counseling services, support groups, and online resources. You can also talk to your healthcare provider or a mental health professional for guidance on finding the right support for your needs.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Faq;
