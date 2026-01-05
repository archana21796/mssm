"use client";
import React, { useEffect, useRef } from "react";
import Carousal from "./carousal";
import Courses from "./components/courses";
import Testimonial from "./components/testimonials";
import Reviews from "./components/review";
import Events from "./components/events";
import Management from "./components/management";
import AOS from "aos";
import "aos/dist/aos.css";

function CountUp({ end = 0, duration = 1500, format = true }) {
  const elRef = useRef(null);
  const startedRef = useRef(false);
  const rafRef = useRef(null);

  const startAnimation = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * end);

      if (elRef.current) {
        elRef.current.textContent = format
          ? current.toLocaleString()
          : String(current);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const node = elRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        startAnimation();
        observer.disconnect();
      }
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, format]);

  return <span ref={elRef}>0</span>;
}

export default function Home() {
  const content = [
    "news 1 important to slide show below header",
    "news 1 important to slide show below header",
    "news 1 important to slide show below header",
    "news 1 important to slide show below header",
  ];

  // line growth - use a class selector and observer (don't reuse one ref for multiple spans)
  useEffect(() => {
    const nodes = document.querySelectorAll(".hidden-line");
    if (!nodes.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("grow-line");
        else entry.target.classList.remove("grow-line");
      });
    }, { threshold: 0.1 });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // Initialize AOS once on client
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
      mirror: false,
    });
    // If you add dynamic content later, call AOS.refresh() where needed
  }, []);

  const exploreMSSM = [
    {
      img: "/images/mssm.webp",
      head: "Campus Life - MSSM",
      content:
        "Explore the vibrant and dynamic campus environment at our Management school.",
    },
    {
      img: "/images/guest.webp",
      head: "Guest Lectures",
      content: "Discover a wide range of academic programs and Lectures.",
    },
    {
      img: "/images/industryconnect.webp",
      head: "Industry Connect",
      content: "Benefit from our strong ties with leading industry professionals.",
    },
    {
      img: "/images/alumnigroup2.webp",
      head: "Alumni Association",
      content: "Hear from our students about their experience and success stories.",
    },
  ];

  const keyStatistics = [
    { name: "Student", value: 1234 },
    { name: "Events", value: 45 },
    { name: "Trainers", value: 12 },
    { name: "Courses", value: 6 },
  ];

  return (
    <>
      <main>
        <div className="header-banner h-screen flex items-center justify-center">
          <p>Video or image for a screen</p>
        </div>

        <div className="news-ticker bg-slate-700 p-5 border-4 border-mssmclr">
          <ul className="flex flex-row text-xl p-3 text-white whitespace-nowrap overflow-hidden animate-marquee">
            {content.map((item, index) => (
              <li key={index} className="px-2 border-r-4 border-mssmclr">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-col-2 p-3 mb-4 bg-slate-200">
          <div className="md:w-1/2 mx-auto md:my-3">
            <h5 className="inline-block pe-1 md:pe-4">BY THE NUMBERS</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">Key Statistics</h2>
          </div>

          {/* Key statistics - AOS zoom-in with staggered delay */}
          <div className="flex flex-col md:flex-row items-center justify-around my-2 md:my-5 md:py-5">
            {keyStatistics.map((item, index) => (
              <div
                className="text-center my-3"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                data-aos-offset="120"
              >
                <h3 className="text-mssmclr text-3xl lg:text-5xl font-bold">
                  <CountUp end={item.value} duration={1500} />
                </h3>
                <p className="font-bold lg:my-4 lg:text-2xl">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <Management />

        <div className="my-9 py-9 ">
          <div className="md:w-1/2 mx-auto md:my-3">
            <h5 className="inline-block pe-1 md:pe-4">MSSM - MANAGEMENT SCHOOL</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">Explore MSSM</h2>
          </div>

          {/* Explore cards - animate each card when it enters view */}
          <div className="flex flex-col md:flex-row gap-4 group">
            {exploreMSSM.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-md overflow-hidden shadow-sm
                transition-all duration-1000 ease-in-out flex-1 
                group-hover:flex-[0.8] hover:flex-[3]"
                style={{ height: "420px" }}
              >
                <img
                  src={item.img}
                  alt={item.head}
                  className="w-full h-full object-cover block transition-transform duration-1800 transform group-hover:scale-100"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black/90 to-transparent text-white">
                    <h3 className="text-lg md:text-xl font-semibold">{item.head}</h3>
                    <p className="text-sm md:text-base opacity-90">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>

        <div className="my-9 py-9">
          <div className="md:w-1/2 mx-auto md:my-9">
            <h5 className="inline-block pe-1 md:pe-4">NEWS & EVENTS</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">
              MBA Insights & Articles
            </h2>
          </div>

          <div className="container flex flex-col lg:flex-row mx-auto justify-center">
            <div className="w-150">
              <Carousal />
            </div>
            <div className="self-center">
              <Events />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="md:w-1/2 mx-auto md:my-9 ">
            <h5 className="inline-block pe-1 md:pe-4">TESTIMONIALS</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">Program Reviews</h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 my-6 items-stretch md:p-9">
            <div className="flex-1 border-8 border-mssmclr rounded-lg overflow-hidden">
              <Testimonial />
            </div>

            <div className="flex-1 self-center">
              <Reviews />
            </div>
          </div>
        </div>

        <Courses />
      </main>
    </>
  );
}
