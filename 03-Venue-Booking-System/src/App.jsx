import { useState, useEffect } from "react";
import "./App.css";

import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);

  let weekNo;
  /* Get weekNo */
  weekNo = location.pathname;
  /* Get roomId (Query String)  */
  let roomId = searchParams.get("roomId");

  /* console.log("weekNo", weekNo);
  console.log("roomId", roomId); */


  const fetchData = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  };

  /* console.log(data); */
  

  const getBookingsForWeek = (roomId, weekNo) => {
    const currentDate = new Date();
    let startDate = new Date();
    let endDate = new Date();
    let currentDayOfWeek;

    switch (weekNo) {
      case "thisweek":
        currentDayOfWeek = currentDate.getDay() + 1; /* ex. sun(0) + 1 */
        startDate.setDate(
          currentDate.getDate() - (currentDayOfWeek - 1)
        ); /* 15 - (1 - 1) = 15 StartDate */
        endDate.setDate(
          currentDate.getDate() + (7 - currentDayOfWeek)
        ); /* 15 + (7 - 1) = 21 endDate */
        /* console.log("currentDayOfWeek", currentDayOfWeek); */
        break;

      case "wholemonth":
        let dateNextWeek = new Date();
        dateNextWeek.setDate(currentDate.getDate() + 7);
        currentDayOfWeek = dateNextWeek.getDay() + 1; /* 6 */
        startDate.setDate(dateNextWeek.getDate() - (currentDayOfWeek - 1));
        endDate.setDate(dateNextWeek.getDate() + (7 - currentDayOfWeek));

        break;

      case "today":
        break;

      default:
        break;
    }

    startDate.setHours(1, 1, 1);
    endDate.setHours(22, 59, 59);

    const result = data.filter((item) => {
      return (
        item.roomId == roomId &&
        !(
          startDate >= new Date(item.endTime) ||
          endDate <= new Date(item.startTime)
        )
      );
      /* !(15 >= 2024-09-15) || 21 <= 2024-09-14 */
    });
  };


  // เปลี่ยนเส้นทางจาก "/" ไป "/thisweek" เมื่อคอมโพเนนต์โหลด
  useEffect(() => {
    navigate(`thisweek?roomId=${roomId}`);

    /* fetchData */
    fetchData()
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#B9BDC8]">
      <main className="h-[650px] w-11/12 flex drop-shadow-2xl overflow-hidden">
        {/* Section left */}
        <section className="w-2/5 flex flex-col items-end text-white bg-[#46529D]">
          {/* Content Section-Left */}
          <div className="w-11/12 space-y-14 pb-20">
            {/* Head Left */}
            <div className="h-28 pl-8 pt-12 bg-[#2EBAEE]">
              <h1>{roomId != "null" ? roomId : "กรุณาใส่ roomId"}</h1>
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
            <div
              className={`py-5 cursor-pointer ${
                location.pathname == "/thisweek" &&
                "border-b-4 border-indigo-600"
              }`}
            >
              <Link
                to={`thisweek?roomId=${roomId}`}
                className={`uppercase font-bold  ${
                  location.pathname == "/thisweek" ? "text-black" : "opacity-50"
                }`}
              >
                This week
              </Link>
            </div>
            <div
              className={`py-5 cursor-pointer ${
                location.pathname == "/nextweek" &&
                "border-b-4 border-indigo-600"
              }`}
            >
              <Link
                to={`nextweek?roomId=${roomId}`}
                className={`uppercase font-bold  ${
                  location.pathname == "/nextweek" ? "text-black" : "opacity-50"
                }`}
              >
                Next week
              </Link>
            </div>
            <div
              className={`py-5 cursor-pointer ${
                location.pathname == "/wholemonth" &&
                "border-b-4 border-indigo-600"
              }`}
            >
              <Link
                to={`wholemonth?roomId=${roomId}`}
                className={`uppercase font-bold ${
                  location.pathname == "/wholemonth"
                    ? "text-black"
                    : "opacity-50"
                }`}
              >
                WHOLE MONTH
              </Link>
            </div>
          </div>

          {/* Content Section-Right */}
          <div className="h-[600px] bg-white shadow-[0px_-9px_15px_-5px_#c1c5cf] overflow-auto">
            {/* เว้นระยะด้านบน */}
            <div className="h-10 w-full">
              <div className="ms-8 h-full border-l-2 border-[#ECECEC]"></div>
            </div>

            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
