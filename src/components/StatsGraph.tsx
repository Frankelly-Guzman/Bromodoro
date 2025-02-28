import React from "react";
import mockStatsData from "@/lib/mockStatsData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Graph from "@/components/ui/graph"; 
import { FaTimes } from "react-icons/fa";
import { Clock, CalendarDays, Flame } from "lucide-react";

const StatsGraph = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="bg-black text-white p-8 rounded-lg w-[500px] md:w-[600px]" hideCloseButton={true}>
    {/* Close Button */}
        <div className="flex justify-end">
            <button onClick={onClose} title="Close" className="text-white text-lg">
                <FaTimes className="h-5 w-5" />
            </button>
        </div>


        {/* Use the Graph Component without extra wrappers */}
        <Graph title="Weekly Stats" data={mockStatsData.weeklyStats} />

        {/* Stats Details with Icons */}
        <div className="mt-4 text-center space-y-2">
        <p className="flex items-center justify-center gap-2 text-xl font-bold text-white">
            <Clock size={22} /> <span>{mockStatsData.totalHours}</span> <span className="font-normal text-gray-400">hours focused</span>
        </p>
        <p className="flex items-center justify-center gap-2 text-xl font-bold text-white">
            <CalendarDays size={22} /> <span>{mockStatsData.daysAccessed}</span> <span className="font-normal text-gray-400">days accessed</span>
        </p>
        <p className="flex items-center justify-center gap-2 text-xl font-bold text-white">
            <Flame size={22} /> <span>{mockStatsData.streak}</span> <span className="font-normal text-gray-400">day streak</span>
        </p>
        </div>



      </DialogContent>
    </Dialog>
  );
};

export default StatsGraph;
