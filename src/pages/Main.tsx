import { useState, useEffect } from "react";
import { useBackground } from "@/utils/BackgroundContext";
import Timer from "../components/Timer"

const Main = () => {
  const [working, setWorking] = useState(false);
  const { bgColor, setBgColor } = useBackground(); // Get and set background color from context

  useEffect(() => {
    if (working) {
      setBgColor("bg-black");
    } else {
      setBgColor("bg-red-700");
    }
  }, [working, setBgColor]);

  return (
    <div className={`flex min-w-screen min-h-screen ${bgColor}`}>
      <Timer />
    </div>
  );
};

export default Main;
