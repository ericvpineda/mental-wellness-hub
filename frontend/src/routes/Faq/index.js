import React, { useState } from "react";

const Faq = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-700 mb-8">The significance of mental health cannot be overstated; it constitutes a fundamental aspect of overall health and well-being, encompassing emotional, psychological, and social dimensions. Below, you'll find responses to frequently asked questions concerning mental health, aimed at enhancing your comprehension and fostering support for your mental well-being.</p>
            <div className="border-t border-b border-gray-200 py-4">
                <h2 className="text-lg font-semibold flex items-center justify-between cursor-pointer" onClick={toggleAnswer}>
                    What is Mental Health?
                    <span>{showAnswer ? '▼' : '▶'}</span>
                </h2>
                {showAnswer && (
                    <div className="mt-4">
                        <p className="text-gray-700">Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.</p>
                        <p className="text-gray-700 mt-2">It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
                    </div>
                )}
            </div>
            <div className="border-t border-b border-gry-200 py-4">
                <h2 className="text-lg font-semibold flex items-center jusity-between cursor pointer" onClick={toggleAnswer}>
                    How can I improve my mental health?
                </h2>
            </div>
        </div>
    )
}

export default Faq;
