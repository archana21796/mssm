"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Admission() {

   const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
  const section = sectionsRef.current[0];
  const bg = sectionsRef.current.bg;

  if (!section || !bg) return;

  gsap.fromTo(
    bg,
    { scale: 0.8 },
    {
      scale: 1.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    }
  );

}, []);
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
const specializations = [
  {
    title: "Finance",
    icon: "💰",
    image: "/images/finance.webp",
  },
  {
    title: "Human Resource",
    icon: "👥",
    image: "/images/hr.webp",
    highlight: true, // center / featured card
  },
  {
    title: "Marketing Management",
    icon: "📈",
    image: "/images/marketing.webp",
  },
  {
    title: "Business Analytics",
    icon: "📊",
    image: "/images/analytics.webp",
  },
  {
    title: "Systems",
    icon: "🖥️",
    image: "/images/systems.webp",
  },
  {
    title: "Technology Management",
    icon: "⚙️",
    image: "/images/technology.webp",
  },
];

const logos = [
  "/images/cmp1.webp",
  "/images/cmp2.webp",
  "/images/cmp3.webp",
  "/images/cmp4.webp",
  "/images/cmp5.webp",
  "/images/cmp6.webp",
  "/images/cmp7.webp",
  "/images/cmp8.webp",
  "/images/cmp9.webp",
  "/images/cmp10.webp",
  "/images/cmp11.webp",
  "/images/cmp12.webp",
  "/images/cmp13.webp",
  "/images/cmp14.webp",
  "/images/cmp15.webp",
  "/images/cmp16.webp",
  "/images/cmp17.webp",
  "/images/cmp18.webp",
  "/images/cmp19.webp",
  "/images/cmp20.webp",
  "/images/cmp21.webp",
  "/images/cmp22.webp",
];




  return (
    <>
        <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/mssm.webp')" }}
    >
      {/* Grey Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shape Your Future in Business
            </h1>

            <p className="text-lg leading-relaxed mb-6">
             Join our prestigious business school and transform your career.
            </p>

            {/* <ul className="space-y-2">
              <li>✔ IB & Cambridge Curriculum</li>
              <li>✔ World-class Campus</li>
              <li>✔ Experienced Faculty</li>
            </ul> */}
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Enquire Now
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Parent Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Grade Applying For</option>
                <option>Pre-KG</option>
                <option>KG</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-semibold transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

{/* ABOUT SECTION WITH ZOOMING LOGO */}
<section
  ref={(el) => (sectionsRef.current[0] = el)}
  className="relative overflow-hidden py-28 bg-gray-50"
>
  {/* LOGO BACKGROUND */}
  <div
    ref={(el) => (sectionsRef.current.bg = el)}
    className="absolute inset-0 flex items-center justify-center opacity-60"
  >
    <img
      src="/images/mssm.jpeg"
      alt="MSSM Logo"
      className="w-[400px] md:w-[520px]"
    />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="md:w-1/2  md:my-3" data-aos="zoom-in">
            <h5 className="inline-block pe-1 md:pe-4">About College</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold">MSSM - MBA</h2>
          </div>
    <div className="bg-white p-4 rounded-lg shadow-lg">
    <p className=" text-lg mb-6">
      With over 24 years of excellence in business education, we provide world-class learning experiences that prepare leaders for global challenges.
    </p>

    <ul className="space-y-3  list-disc pl-6 ">
      <li>Fosters employability by aligning learning with industry needs and real-world skills.</li>
      <li>Uses case-study-based learning to link classroom theory with industry practices.</li>
      <li>Focuses on customer-centricity, critical thinking, problem solving, and communication.</li>
    </ul>
    </div>

  </div>
</section>

<div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-items-center">
{/* BEST MBA – HOVER CARD */}
<div
  ref={(el) => (sectionsRef.current[1] = el)}
  className="group relative overflow-hidden rounded-2xl shadow-lg h-[360px] cursor-pointer w-full max-w-[900px]"
>
  {/* BACKGROUND IMAGE */}
  <img
    src="/images/beryl.webp"
    alt="Best MBA College in Chennai"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

  {/* HEADING (ALWAYS VISIBLE) */}
  <div className="absolute top-6 left-6 right-6 z-10">
    <h2 className="text-3xl font-semibold text-white">
      Best MBA College in Chennai
    </h2>
  </div>

  {/* SLIDE CONTENT */}
  <div
    className="
      absolute bottom-0 left-0 right-0 z-10
      bg-white text-gray-700
      p-6
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500 ease-in-out
    "
  >
    <p className="leading-relaxed">
      Meenakshi Sundararajan School of Management (MSSM) is recognized among the best MBA colleges in Chennai, offering a comprehensive curriculum designed to develop future business leaders. Our program emphasizes academic excellence, practical exposure, and industry-driven learning. MSSM’s strong placement record, experienced faculty, and modern infrastructure make it a top choice for MBA aspirants seeking quality management education in Chennai.
    </p>
  </div>
</div>


{/* TOP MBA – HOVER CARD */}
<div
  ref={(el) => (sectionsRef.current[2] = el)}
  className="group relative overflow-hidden rounded-2xl shadow-lg w-full max-w-[900px] h-[380px] cursor-pointer"
>
  {/* BACKGROUND IMAGE */}
  <img
    src="/images/first.webp"
    alt="Top MBA College in Chennai"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />

  {/* GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

  {/* HEADING */}
  <div className="absolute top-6 left-6 right-6 z-10">
    <h2 className="text-3xl font-semibold text-white">
      Top MBA College in Chennai
    </h2>
  </div>

  {/* SLIDE CONTENT */}
  <div
    className="
      absolute bottom-0 left-0 right-0 z-10
      bg-white text-gray-700
      p-6
      translate-y-full
      md:group-hover:translate-y-0
      transition-transform duration-500 ease-in-out
    "
  >
    <p className="leading-relaxed">
      MSSM consistently ranks among the top MBA colleges in Chennai, thanks to our rigorous curriculum, industry partnerships, and excellent placement support. Our program covers key specializations such as Marketing, Finance, Human Resources, Operations, Business Analytics, Systems Management, Technology Management and more, ensuring students gain the skills demanded by today’s employers. The school’s strong alumni network and active corporate interface further enhance learning and career prospects MSSM consistently ranks among the top MBA colleges in Chennai, thanks to our rigorous curriculum, industry partnerships, and excellent placement support. The school’s strong alumni network and active corporate interface further enhance learning and career prospects.
    </p>
  </div>
</div>

{/* BEST BUSINESS SCHOOL – HOVER CARD */}
<div
  ref={(el) => (sectionsRef.current[3] = el)}
  className="group relative overflow-hidden w-full max-w-[900px] rounded-2xl shadow-lg h-[420px] cursor-pointer"
>
  {/* BACKGROUND IMAGE */}
  <img
    src="/images/business-school.webp"
    alt="Best Business School in Chennai"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />

  {/* GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

  {/* HEADING */}
  <div className="absolute top-6 left-6 right-6 z-10">
    <h2 className="text-3xl font-semibold text-white">
      Best Business School in Chennai
    </h2>
  </div>

  {/* SLIDE CONTENT */}
  <div
    className="
      absolute bottom-0 left-0 right-0 z-10
      bg-white text-gray-700
      p-6
      translate-y-full
      md:group-hover:translate-y-0
      transition-transform duration-500 ease-in-out
      space-y-4
    "
  >
    <p>
      Meenakshi Sundararajan School of Management (MSSM) stands out as one of the top-ranked MBA colleges affiliated to Madras University. Our students have consistently achieved outstanding academic results, securing top ranks in the university year after year:
    </p>

    <div className="border-l-4 border-blue-600 pl-4 space-y-2 text-sm">
      <p>For the 2018–2020 MBA batch, MSSM students secured the 1st, 2nd, and 3rd ranks in Madras University.</p>
      <p>In the 2019–2021 batch, our students achieved the 1st, 3rd, 4th, and 7th ranks.</p>
      <p>The 2020–2022 batch saw MSSM students claim the 1st, 2nd, 3rd, 4th, 5th, 6th, and 10th ranks.</p>
      <p>For the 2021–2023 batch, our students attained the 2nd, 3rd, 4th, and 7th ranks in the university.</p>
    </div>

    <p className="text-sm">
      This consistent academic excellence reflects MSSM’s commitment to quality management education and rigorous academic standards. As an institution affiliated with Madras University and approved by AICTE, MSSM offers a two-year, full-time MBA program that blends academic rigor with practical industry exposure. With a limited intake of 40 seats, the program ensures personalized attention and a vibrant learning environment.
    </p>
  </div>
</div>
</div>

      </div>
    </section>
    <section className="py-20 text-center bg-white">
                  <div className="md:w-1/2  md:my-3" data-aos="zoom-in">
            <h5 className="inline-block pe-1 md:pe-4">Our Specializations</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl font-bold mb-10">Offered Programme</h2>
          </div>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {specializations.map((item, index) => (
        <div
          key={index}
          className="group relative h-[200px] overflow-hidden rounded-xl cursor-pointer"
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-100` object-cover"
          />

          {/* DARK BLUE OVERLAY */}
          <div className="absolute inset-0 bg-slate-500"></div>

          {/* CURVED HOVER SHAPE */}
          <div
            className={`
              absolute inset-0 bg-mssmclr
              translate-x-full group-hover:translate-x-0
              transition-transform duration-700 ease-in-out
            `}
            style={{
              clipPath: "ellipse(75% 100% at 100% 50%)",
            }}
          ></div>

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            
            <div className="mb-auto">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl text-white font-semibold leading-snug">
                {item.title}
              </h3>
            </div>

            {/* <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
              Learn More →
            </span> */}

          </div>
        </div>
      ))}

    </div>

  </div>
  <div className="relative mt-10 container mx-auto w-full overflow-hidden bg-white py-6">
                <div className="md:w-1/2  md:my-3" data-aos="zoom-in">
            <h5 className="inline-block pe-1 md:pe-4">STUDENTS PLACED</h5>
            <span
              className="inline-block bg-mssmclr hidden-line"
              style={{ height: 4, width: 0 }}
            ></span>
            <h2 className="text-mssmclr text-3xl mb-10 font-bold">Leading Companies That Recruit Our Students </h2>
          </div>
  <div className="flex bg-slate-200 p-10 w-max animate-marquees gap-12">
    
    {/* LOGO SET 1 */}
    {logos.map((logo, i) => (
      <img
        key={`logo-1-${i}`}
        src={logo}
        alt="Company logo"
        className="h-20 mx-4 bg-white p-2 rounded-lg  w-auto object-contain  transition"
      />
    ))}

    {/* LOGO SET 2 (duplicate for seamless loop) */}


  </div>
</div>

</section>

    </>

  );
}
