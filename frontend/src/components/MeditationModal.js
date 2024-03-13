import React from "react";
import PropTypes from 'prop-types';

export default function MeditationModal( {toggleModal} ) {
    return (
        <div className="h-full w-full text-black fixed rounded-md flex justify-center items-center bg-opacity-50 bg-black">
            <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 h-2/3 border-2 border-gray-300 flex flex-col items-center justify-around p-4 shadow-lg rounded-lg">
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-gray-700">Great Meditation!</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-around text-black">
                    <div className="w-full flex flex-col justify-around items-center mb-4">
                        <label className="text-xl font-semibold text-gray-700" htmlFor="meditationRange">Rate Your Meditation</label>
                        <input type="range" min="1" max="10" step="1" className="slider mt-2" />
                    </div>
                    <div className="w-full flex flex-col justify-around items-center mb-4">
                        <h1 className="text-xl font-semibold text-gray-700">What did you learn?</h1>
                        <textarea className="text-black mt-2 p-2 w-full h-24 border rounded"></textarea>
                    </div>
                    <div className="w-1/2 flex justify-around items-center">
                        <button onClick={toggleModal} className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-md text-black">Close</button>
                        <button onClick={toggleModal} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

MeditationModal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
};