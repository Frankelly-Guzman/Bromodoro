import React from "react";
import {useState} from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useBackground } from "../utils/BackgroundContext";
import { Button } from "./ui/button";
import { FaFire } from "react-icons/fa6";


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
    rounded-[20px]
    w-48 h-40
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

const FriendsPauseButton=()=>{
    const [isPaused, setState] = useState(true);
    const switchState = () => {
        setState((prev) => !prev);
    }

    const containerStyle = `
    w-12 h-12
    flex
    justify-center
    items-center
    bg-black
    rounded-[10px]
    `

    const iconStyle=`
    w-5
    h-5
    flex
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
                )
            }
        </span>
    );
};

const FriendsTimerInfo=()=>{
    const containerStyle=`
    bg-black
    flex
    flex-col
    rounded-[30px]
    text-white
    h-20 w-40
    justify-evenly
    items-center
    shadow-[0px_-5px_0px_rgba(0,0,0,0.5)]
    `

    return (
        <>
            <span className={containerStyle}>
                <p><FaFire color="orange"/></p>
                <p className="text-[25px]">3:00</p>
                <p className="text-[11px]">Break 1/4</p>
            </span>
        </>
    );
};

export default FriendsTimer

