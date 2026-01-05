import React from "react";
import { FaLocationArrow } from "react-icons/fa";

export default function EventsTicker() {
  const events = [
    { id: 1, date: "12-Jan-2026", events: "new event for hr conclave for participating the outside student", venue: "KRS Hall MSEC" },
    { id: 2, date: "15-Feb-2026", events: "Guest Lecture: Marketing", venue: "Auditorium" },
    { id: 3, date: "20-Mar-2026", events: "Industry Visit", venue: "Tech Park" },
    { id: 4, date: "01-Apr-2026", events: "Alumni Meet", venue: "Main Lawn" },
  ];

  // duplicate for seamless infinite scroll
  const list = [...events, ...events];

  return (
    <>
      <div className="w-full max-w-md mx-auto">
              <h3 className=" text-center text-2xl font-semibold mb-6">Upcoming Events</h3>
        <div className="overflow-hidden rounded-lg bg-white shadow-lg p-2 m-5 mt-8">
          <div className="ticker">
            <div className="ticker__track">
              {list.map((item, idx) => {
                const [day, month, year] = item.date.split("-");
                return (
                  <div key={idx} className="flex items-center gap-4 px-3 py-3 min-h-[72px]">
                    <div className="bg-mssmclr text-white text-center p-3 rounded">
                      <p className="text-lg font-semibold">{day}</p>
                      <p className="text-2xl font-bold">{month.toUpperCase()}</p>
                      <p className="text-sm">{year}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{item.events}</p>
                      <p className="text-xs italic text-gray-600"><FaLocationArrow  className="inline-block"/>{item.venue}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
