"use client";
import { FaAlignJustify } from "react-icons/fa";
import Navbar from './navbar';
import { useState } from "react";

export default function header(){
    const [isOpen,setIsOpen] = useState(false)
    const MENU = [
  { label: "About", href: "#about",
        children: [
      { label: "Management", href: "/about/management" },
      { label: "MBA @ MSSM", href: "/about/WhyMSSM" },
    ],
   },

  {
    label: "Infrastructure",
    href: "#infrastructure",
    children: [
      { label: "Library", href: "#library" },
      { label: "Labs", href: "#labs" },
      { label: "Hostel", href: "#hostel" },
      { label: "Canteen", href: "#canteen" },
    ],
  },

  {
    label: "Faculty",
    href: "/faculty",
    // children: [
    //   { label: "Departments", href: "#departments" },
    //   { label: "Research Guides", href: "#research-guides" },
    //   { label: "Achievements", href: "#faculty-achievements" },
    // ],
  },

  { label: "Industry-Institution Connect", href: "#industry" },

  {
    label: "Research Edge",
    href: "/research/faculty",
    // children: [
    //   { label: "Research Faculty", href: "#groups" },
    // ],
  },

  {
    label: "Gallery",
    href: "#gallery",
    children: [
      { label: "Images", href: "#gallery-images" },
      { label: "Videos", href: "#gallery-videos" },
    ],
  },

  { label: "Graduation", href: "#gallery" },
  { label: "Comittees", href: "/committee" },
  { label: "Grievances", href: "#gallery" },
  { label: "Contact Us", href: "#gallery" },
  { label: "Admissions", href: "/admissions" },
];

    return(
        <>
        <div className=" mx-auto w-full relative">
            <header className="grid  bg-slate-100 auto-rows-min lg:grid-rows-1 lg:grid-cols-[350px_1fr_200px] lg:items-center justify-center shadow-lg p-1">
                <div className="grid grid-cols-2 my-3">
                    <div className="bg-mssmclr shadow-lg self-center text-white text-center rounded-md w-30 mx-auto">
                        <span className="text-xl font-semibold">TANCET</span><br/><span className="text-xl">Counselling Code</span><br/>
                        <span className="text-3xl font-bold">365</span>
                    </div>
                    <div className="">
                        <img src="/images/mssm.jpeg"/>
                    </div>
                </div>
                <div>
                    <p className="uppercase text-center text-xl lg:text-3xl xl:text-4xl text-mssmclr font-bold">
                        Meenakshi Sundararajan School of Management
                    </p>
                    <p className="text-center text-xs lg:text-base my-1 text-red-600">Affiliated to the University of Madras & Approved by AICTE </p>
                    <p className="text-center text-xs lg:text-base text-red-600"> (A Co-Educational Institution under the Aegis of IIET)</p>
                </div>
                <div className="flex justify-center lg:justify-center items-start lg:items-center mt-1 lg:mt-0 lg:w-auto">
                    <FaAlignJustify  className="text-3xl text-mssmclr" onClick={() =>setIsOpen(prev => !prev)}/>
                </div>
            </header>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="container mx-auto">
            <nav className="hidden lg:block bg-white shadow-lg rounded-b-2xl">
            <ul className="flex flex-row gap-4 justify-between p-4 text-slate-900 text-xs xl:text-sm font-bold">
            {MENU.map((item, i) => {
                const hasChildren = item.children && item.children.length > 0;

                return (
                <li key={i} className="relative group">
                <a
                    href={item.href}
                    className="block py-2 px-2 hover:text-mssmclr"
                >
                    {item.label}
                </a>

                {hasChildren && (
                    <div
                    className={`
                        absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-md
                        transform transition-all duration-150 ease-out origin-top
                        opacity-0 translate-y-1 scale-95 pointer-events-none
                        group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                        focus-within:opacity-100 focus-within:translate-y-0 focus-within:scale-100 focus-within:pointer-events-auto
                    `}
                    >
                    <ul className="py-2">
                        {item.children.map((subItem, idx) => (
                        <li key={idx}>
                            <a
                            href={subItem.href}
                            className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
                            >
                            {subItem.label}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                </li>
                );
            })}
            </ul>

            </nav>
            </div>
        </div>

        </>
    )
}