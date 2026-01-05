"use client";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState("director");

  const facultyList = [
    {
      name: "Mr. S. Devananth",
      designation: "Professor – Marketing",
      study:"M.B.A., M.Com., MSW., MLM., MA., PGDBA., PGDPM",
      image: "/images/dev.webp",
      experience: `12 years of teaching experience at MBA level. UGC NET (Management, Social Work, Labour Laws, Public Administration); TN SET (Management, Social Work, Commerce).`
    },
    
    {
      name: "Dr. Vijayalakshmi Krishna A.",
      designation: "Associate Professor – Finance",
      study:"B.E., M.B.A., Ph.D.",
      image: "/images/Vijayalakshmi mam.webp",

    },
    {
      name: "Dr. Chandrasekaran S",
      designation: "Assistant Professor – HR",
            study:"M.B.A., M.Phil., TN SET, Ph.D.",
      image: "/images/chandrasekaran.webp",
            experience: `3 years corporate (hospitality) + 7 years teaching. 3 international & 10 national research papers.`,
    },
    {
      name: "Dr. Jarina S.A",
      designation: "Assistant Professor – Analytics",
            study:"M.B.A., Ph.D; MBA (International Marketing & Hospitality Management — France)",
      image: "/images/jafrina.webp",
      experience: ` 11 years teaching; 7 ISSN papers; 12 ISBN presentations.`,
    },
        {
      name: "Mr. V.L. Sai Venkatesh Raj",
      designation: "Assistant Professor – Analytics",
            study:"B.Sc., M.B.A (Ph.D).",
      image: "/images/Sai sir.webp",
      experience: `4 years corporate (hospitality) and 4 years teaching. Published in UGC CARE journal.`,
    },
        {
      name: "Mrs. Nishanthini R",
      designation: "Assistant Professor – Analytics",
            study:"B.Tech., M.B.A., UGC NET",
      image: "/images/nishanthi.webp",
      experience: `2 research papers in UGC CARE journals.`,
    },
        {
      name: "Ms. Jayasree S.R",
      designation: "Assistant Professor – Analytics",
            study:"B.Com., M.B.A.",
      image: "/images/jeyashree.webp",
    },
            {
      name: "Dr. H. Sankaran",
      designation: "Professor",
      study:"M.B.A., M.A., B.G.L., D.L.A.L., Ph.D.",
      image: "/images/sankaran.webp",
    },
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
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">

            <div className="md:w-1/2  md:my-3" data-aos="zoom-in">
            <h5 className="inline-block pe-1 md:pe-4">Faculty of Management</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">Faculty Members</h2>
          </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["director", "additional", "faculty"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition
                ${
                  activeTab === tab
                    ? "bg-mssmclr text-white"
                    : "bg-white text-slate-700 shadow hover:bg-slate-100"
                }`}
            >
              {tab === "director"
                ? "Director"
                : tab === "additional"
                ? "Additional Director"
                : "Faculty"}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-8">

        {/* Director */}
        {activeTab === "director" && (
        <ProfileBlock
            image="/images/director.webp"
            name="Dr. Saiju M John"
            designation="Director"
            education="M.B.A; MFT; M.Phil; UGC NET; TN SET; M.B.A Finance; PhD"
            quote="No dream is too great to achieve if one can plan, acquire the skills needed and work diligently towards that goal"
            content="Obtained his PhD in Management Science from Jawaharlal Nehru Technological University, Hyderabad. He started his career in the corporate sector after completing his MBA from the Department of Commerce and Management Studies, University of Calicut in 1988, before turning entrepreneur in 1995. After a decade as an entrepreneur he then turned to the academic life. He joined as a full time Professor in IIET, Meenakshi Sundararajan School of Management in 2006. He took charge as Director in 2017. He has to his credit 10 Research Papers published in reputed International and National Journals."
        />
        )}

        {/* Additional Director */}
        {activeTab === "additional" && (
        <ProfileBlock
            image="/images/Dr.Gomathi.webp"
            name="Dr. D. GOMATHY"
            designation="PROFESSOR & ADDITIONAL DIRECTOR"
            education="B.SC, M.B.A, PGDLA, M.PHIL, PhD, UGC-NET, TN SET"
            quote="Process defines Perfection, Perfection drives Performance and Performance takes you to the Pinnacle"
            content="Dr. D. Gomathy is a senior Academician in the field of Management Studies with nearly 28 years of Academic Leadership and Excellence. She has contributed significantly in leading, nurturing and fostering an Academic Environment in the domain area of Management Education with Innovative Curriculum Design, intense Industry Institute Interaction, Project and Field based Learning, Self-Study and Student Engagement Practices, Personal and Professional Development Courses with a view to holistic development of student fraternity. She is expertised in the area of Human Resource Management, Organisational Behaviour. Her Research interest are in the area of Emotional Intelligence, Women Leadership and Workplace Behaviour. She is a Research Guide of University of Madras in the field of Management Studies and has guided many academicians and industry professionals towards their journey to a Doctoral Degree in Management Studies. She has produced 2 PhD. She has participated and presented papers in many National, International Conferences. She has to her credit 34 Research articles published in National, International Journals and 6 Book Chapters and 4 books as editor. She is a recipient of many awards like Best Teacher, Best Educator, Women Icon, Inspiring Women and Best Academician. She is part of many Academic bodies and has been an Expert Member Nominee of University of Madras for Board of Studies, Academic Audit, Approval, Affiliation Inspection and Faculty Recruitment."
        />
        )}


            {/* Faculty */}
            {activeTab === "faculty" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {facultyList.map((faculty, index) => (
                <div data-aos="zoom-in"
            data-aos-delay={index * 100}
                    key={index}
                    className="bg-slate-50 rounded-xl shadow-sm p-5 text-center hover:shadow-md transition flex flex-col"
                >
                    {/* Image */}
                    <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                    />

                    {/* Name */}
                    <h4 className="font-semibold text-slate-800 text-lg">
                    {faculty.name}
                    </h4>

                    {/* Designation */}
                    <p className="text-sm my-3 py-1 mx-auto inline w-3/4 text-white bg-mssmclr rounded-full font-medium">
                    {faculty.designation}
                    </p>

                    {/* Qualification */}
                    {faculty.study && (
                    <p className="text-sm text-slate-600 italic mt-1">
                        {faculty.study}
                    </p>
                    )}

                    {/* Experience */}
                    {faculty.experience && (
                    <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                        {faculty.experience}
                    </p>
                    )}
                </div>
                ))}
            </div>
            )}


        </div>
      </div>
    </section>
  );
}

/* Reusable profile component */
function ProfileBlock({
  image,
  name,
  designation,
  education,
  quote,
  content,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8" data-aos="zoom-in"
            >
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-50 h-50 rounded-full object-cover shadow-md"
      />

      {/* Content */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-semibold text-slate-800">
          {name}
        </h3>

        <p className="text-mssmclr font-bold text-xl">
          {designation}
        </p>

        {/* Education */}
        {education && (
          <p className="text-slate-600 italic mt-1">
            {education}
          </p>
        )}

        {/* Quote */}
        {quote && (
          <blockquote className="mt-4 border-l-4 border-mssmclr pl-4 italic text-slate-700">
            “{quote}”
          </blockquote>
        )}

        {/* Description */}
        <p className="text-slate-700 leading-relaxed mt-4">
          {content}
        </p>
      </div>
    </div>
  );
}

