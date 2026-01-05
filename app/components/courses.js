"use client";
import  gsap  from 'gsap';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaHouseSignal } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Courses () {

    gsap.registerPlugin(ScrollTrigger);

      const lineRef = useRef(null);
    useEffect(() => {
      const nodes = document.querySelectorAll(".hidden-line");
      if (!nodes.length) return;
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("grow-line");
          else entry.target.classList.remove("grow-line");
        });
      });
    
      nodes.forEach((node) => observer.observe(node));
    
      return () => observer.disconnect();
    }, []);
    

    useEffect(() => {
    gsap.utils.toArray(".course-card").forEach((card) => {
        const icon = card.querySelector(".course-icon");

        gsap.fromTo(
        icon,
        {
            top: "50%",
            scale: 1.1,
        },
        {
            top: "-20px",
            scale: 1,
            duration: 0.8,
            ease: "power3.inOut",
            scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            },
        }
        );
        const head = card.querySelector(".course-title");
        gsap.fromTo(
        head,
        {
            scale: 0.8,
            opacity: 0,
        },
        {
            scale: 1.3,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
            },
        }
        );
    });
    }, []);



    const courseList = [
        {
            name : "Finance",
            icon : FaMoneyCheckAlt,
            description : "Learn to manage financial resources, analyze investments, and drive strategic decisions.",
        },
        {
            name : "Human Resource",
            icon : FaPeopleGroup,
            description :"Master people management, recruitment strategies, and employee development.",
        },
        {
            name : "Marketing Management",
            icon : FaLandmark,
            description :"Explore branding, market research, and customer behavior strategies.",
        },
                {
            name : "Business Analytics",
            icon : FaBusinessTime,
            description :"Use data to make decisions, optimize operations, and predict outcomes.",
        },
                {
            name : "Systems",
            icon : FaCogs,
            description :"Understand enterprise systems, IT infrastructure, and systems integration",
        },
                {
            name : "Technology Management",
            icon : FaHouseSignal,
            description :"Lead tech innovation, manage IT teams, and align tech with strategy.",
        },
    ]
    return(
        <>
        <div className="container mx-auto my-7 bg-slate-100 p-9">
                <div className="md:w-1/2 mx-auto md:my-9 ">
                    <h5 className="inline-block pe-1 md:pe-4">COURSE DETAILS</h5>
                    <span
                    ref={lineRef}
                    className="inline-block bg-mssmclr hidden-line"
                    style={{ height: 4, width: 0 }}
                    ></span>
                    <h2 className="text-mssmclr text-3xl font-bold">Programme Offered</h2>
                </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-5">


                {courseList.map((course) => {
                const Icon = course.icon;

                return (
                    <div 
                    key={course.name}
                    className="bg-white min-h-50 course-card relative transition duration-300 delay-100 hover:-translate-y-2 flex flex-col items-center text-center p-9 rounded-lg shadow-2xl"
                    >
                    <Icon  className="course-icon absolute text-5xl text-mssmclr mb-3" />
                    <h3 className="text-lg course-title text-mssmclr font-semibold mb-2">{course.name}</h3>
                    <p className="text-sm py-4">{course.description}</p>
                    {/* <button className='bg-slate-300 px-3 py-1 border-1 border-slate-500 text-mssmclr rounded-full'>Click Here</button> */}
                    </div>
                );
                })}
            </div>
            </div>

        </>
    );
}