import React from 'react';
import PropTypes from 'prop-types';

export default function ImageItem({ image, headline, children, link }) {
    return (
        <div className="flex flex-col justify-start space-y-2 min-w-96 max-w-96">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">{headline}</h3>
                <img src={image} alt="Seeking Help Image" className="w-full h-64 mx-auto my-4 rounded-md " />
                <p className="text-gray-500 dark:text-gray-400">
                    {children}
                </p>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:border-blue-800 dark:focus:shadow-outline-blue dark:active:bg-blue-800">
                Read Article
            </a>
        </div>
    );
}

ImageItem.propTypes = {
    image: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired
};
