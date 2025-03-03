import React from "react";
import { useEffect } from "react"
import FriendsTimer from "./FriendsTimer"


type SidebarProps = {
    isOpen: boolean
    setIsOpen: (open: boolean) => void;
}

const FriendSideBar: React.FC<SidebarProps> = ({isOpen, setIsOpen}) => {
    
    useEffect(() =>  {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById("friend-sidebar")
            if (sidebar && !sidebar.contains(event.target as Node)) {
                setIsOpen(false);        
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    
        
    return (
        <div className="relative">
            <div id="friend-sidebar" className={`fixed top-0 right-0 w-[700px] h-full bg-gray-default text-white
                    shadow-lg transition-transform duration-300  p-12 overflow-auto no-scrollbar ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <p className="mb-16 font-mono text-center text-white font-bold text-2xl mb-4">Your Bromdoros</p>
                <div className="grid grid-cols-2 gap-20">
                   
                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Rafa</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Frankelly</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Mohammad</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Aisha</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Ricky</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Kevin</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Rafa</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Frankelly</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Mohammad</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Aisha</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Ricky</p>
                    </div>

                    <div className="scale-125 flex flex-col items-center">
                        <FriendsTimer />
                        <p className="text-white font-medium mt-2">Kevin</p>
                    </div>

                    </div>
                </div>
            </div>
    );
}

export default FriendSideBar;
