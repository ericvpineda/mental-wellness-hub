import React, { useRef, useState } from 'react';
import meditation from '../assets/meditation.mp3';

export default function Meditation() {
    const audioRef1 = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [timerActive, setTimerActive] = useState(false);
    const [inputValue, setInputValue] = useState(0);

    const togglePlay = (audioRef) => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    const startTimer = () => {
        // TODO
        setTimerActive(true);
    }

    const handleSubmit = () => {
        // TODO
        console.log("handleSubmit")
    }

  return (
    <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-3/4 bg-white">
            <div>
                <h1 className="text-7xl font-bold mb-2">Meditation Timer</h1>
                <p className="text-3xl text-center text-gray-500 mb-4">Set your intentions and peace.</p>
            </div>
            <div className="flex justify-center items-center w-1/6">
                <ClockIcon className="w-6 h-6 mr-2" />
                <form className="w-1/2" onSubmit={handleSubmit}>
                    <input type="number" min="0" max="100" className="w-full p-2 border-2 border-gray-300 rounded-lg" value={inputValue} onChange={e => setInputValue(e.target.value)} disabled={timerActive} />
                </form>
            </div>
            <div className="w-1/6 flex justify-around mt-4">
                <button name="start" onClick={ startTimer } className="bg-black border-2 border-black text-white font-bold py-2 px-6 rounded-md mt-4 hover:text-sky-500 duration-200">Start</button>
                <button className="bg-black border-2 border-black text-white font-bold py-2 px-6 rounded-md mt-4 ml-4 hover:text-sky-500 duration-200">Stop</button>
            </div>
            <div className={timerActive ? "block" : "hidden"}>
                <h1 className="text-3xl font-bold mt-4">Time Remaining:</h1>
                <h1 className="text-7xl font-bold">00:00</h1>
            </div>
        </div>
        <div className="flex flex-col h-1/4 justify-around items-center border-t-2">
           <h1 className="text-2xl font-bold">Peaceful, ad-free music for zero disturbance.</h1>
           <div className="flex flex-row w-1/2 justify-around">
                <div className="flex flex-row items-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-md">
                    <h1 className="text-lg font-semibold">Ambient Music</h1>
                    <button onClick={() => togglePlay(audioRef1)} className="ml-4 bg-black text-white rounded py-2 px-4 hover:text-green-400 duration-200">{isPlaying ? 'Pause' : 'Play'}</button>
                    <audio ref={audioRef1} src={meditation}/>
                </div>
                <div className="flex flex-row items-center bg-tree px-6 py-3 rounded-md">
                    <h1 className="text-lg font-semibold">Nature Sounds</h1>
                    <button onClick={() => togglePlay(audioRef1)} className="ml-4 bg-black text-white rounded py-2 px-4 hover:text-green-400 duration-200">{isPlaying ? 'Pause' : 'Play'}</button>
                    <audio ref={audioRef1} src={meditation}/>
                </div>
           </div>
        </div>
    </div>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
