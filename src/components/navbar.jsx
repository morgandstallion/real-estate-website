import { Link, NavLink, useLocation } from "react-router";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import navLogo from "../assets/logos/Logo.svg";
import hamburger from "../assets/icons/hamburger.svg";

import { navInfo } from "../../UI-data/info.js";

const Navbar = () => {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const navLinksRef = useRef(null);
  const searchContactRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (navOpen) {
        // Make menu visible and set initial state for dropdown
        gsap.set(menuRef.current, {
          display: "block",
          scaleY: 0,
          transformOrigin: "top center",
        });

        // Set initial hidden states for inner items
        gsap.set(navLinksRef.current?.children, {
          y: 30,
          opacity: 0,
          visibility: "visible",
        });
        gsap.set(searchContactRef.current?.children, {
          y: 20,
          opacity: 0,
          visibility: "visible",
        });

        const tl = gsap.timeline();

        // Dropdown container animation (scaleY)
        tl.to(menuRef.current, {
          scaleY: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        // Phase 1: stagger nav links bottom-to-top
        tl.to(
          navLinksRef.current?.children,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          0,
        );

        // Phase 2: after 0.5s delay, reveal search bar & contact button
        tl.to(
          searchContactRef.current?.children,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
          },
          "+=0.3",
        );
      } else {
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(menuRef.current, { display: "none" });
          },
        });

        // Hide search/contact first
        tl.to(searchContactRef.current?.children, {
          y: 10,
          opacity: 0,
          duration: 0.15,
        });

        // Then hide nav links
        tl.to(
          navLinksRef.current?.children,
          {
            y: 20,
            opacity: 0,
            duration: 0.15,
            stagger: 0.03,
          },
          0,
        );

        // Finally collapse the container
        tl.to(
          menuRef.current,
          {
            scaleY: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          0,
        );
      }
    });

    return () => ctx.revert();
  }, [navOpen]);

  return (
    <header>
      <nav className="bg-dark-10 border-2 border-dark-15">
        <div className="wrapper flex justify-between items-center py-2">
          <Link to="/">
            <img
              className="clamp(5.813rem,4.92rem+2.381vw,7.063rem)"
              src={navLogo}
              alt="Estatein's logo."
            />
          </Link>

          <ul className="hidden md:flex items-center gap-5 mr-20">
            {navInfo.map((item) => (
              <li
                className={`font-normal" ${pathname === item.path ? "bg-dark-08 border border-dark-15 rounded-md px-3 py-1.5" : ""}`}
                key={item.label}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Contact Us button for desktop */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hidden md:block px-3 py-2 rounded-md border font-normal text-sm transition-colors duration-200 ${
                isActive
                  ? "bg-brand-60 border-brand-60 text-white"
                  : "bg-dark-08 border-dark-15 text-light-90"
              }`
            }
          >
            Contact Us
          </NavLink>

          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden block relative w-10 h-10 transition-all duration-300"
          >
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${navOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
            >
              <img
                className="border border-dark-15 rounded-md px-2 py-3"
                src={hamburger}
                alt="Open Menu"
              />
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${navOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
            >
              <p className="border border-brand-60 py-1 px-3 rounded text-xl font-bold text-white">
                X
              </p>
            </span>
          </button>
        </div>

        {/* Mobile Menu - GSAP controlled */}
        <div ref={menuRef} className="md:hidden hidden">
          <ul ref={navLinksRef} className="flex flex-col gap-5 py-4 wrapper">
            {navInfo.map((item) => (
              <li className="font-bold text-md" key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div
            ref={searchContactRef}
            className="wrapper pb-4 flex flex-col gap-5"
          >
            {/* Search Bar */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full bg-dark-10 border border-dark-15 rounded-md px-4 py-2 text-light-90 placeholder-dark-50 outline-none focus:border-brand-60 transition-colors"
              />
            </div>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="block w-full text-center bg-brand-60 hover:bg-brand-65 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
