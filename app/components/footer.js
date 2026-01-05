import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer () {

    return(
        <>
        <div className="bg-slate-200 p-5 pb-0">
            <div className="container bg-slate-50 shadow-lg mx-auto p-5 grid md:grid-cols-2 xl:grid-cols-4 xl:rounded-full">
                <div className="flex flex-col justify-center md:ps-5">
                    <h4 className="text-4xl text-mssmclr font-bold">MSSM</h4>
                    <p>
                        363, Arcot Road,<br/> Kodambakkam,<br/> Chennai - 600 024
                    </p>
                    <p><span className="">Phone</span> : 1234567890</p>
                    <p><span>Email</span> : example@mssm.edu.in</p>
                </div>
                <div className="flex flex-col justify-center">
                    <h5 className="text-lg xl:text-2xl text-mssmclr font-bold">Important Links</h5>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="/admissions">Admissions</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="flex flex-col justify-center"> 
                    <h4 className="text-lg xl:text-2xl text-mssmclr font-bold pt-7">Our Location</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7078259950968!2d80.224162075724!3d13.054260413059287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f237c5fe8d%3A0x9aad278bb20e48be!2sMeenakshi%20Sundararajan%20School%20of%20Management!5e0!3m2!1sen!2sin!4v1764995600928!5m2!1sen!2sin" 
                    width="250" height="200" style={{"border":0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex flex-col justify-center"> 
                    <h4 className="text-lg xl:text-2xl text-mssmclr font-bold">Social Media Links</h4>
                    <Link  href="https://www.facebook.com/people/Mssm-Mba/61557611947227/" target="_blank"><FaInstagram className="text-4xl transition delay-100 duration-300 text-mssmclr my-1 hover:text-slate-600 hover:shadow-lg ease-in-out hover:-translate-y-1" /></Link>
                    <Link href="https://www.facebook.com/people/Mssm-Mba/61557611947227/" target="_blank"><FaFacebook  className="text-4xl transition delay-100 duration-300 text-mssmclr my-1 hover:text-slate-600 hover:shadow-lg ease-in-out hover:-translate-y-1" /></Link>   
                    <Link target="_blank" href="https://www.linkedin.com/in/meenakshi-sundararajan-school-of-management-7a23bb229/"><FaLinkedin  className="text-4xl transition delay-100 duration-300 text-mssmclr my-1 hover:text-slate-600 hover:shadow-lg ease-in-out hover:-translate-y-1" /></Link>     
                </div>
            </div>
            <div className="bg-slate-900 text-center text-white p-5 mt-5">
                <p>Copyrights @{new Date().getFullYear()} All rights reserved by Meenakshi Sundararajan School of Management </p>
            </div>
        </div>
        </>
    );

}