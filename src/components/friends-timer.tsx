import React from "react";
import {useState, useEffect} from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useBackground } from "../utils/BackgroundContext";
import { Button } from "./ui/button";
import { FaFire } from "react-icons/fa6";


interface FriendsTimerProps {
    time?: number;
    paused?: boolean;
    streak?: number;
}

const FriendsTimer=()=>{
    const { bgColor } = useBackground();

    const containerStyle=`
    ${bgColor}
    flex
    justify-evenly
    `

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
        <>
            <span className={containerStyle}>
                <span className={outerSquare}>
                        <FriendsTimerInfo/>
                        <FriendsPauseButton/>
                </span>
            </span>
        </>
    );
};

interface FriendsPauseButtonProps{
    paused?: boolean;
}

const FriendsPauseButton=({paused=true}: FriendsPauseButtonProps)=>{
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
    `

    const iconStyle=`
    w-1/4
    h-1/4
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
    const containerStyle=`
    bg-black
    flex
    flex-col
    rounded-[30px]
    text-white
    h-1/2 w-3/4
    justify-evenly
    items-center
    shadow-[0px_-5px_0px_rgba(0,0,0,0.5)]
    bg-slate-1000 
    text-white"
    `
    const [workState, setState] = useState("Break");
    const [curTime, setTime] = useState(time);
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
                <p>{streak} <FaFire className= "inline" color="orange"/></p>
                <p className="text-[25px]">{String(Math.floor(curTime / 60)).padStart(2, '0')}:
                {String(curTime % 60).padStart(2, '0')}</p>
                <p className="text-[11px] pb-4">{workState} {iteration}/{maxIterations}</p>
            </span>
        </>
    );
};

export default FriendsTimer