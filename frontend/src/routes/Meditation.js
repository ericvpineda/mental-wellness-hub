import React, { useRef, useState } from 'react';
import MeditationModal from '../components/MeditationModal';
import meditation from '../assets/meditation.mp3';


export default function Meditation() {
    const audioRef1 = useRef(null);
    const audioRef2 = useRef(null);

    const [isPlaying, setIsPlaying] = useState({audio1: false, audio2: false});
    const [timerActive, setTimerActive] = useState(false);
    const [hoursLeft, setHoursLeft] = useState("00");
    const [minutesLeft, setMinutesLeft] = useState("00");
    const [secondsLeft, setSecondsLeft] = useState("00");
    const [inputValue, setInputValue] = useState();
    const [showModal, setShowModal] = useState(false);

    const togglePlay = (audioRef, audioKey) => {
        if (audioRef.current.paused) {
            // Pause the other audio
            if (audioKey === 'audio1') {
                audioRef2.current.pause();
                setIsPlaying(prevState => ({...prevState, audio2: false}));
            } else {
                audioRef1.current.pause();
                setIsPlaying(prevState => ({...prevState, audio1: false}));
            }
    
            // Play the current audio
            audioRef.current.play();
            setIsPlaying(prevState => ({...prevState, [audioKey]: true}));
        } else {
            audioRef.current.pause();
            setIsPlaying(prevState => ({...prevState, [audioKey]: false}));
        }
    }

    const intervalRef = useRef(null);

    const startTimer = () => {
        setTimerActive(true);
        let time = inputValue * 60;
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor(time / 60) % 60;
        let seconds = time % 60;
        setHoursLeft(hours.toString().padStart(2, '0'));
        setMinutesLeft(minutes.toString().padStart(2, '0'));
        setSecondsLeft(seconds.toString().padStart(2, '0'));
        intervalRef.current = setInterval(() => {
            if (time > 0) {
                time--;
                hours = Math.floor(time / 3600);
                minutes = Math.floor(time / 60) % 60;
                seconds = time % 60;
                setHoursLeft(hours.toString().padStart(2, '0'));
                setMinutesLeft(minutes.toString().padStart(2, '0'));
                setSecondsLeft(seconds.toString().padStart(2, '0'));
            } else {
                clearInterval(intervalRef);
                setTimerActive(false);
                setShowModal(true);
            }
        }, 1000);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
        console.log(showModal);
        clearInterval(intervalRef.current);
    }

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setTimerActive(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the page from refreshing when the form is submitted
        const newValue = event.target.elements[0].value;
        setInputValue(newValue);
        startTimer();
    }

  return (
    <div className="h-screen">
        {showModal && <MeditationModal toggleModal={toggleModal}/>}
        <div className="h-screen">
            <div className={"flex flex-col items-center justify-center h-3/4 bg-white"}>
                <div>
                    <h1 className="text-7xl font-bold mb-2">Meditation Timer</h1>
                    <p className="text-3xl text-center text-gray-500 mb-4">Set your intentions and peace.</p>
                </div>
                <div className="flex justify-center items-center w-1/6">
                    <ClockIcon className="w-6 h-6 mr-2" />
                    <form className="w-2/3" onSubmit={handleSubmit}>
                        <input type="number" min="0" max="100" className="w-full p-2 border-2 border-gray-300 rounded-lg" value={inputValue} onChange={e => setInputValue(e.target.value)} disabled={timerActive} placeholder="Enter minutes" />
                    </form>
                </div>
                <div className="w-1/6 flex justify-around mt-4">
                    <button id="timerButton" name="start" onClick={ startTimer } className={timerActive ? "hidden" : "bg-black border-2 border-black text-white font-bold py-2 px-6 rounded-md mt-4 hover:text-green-500 duration-200"}>Start</button>
                    <button onClick={ stopTimer } className={timerActive ? "bg-black border-2 border-black text-white font-bold py-2 px-6 rounded-md mt-4 ml-4 hover:text-red-500 duration-200" : "hidden"}>Stop</button>
                </div>
                <div className={timerActive ? "block" : "hidden"}>
                    <h1 className="text-3xl font-bold mt-4 text-center">Time Remaining:</h1>
                    <h1 className="text-7xl font-bold text-center">{hoursLeft}:{minutesLeft}:{secondsLeft}</h1>
                </div>
            </div>
            <div className={"flex flex-col h-1/4 justify-around items-center border-t-2"}>
            <h1 className="text-2xl font-bold">Peaceful, ad-free music for zero disturbance.</h1>
            <div className="flex flex-row w-1/2 justify-around">
                    <div className="flex flex-row items-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-md">
                        <h1 className="text-lg font-semibold">Ambient Music</h1>
                        <button onClick={() => togglePlay(audioRef1, 'audio1')} className="ml-4 bg-black text-white rounded py-2 px-4 hover:text-sky-500 duration-200">{isPlaying.audio1 ? 'Pause' : 'Play'}</button>
                        <audio ref={audioRef1} src={meditation}/>
                    </div>
                    <div className="flex flex-row items-center bg-tree px-6 py-3 rounded-md">
                        <h1 className="text-lg font-semibold">Nature Sounds</h1>
                        <button onClick={() => togglePlay(audioRef2, 'audio2')} className="ml-4 bg-black text-white rounded py-2 px-4 hover:text-sky-500 duration-200">{isPlaying.audio2 ? 'Pause' : 'Play'}</button>
                        <audio ref={audioRef2} src={meditation}/>
                    </div>
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
