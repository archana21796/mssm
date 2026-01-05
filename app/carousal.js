"use client";
import { useState, useEffect, useRef } from "react";

export default function Carousal() {
  const news = [
    {
      id: 1,
      img: "/images/mssm.webp",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      img: "/images/mssm.webp",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      img: "/images/mssm.webp",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      img: "/images/mssm.webp",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const slideCount = news.length;
  const AUTO_MS = 3500; 

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
      }, AUTO_MS);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, slideCount]);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center">Latest News</h2>

      <div
        className="p-5 bg-center bg-no-repeat bg-cover h-100"
        style={{ backgroundImage: `url("/images/newsbg.webp")` }}
      >
        <div className="bg-slate-200 p-5">
          <div className="rounded-xl shadow-lg bg-white relative ">
            <div className="rounded-full bg-mssmclr absolute text-white px-3 z-10 -top-4 right-0">
              Recent News
            </div>

            <div
              className="w-full overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              aria-roledescription="carousel"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${slideCount * 100}%`,
                  transform: `translateX(-${(current * 100) / slideCount}%)`,
                }}
                aria-live="polite"
              >
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-1 w-1/2 flex flex-col items-center gap-6 p-6"
                    style={{ width: `${100 / slideCount}%` }}
                  >
                    <img
                      src={item.img}
                      alt={`news ${item.id}`}
                      className="w-full h-full object-cover rounded-lg shadow"
                    />
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* dots (optional) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full ${
                    idx === current ? "bg-mssmclr" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
