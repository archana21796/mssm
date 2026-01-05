"use client";
import {
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaLaptopCode,
  FaChartPie,
  FaCogs,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
// import { url } from "inspector";

export default function MBAProgramme() {
const specializations = [
  {
    title: "Human Resources Management",
    icon: <FaUsers />,
  },
  {
    title: "Finance Management",
    icon: <FaChartLine />,
  },
  {
    title: "Marketing Management",
    icon: <FaBullhorn />,
  },
  {
    title: "Systems Management",
    icon: <FaLaptopCode />,
  },
  {
    title: "Business Analytics",
    icon: <FaChartPie />,
  },
  {
    title: "Technology Management",
    icon: <FaCogs />,
  },
];

  const weightage = [
    { label: "10th Standard Marks", value: "10%" },
    { label: "12th Standard Marks", value: "15%" },
    { label: "U.G Marks", value: "25%" },
    { label: "Group Discussion", value: "25%" },
    { label: "Personal Interview", value: "25%" },
  ];

  const highlights = [
    "Learning environment that creates employable students",
    "Judicious blend of management theory and practice",
    "Student–Faculty Ratio of 12:1",
    "Industry-oriented case study based pedagogy",
    "NPTEL & MOOCs enabled learning",
    "Industrial visits as part of the curriculum",
    "Entrepreneurship Development Cell for innovation & startups",
    "Strong focus on soft skills and communication",
    "Tutorial hours – clarify doubts anytime with faculty",
  ];

    // line growth - use a class selector and observer (don't reuse one ref for multiple spans)
useEffect(() => {
  AOS.init({
    duration: 800,      // animation duration
    easing: "ease-out-cubic",
    once: true,         // animate only once
    offset: 120,        // trigger point
  });

  const nodes = document.querySelectorAll(".hidden-line");
  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("grow-line");
        else entry.target.classList.remove("grow-line");
      });
    },
    { threshold: 0.1 }
  );

  nodes.forEach((node) => observer.observe(node));
  return () => observer.disconnect();
}, []);


  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
            <div className="md:w-1/2  md:my-3">
            <h5 className="inline-block pe-1 md:pe-4">Master of Business Administration</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">MBA Programme</h2>
          </div>
        <p className="text-slate-600 mb-8">
          Affiliated to the University of Madras & Approved by AICTE, New Delhi
        </p>

        {/* Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <p className="text-slate-700 leading-relaxed">
            The College offers a two-year MBA programme with six specializations,
            designed to provide a strong academic foundation combined with
            industry relevance, preparing students to become competent and
            employable management professionals.
          </p>
        </div>

        {/* Specializations */}
        <h2 className="text-2xl font-semibold text-mssmclr mb-5">
          Specializations Offered
        </h2>
        <div  data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {specializations.map((item, index) => (
            <div 
            key={index}
            className="group hover:bg-mssmclr bg-white rounded-xl shadow-sm p-6 text-center transition hover:shadow-lg"
            >
            {/* Icon */}
            <div className="flex justify-center mb-4">
                <div className="
                text-mssmclr text-4xl 
                transform transition duration-300 
                group-hover:scale-125 group-hover:text-white
                 ">
                {item.icon}
                </div>
            </div>

            {/* Title */}
            <p className="font-semibold group-hover:text-white text-xl text-slate-700">
                {item.title}
            </p>
            </div>
        ))}
        </div>


       {/* Admission Procedure */}
            <h2 className="text-2xl font-semibold text-mssmclr mb-5">
            Admission Procedure
            </h2>

            <div
            className="relative bg-cover bg-center rounded-xl  mb-10
                        grid grid-cols-1 gap-6 p-6
                        md:min-h-[220px] md:grid-cols-2 md:p-0"
            style={{ backgroundImage: 'url("/images/advantages.webp")' }}
            >
            {/* Overlay */}
            <div
                className="absolute inset-0"
                style={{
                background:
                    "linear-gradient(265.63deg, hsla(0, 51%, 39%, 0.31) 15.98%, #830707ff 82.83%)",
                }}
            />

            {/* Government Quota */}
            <div data-aos="zoom-in"
                className="
                relative z-10 bg-white rounded-xl shadow-xl p-6 text-center
                md:absolute md:top-1/4 md:left-10 lg:left-30 md:w-[300px] md:h-65
                
                "
            >
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Government Quota (50%)
                </h3>
                <p className="text-slate-700">
                Candidates are allotted through <strong>TANCET Counselling</strong>.
                </p>
                <p className="mt-3">
                <span className="block font-semibold text-lg">
                    MBA Counselling Code
                </span>
                <span className="block text-mssmclr text-5xl font-bold">
                    365
                </span>
                </p>
            </div>

            {/* Management Quota */}
            <div data-aos="zoom-in"
                className="
                relative z-10 bg-white rounded-xl shadow-xl p-6 text-center
                md:absolute md:top-1/4 md:right-10 lg:right-30 md:w-[320px]
                
                "
            >
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Management Quota (50%)
                </h3>
                <ul className="space-y-2 text-slate-700">
                {weightage.map((item, index) => (
                    <li key={index} className="flex justify-between">
                    <span>{item.label}</span>
                    <span className="font-semibold text-mssmclr text-lg">
                        {item.value}
                    </span>
                    </li>
                ))}
                </ul>
            </div>
            </div>



        {/* Note */}
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-md md:mt-30 mb-5">
          <p className="text-slate-700 text-sm">
            <strong>Note:</strong> Candidates who have completed their U.G from a
            university other than the University of Madras must submit an
            Eligibility Certificate issued by the University of Madras.
          </p>
        </div>

        {/* Why MBA */}
        <h2 className="text-3xl font-semibold text-mssmclr mb-5">
          Why MBA @ MSSM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
            data-aos-delay={index * 100}
              className="bg-white p-5 rounded-lg shadow-sm font-bold hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Student Development */}
        <div data-aos="zoom-in" className="bg-white rounded-xl shadow-md p-6 border-l-8 border-mssmclr">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Holistic Student Development
          </h3>
          <p className="text-slate-700 mb-3">
            Saturdays are dedicated to individual student development through
            <strong> “HAPPY CLASSES”</strong> featuring plays, quizzes, debates,
            group discussions, and public speaking training.
          </p>
          <p className="text-slate-700">
            Organisational leadership, ethical dilemmas, and decision-making are
            explored through literature classics, reflection papers, and
            discussions—helping students connect theory with real-world
            organisational behaviour.
          </p>
        </div>
      </div>
<div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* LEFT BIG IMAGE */}
    <div className="lg:col-span-2 h-[360px]">
      <img data-aos="zoom-in"
        src="/images/whymssm1.webp"
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

    {/* RIGHT TWO STACKED IMAGES */}
    <div  className="grid grid-rows-2 gap-6 h-[360px]">
      <img data-aos="zoom-in"
        src="/images/whymssm2.webp"
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
      <img data-aos="zoom-in"
        src="/images/whymssm3.webp"
        alt=""
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

  </div>
</div>




    </section>
  );
}
