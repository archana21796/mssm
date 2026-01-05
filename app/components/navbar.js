"use client";
import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

export default function Navbar({ isOpen, setIsOpen }) {
  const closeBtnRef = useRef(null);

  // focus management + escape + body scroll lock
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      // focus the close button when opened
      closeBtnRef.current?.focus();
      // prevent page scroll
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, setIsOpen]);

  // close handler for backdrop and close button
  const close = () => setIsOpen(false);

  return (
    <>
      {/* BACKDROP */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* PANEL */}
      <nav
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-mssmclr">Menu</h3>
          <button
            ref={closeBtnRef}
            aria-label="Close menu"
            onClick={close}
            className="p-2 rounded-md text-mssmclr hover:bg-mssmclr/10 focus:outline-none focus:ring-2 focus:ring-mssmclr"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <ul className="flex flex-col gap-3 p-4 text-mssmclr">
          {/* Use real <a> links in production */}
          <li><a href="#about" onClick={close} className="block py-2">About</a></li>
          <li><a href="#infrastructure" onClick={close} className="block py-2">Infrastructure</a></li>
          <li><a href="#faculty" onClick={close} className="block py-2">Faculty</a></li>
          <li><a href="#industry" onClick={close} className="block py-2">Industry-Institution Connect</a></li>
          <li><a href="#research" onClick={close} className="block py-2">Research Edge</a></li>
          <li><a href="#gallery" onClick={close} className="block py-2">Gallery</a></li>
          <li><a href="#gallery" onClick={close} className="block py-2">Graduation</a></li>
          <li><a href="#gallery" onClick={close} className="block py-2">Comittees</a></li>
          <li><a href="#gallery" onClick={close} className="block py-2">Grievances</a></li>
          <li><a href="#gallery" onClick={close} className="block py-2">Contact Us</a></li>
          <li><a href="#gallery" onClick={close} className="block py-2">Admissions</a></li>
        </ul>
      </nav>
    </>
  );
}
