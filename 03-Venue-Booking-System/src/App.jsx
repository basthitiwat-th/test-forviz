import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#B9BDC8]">
      <main className="h-[650px] w-11/12 flex drop-shadow-2xl overflow-hidden">
        {/* Section left */}
        <section className="w-2/5 flex flex-col items-end text-white bg-[#46529D] shadow-2xl">
          {/* Content Section-Left */}
          <div className="w-11/12 space-y-14 pb-20">
            {/* Head Left */}
            <div className="h-28 pl-8 pt-12 bg-[#2EBAEE] shadow-2xl">
              <h1>A101</h1>
            </div>

            <p className="text-sm text-start">Upcoming</p>

            <div>
              <h1 className="opacity-50">Monday</h1>
              <h1>28 Sep</h1>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm opacity-50">13:00 - 14:00</p>
                <p>Lunch with Petr</p>
              </div>
              <div>
                <p className="text-sm opacity-50">15:00 - 16:00</p>
                <p>Sales Weekly Meeting</p>
              </div>
              <div>
                <p className="text-sm opacity-50">16:00 - 18:00</p>
                <p>Anastasia Website Warroom</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Right */}
        <section className="w-3/5">
          {/* Navigation */}
          <div className="h-28 pl-8 pt-10 flex space-x-10 bg-[#EFEEEC]">
            <div className="py-5 border-b-4 border-indigo-600">
              <p className="uppercase font-bold text-black">This week</p>
            </div>
            <div className="py-5 cursor-pointer">
              <p className="uppercase font-bold opacity-50">Next week</p>
            </div>
            <div className="py-5 cursor-pointer">
              <p className="uppercase font-bold opacity-50">WHOLE MONTH</p>
            </div>
          </div>

          {/* Content Section-Left */}
          <div className="h-full overflow-x-auto bg-white">
            {/* เว้นระยะด้านบน */}
            <div className="h-10 w-full">
              <div className="ms-8 h-full border-l-2 border-[#ECECEC]"></div>
            </div>

            {/* List room event 01 */}
            <div>
              {/* Header Time */}
              <div className="w-full pl-14 py-2 bg-[#ECECEC]">
                <p className="text-[#787878]">Today (Mon, 28 Sep)</p>
              </div>

              {/* Item list room */}
              <div className="ms-8 ps-5 py-10 h-full border-l-2 space-y-5 border-[#ECECEC]">
                {/* map Data */}
                <div>
                  <p className="text-sm opacity-50 relative"><span className="absolute -left-6">-</span>14:00 - 15:00</p>
                  <p>Lunch with Petr</p>
                </div>
                <div>
                  <p className="text-sm opacity-50">13:00 - 14:00</p>
                  <p>Sales Weekly Meeting</p>
                </div>
                <div>
                  <p className="text-sm opacity-50">16:00 - 18:00</p>
                  <p>Anastasia Website Warroom</p>
                </div>
              </div>
            </div>

            {/* List room event 02 */}
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
