import React from "react";
import {useState, useEffect} from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Button } from "./ui/button";
import { FaFire } from "react-icons/fa6";


interface FriendsTimerProps {
    time?: number;
    paused?: boolean;
    streak?: number;
}

const FriendsTimer=()=>{
    const outerSquare=`
    flex
    flex-col
    items-center
    justify-evenly
    rounded-[30px]
    w-52 h-40
    bg-sky-600
    shadow-[0px_5px_0px_rgba(0,0,0,0.5)]
    `

    return(
        <div className={outerSquare}>
            <FriendsTimerInfo/>
            <FriendsPauseButton/>
        </div>
    );
};

interface FriendsPauseButtonProps{
    paused?: boolean;
}

const FriendsPauseButton=({paused=true}: FriendsPauseButtonProps)=>{
    // Is the timer paused? (True/False)
    const [isPaused, setState] = useState(true);
    const switchState = () => {
        setState((prev) => !prev);
    };

    const containerStyle = `
    w-12 h-12
    flex
    justify-center
    items-center
    bg-black
    rounded-[10px]
    bg-slate-1000
    text-white"
    shadow-[0px_5px_0px_rgba(0,0,0,0.65)]
    `

    const iconStyle=`
    w-1/2
    h-1/2
    `

    return (
        <span className={containerStyle}>
            {isPaused ? (
                <>
                    <FaPlay color="white" className={iconStyle}></FaPlay>
                </>
            ) : (
                <>
                    <FaPause color="white" className={iconStyle}></FaPause>
                </>
                )}

        </span>
    )
};

interface FriendsTimerInfoProps {
    time?: number;
    paused?: boolean;
    streak?: number;
}

const FriendsTimerInfo=({time = 20, streak = 0}: FriendsTimerInfoProps)=>{
    const [workState, setState] = useState("Break"); //Work, Break or LongBreak?
    const [curTime, setTime] = useState(time);// Current Time 

    const containerStyle=`
    bg-black
    flex
    flex-col
    rounded-[30px]
    h-1/2 w-3/4
    items-center
    shadow-[0px_-5px_0px_rgba(0,0,0,0.5)]
    bg-slate-1000 
    font-extrabold
    text-white
    `

    useEffect(() => {
            if (curTime > 0) {
                const timer = setInterval(() => {
                    setTime((prev) => prev - 1);
                }, 1000);

                return () => clearInterval(timer); 
            }
        }, [curTime]);

    const switchState = () => {
        setState((prev) => (prev === "Break" ? "Work" : "Break"));
    };
    const countDown=()=>{
        setTime((prev) => (prev-1));
    };

    const iteration = 0;
    const maxIterations = 4;

    return (
        <>
            <span className={containerStyle}>
                <div className="flex justify-center items-center gap-0.5">{<FaFire className= "inline" color="orange"/>} {streak}</div>
                <p className="text-[25px]">{String(Math.floor(curTime / 60)).padStart(2, '0')}:{String(curTime % 60).padStart(2, '0')}</p>
                <p className="text-[11px] pb-4">{workState} {iteration}/{maxIterations}</p>
            </span>
        </>
    );
};

export default FriendsTimer