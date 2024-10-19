"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useNav } from "@/context/NavContext";
import ScrollIntoView from "react-scroll-into-view";

const NavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "My Story",
    link: "/mystory",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Services",
    link: "/services",
  },
];

const Navbar = () => {
  const { activePage, setActivePage } = useNav();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navRefs = useRef([]);
  const glowRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    if (activePage && navRefs.current.length > 0) {
      const activeNav = navRefs.current.find(
        (nav) => nav.dataset.page === activePage
      );
      const glowingIndicator = glowRef.current;

      if (activeNav && glowingIndicator) {
        gsap.to(glowingIndicator, {
          x: activeNav.offsetLeft,
          width: activeNav.offsetWidth,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }
  }, [activePage]);

  useEffect(() => {
    const tl = gsap.timeline();

    //desktop wave animation
    tl.fromTo(
      "#navbar-logo",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        "#navbar-links > a",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        "#navbar-talk",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

    //mobile wave animation
    if (window.innerWidth < 768) {
      gsap.fromTo(
        "#navbar-logo, #hamburger-menu",
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.3 }
      );
    }
  }, []);

  //sidebar animation
  useEffect(() => {
    if (sidebarOpen) {
      gsap.fromTo(
        "#sidebar-links a, #sidebar-talk",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 }
      );
    }
  }, [sidebarOpen]);

  return (
    <nav className="sticky z-50 top-0 flex flex-row justify-between items-center lg:px-10 md:px-8 px-5 w-full lg:h-[80px] h-[60px]">
      {/* Logo */}
      <h1
        id="navbar-logo"
        className="text-white font-bold font-Montserrat text-[15px] lg:text-[20px]"
      >
        AdnanXDesign
      </h1>

      {/* Nav Links for Desktop */}
      <div
        id="navbar-links"
        className="hidden md:flex flex-row lg:gap-10 gap-4 -ml-5"
      >
        {NavLinks.map((nav, index) => (
          <Link
            className={`font-medium cursor-pointer lg:text-[16px] text-[12px] ${
              activePage === nav.name ? "glowing-text" : "text-[#808080]"
            }`}
            onClick={() => setActivePage(nav.name)}
            href={nav.link}
            key={index}
            ref={(el) => (navRefs.current[index] = el)}
            data-page={nav.name}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      {/* Let's Talk Button for Desktop */}
      <ScrollIntoView selector="#footer">
        <button
          id="navbar-talk"
          className="hidden md:flex bg-[#383838] text-white/80 font-semibold lg:text-[16px] text-[12px] lg:px-4 lg:py-2 px-2 py-1 rounded-[16px] shadow-lg"
        >
          Let&apos;s talk
        </button>
      </ScrollIntoView>

      {/* Hamburger Menu for Mobile */}
      <div id="hamburger-menu" className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none z-50"
        >
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-[70%] bg-[#121212] transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        {/* Close icon inside sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Nav Links in Sidebar */}
        <div
          id="sidebar-links"
          className="flex flex-col gap-5 mt-10 px-5 justify-center items-center"
        >
          {NavLinks.map((nav, index) => (
            <Link
              href={nav.link}
              key={index}
              onClick={() => {
                setActivePage(nav.name);
                closeSidebar();
              }}
              className={`font-medium text-[16px] ${
                activePage === nav.name ? "glowing-text" : "text-[#808080]"
              }`}
              ref={(el) => (navRefs.current[index] = el)}
              data-page={nav.name}
            >
              {nav.name}
            </Link>
          ))}
          <ScrollIntoView selector="#footer" onClick={() => toggleSidebar()}>
            <button
              id="sidebar-talk"
              className="bg-[#383838] text-white/80 font-semibold text-[15px] px-4 py-2 rounded-[16px] shadow-lg mt-4"
            >
              Let&apos;s talk
            </button>
          </ScrollIntoView>
        </div>
      </div>

      {/* Black Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
