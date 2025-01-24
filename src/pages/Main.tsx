import { useState, useEffect } from "react";
import { useBackground } from "@/utils/BackgroundContext";

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
      <button
        onClick={() => setWorking((prev) => !prev)}
        className="m-auto p-4 text-white bg-gray-800 rounded-lg"
      >
        Toggle Working
      </button>
    </div>
  );
};

export default Main;