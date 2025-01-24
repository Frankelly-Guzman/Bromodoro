import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaCog } from 'react-icons/fa'
import { FaClock } from "react-icons/fa";
import { Button } from './ui/button'
import { useState, useEffect} from 'react'


const SettingsButton = () => {
    const [workingTime, setWorkingTime] = useState(25);
    const [shortBreakTime, setShortBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="flex flex-row gap-2 py-6">
                    <FaCog />
                    Settings
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Timer</DropdownMenuLabel>
                <DropdownMenuItem></DropdownMenuItem>
                <DropdownMenuItem>Notifications</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SettingsButton