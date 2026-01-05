"use client";

import { useState } from "react";
import { useRef,useEffect } from "react";

export default function Management(){
    const [section,setsection] = useState(1);
    const [stylebutton,setStyleButton] = useState("crimson");
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

    const management = [
        {
            id : 1,
            head : "About MSSM",
            content: `Meenakshi Sundararajan School of Management was established under the aegis of Indian Institute
             of Engineering Technology Society (IIET) in the year 2001, with affiliation to 
             the University of Madras and also with the approval of AICTE. Meenakshi Sundararajan
              School of Management is part of the Meenakshi Group of Institutions - Meenakshi College
               for Women and Meenakshi Sundararajan Engineering College.`
        },
        {
            id: 2,
            head : "Management",
            content : `Under the leadership of Dr.K.S.Lakshmi and Dr.K.S.Babai, distinguished daughters of our illustrious founder and educationalist, (late) Shri. K.R.Sundararajan, these institutions, have grown in strength since their inception in 1947. The group's combined student strength is over 4500 students.
            In his last years, Prof. KRS had a dream of starting an Engineering College to give quality 
            education in various branches of engineering. His dream materialised 
            when Meenakshi Sundararajan Engineering College started functioning from August 14th, 2001.`
        },
        {
            id:3,
            head: "Mission",
            content:`To impart to students from different disciplines a holistic approach to management
             education with a judicious blend of academic and industrial exposure. To nurture the ability 
             to ask the right questions, to find possible answers after considering views of all concerned,
             and make this process a life long habit, together with humility, honesty, and hardwork.`
        }

    ]
    const changeText = (id) => {
        setsection(id) 
        console.log(section);
             
    }   
    const active = management.find((m) => m.id === section);
    return(
        <>
            <div className="md:w-1/2 mx-auto md:my-8">
            <h5 className="inline-block pe-1 md:pe-4">MANAGEMENT</h5>
            <span
              ref={lineRef}
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">About MSSM</h2>
          </div>
        <div className="container mx-auto p-4 shadow-lg bg-slate-300">
            <div className=" flex py-8 bg-slate-50 flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col">
                {management.map((item) => (
                    <button key={item.id} onClick={() =>changeText(item.id)} style={{backgroundColor: active.id===item.id? "grey" : stylebutton}} className="border delay-100 duration-300 hover:-translate-y-3 shadow-xl text-white rounded-ee-xl p-3 rounded-2 my-3">{item.head}</button>
                ))}
                </div>
                <div className="flex-none h-75 p-4 m-5 bg-white w-1/2 shadow-xl rounded-xl">
                    {active ? (
                    <>
                    <h4 className="text-mssmclr font-bold text-2xl my-4">{active.head}</h4>
                    <p className="text-justify">{active.content}</p>
                    </>
                    ) : (
                    <p>No data found</p>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}