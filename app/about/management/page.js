"use client";
import { useEffect, useState } from "react";

const managementheads = [
  {
    id: 1,
    position: "Founder",
    name: "Prof. K. R. Sundararajan",
    img: "/images/krs.png",
    content:
      "Prof. K. R. Sundararajan was a great Professor of Mathematics and a renowned pioneer of higher education in the country. His life's mission was to provide young citizens with quality education, so that they imbibe the cardinal virtues of Faith, Fidelity and Fortitude. He founded the Indian Institute of Engineering Technology (IIET) more than half a century ago in order to provide quality Engineering education to hundreds who could not afford to go to mainstream Engineering Colleges. He founded the Meenakshi College for Women in 1975, and his dreams of creating similar temples of learning in the Engineering and Medical disciplines, are being realized one by one.",
  },
  {
    id: 2,
    position: "President",
    name: "Dr. K. S. Lakshmi",
    img: "/images/lakshmimam.webp",
    content:
      "Whether Greatness is measured with a scale calibrated in terms of the possession of power, a distinguished record of public service, nobility of character or the esteem of ones fellowmen, there is no doubt that Ln. Dr. (Ms.) K. S. Lakshmi truly qualifies as worthy of the epithet. She undoubtedly ranks as one of the truly outstanding personalities in the arenas of social service and education. She is an idealist but not merely one. Her life's mission has been to convert her lofty ideals and noble ideas into reality and thereby light up the lives of thousands that were otherwise steeped in darkness and despair. Dr. K. S. Lakshmi was wholly responsible for establishing two prestigious institutions in the same KRS Campus, viz. Meenakshi Sundararajan Engineering College and Meenakshi Sundararajan School of Management which have quickly established themselves on the technical education map of the country by bagging many University ranks and laurels in a very short span of time. Not withstanding all these multifarious achievements of hers, the very vital force of her life has been Meenakshi College for Women. The college is extremely dear to her heart and she has devoted all her time and energy for its well-being. From the inception of the college in 1975 till date she has not spared a single effort to nurture the college and take it to great heights.",
  },
  {
    id: 3,
    position: "Former President",
    name: "Dr. K. S. Babai",
    img: "/images/babaimam.webp",
    content:
      "Dr. K.S. Babai, who graduated in 1966 from College of Engineering, Guindy (CEG Campus-Chennai), did her Masters from IIT Madras in the year 1980 and Ph.D from Annamalai University. She dedicated her life to serving others, educating and uplifting them. After thirty-six years of service in the Dr. Dharmambal Government Polytechnic College for Women, she continues in the field of technical education by leading the Meenakshi Sundararajan Engineering College, Affiliated to Anna University, Chennai. She personifies leadership in technical education, quality, and service to the downtrodden.",
  },
];

export default function ManagementSection() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % managementheads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = managementheads[active];

  const managementCommittee = [
  { name: "Dr. K.S. Lakshmi", role: "President" },
  { name: "Dr. M.C. Vasudevan", role: "Vice President" },
  { name: "Mr. N. Sreekanth", role: "Secretary" },
  { name: "Mr. V.S. Narasimhan", role: "Treasurer" },
  { name: "Mr. V.N. Sriram", role: "Director" },
  { name: "Mr. V.Vaidyanathan", role: "Director" },
  { name: "Ms. Deepa U", role: "Director" },
];

const generalBody = [
  { name: "Dr. K.S. Lakshmi", role: "Member" },
  { name: "Mr. V.S. Narasimhan", role: "Member" },
  { name: "Dr. M.C. Vasudevan", role: "Member" },
  { name: "Mr. V.Vaidyanathan", role: "Member" },
  { name: "Mr. N. Sreekanth", role: "Member" },
  { name: "Mr. V.N. Sriram", role: "Member" },
  { name: "Dr. Vijayalakshmi Krishna A", role: "Member" },
  { name: "Ms. Deepa U", role: "Member" },
  { name: "Dr. A.V. Jayagopal", role: "Member" },
];


  return (
    <>
          <div className="max-w-4xl mx-auto text-center my-10 px-4">
        <h5 className="uppercase tracking-wide">Leadership that Inspires</h5>
        <h2 className="text-3xl font-bold text-mssmclr mt-2">
          About the Head of Institution
        </h2>
      </div>
          <section className="management-section">
      {/* Buttons */}
      <div className="tabs">
        {managementheads.map((item, index) => (
          <button
            key={item.id}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            {item.position}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        <div className="image min-w-400px">
          <img src={current.img} alt={current.name} />
        </div>

        <div className="text max-w-500px">
          <h3>{current.position}</h3>
          <h2>{current.name}</h2>
          <p>{current.content}</p>
        </div>
      </div>
    </section>
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* MANAGEMENT COMMITTEE */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-mssmclr mb-6">
          Management Committee
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementCommittee.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 border-l-4 border-mssmclr"
            >
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GENERAL BODY */}
      <section>
        <h2 className="text-3xl font-bold text-mssmclr mb-6">
          General Body
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {generalBody.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 shadow-sm rounded-lg p-5"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
    </>

  );
}
