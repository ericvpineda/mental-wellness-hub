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
            <p className="text-gray-700 mb-8">We value your questions and aim to provide as much support as possible. If you have questions not listed in the FAQ, please contact us in the Contact Us section.</p>
            <div className="border-t border-b border-gray-200 py-4">
                <h2 className="text-lg font-semibold flex items-center justify-between cursor-pointer" onClick={toggleAnswer1}>
                    What is mental health?
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
                    How does this service help my mental wellness?
                    <span>{showAnswer2 ? '▼' : '▶'}</span>
                </h2>
                {showAnswer2 && (
                    <div className="mt-4">
                        <p className="text-gray-700">We are not mental health professionals, thus we ultimately recommend you seek professional help. However, our service has merit in providing resources and services supported by mental health professionals, aiming to improve accessiblity and awareness to others.</p>
                    </div>
                )}
            </div>
            <div className="border-t border-b border-gry-200 py-4">
                <h2 className="text-lg font-semibold flex items-center justify-between cursor-pointer" onClick={toggleAnswer3}>
                    What services do you provide for mental health support?
                    <span>{showAnswer3 ? '▼' : '▶'}</span>
                </h2>
                {showAnswer3 && (
                    <div className="mt-4">
                        <p className="text-gray-700">Our main services are a meditation guider, a journaling tool, and a bot for cognitive behavioral therapy. Additonally, we provide resources about mental health.</p>
                        <p className="mt-1">We aim to add more services in the future.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Faq;
