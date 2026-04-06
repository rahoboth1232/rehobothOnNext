"use client";

import { memo, useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#003366] text-white transition-all duration-500 hidden md:block ${
          scrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="px-8 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8920281686</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@rehobothdigitechsolution.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <a
              href="https://www.linkedin.com/company/rehoboth-digitech-solution/"
              className="flex items-center gap-1 hover:text-blue-200 transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://x.com/rehoboth_digi"
              className="flex items-center gap-1 hover:text-blue-200 transition-colors"
            >
              <Twitter size={16} /> Twitter
            </a>
            <a
              href="https://www.instagram.com/rehobothdigitechsolution?igsh=NGF0ZTBrcHk0a2F4"
              className="flex items-center gap-1 hover:text-blue-200 transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`fixed left-0 right-0 z-30 hidden md:block transition-all duration-500 mb-5 ${
          scrolled ? "top-0" : "top-9"
        }`}
      >
        <div className="">
          <div
            className="flex items-center justify-between px-8 py-4 bg-[#F9F8F6] shadow-md w-full"
            style={{ background: "var" }}
          >
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <link></link>
                <div className="flex items-center gap-4">
                  {/* RD Logo Icon */}
                  <img
                    src="/navlogo.png"
                    alt="navlogo,IT company in Delhi"
                    className="w-15"
                  />
                  {/* Typography */}
                  <div className="flex flex-col" style={{ gap: "2px" }}>
                    <div
                      className="text-gray-900"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        letterSpacing: "-0.02em",
                        lineHeight: "1",
                      }}
                    >
                      Rehoboth
                    </div>
                    <div
                      className="flex items-center"
                      style={{ gap: "6px", marginLeft: "1px" }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "1.5px",
                          background:
                            "linear-gradient(90deg, #3b82f6 0%, transparent 100%)",
                        }}
                      ></div>
                      <div
                        className="text-blue-600"
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          fontFamily: "system-ui, -apple-system, sans-serif",
                          letterSpacing: "0.2em",
                          lineHeight: "1",
                          textTransform: "uppercase",
                        }}
                      >
                        DigiTech
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* Nav Links */}
            <ul className="flex items-center gap-10 font-medium text-gray-700">
              <li>
                <a
                  href="/"
                  className="relative py-2 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative py-2 hover:text-[#003366] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#003366] after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </Link>
              </li>

              <li className="relative group">
                <button className="relative flex items-center py-2 hover:text-blue-600 transition-colors duration-300">
                  Services <FontAwesomeIcon icon={faCaretDown} />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-[300px] bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="py-2 text-gray-700 text-sm">
                    <li>
                      <Link
                        href="/website-development-company-in-jankpuri"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/seo-company-in-janakpuri"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        SEO
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/social-media-marketing-company-in-janakpuri"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Social Media Marketing
                      </Link>{" "}
                    </li>
                    <li>
                      <Link
                        href="/ppc-advertising-company-in-janakpuri"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        PPC Advertising
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/graphic-design-company-in-janakpuri"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Graphic design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/it-support-and-maintenance-in-janakpuri"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        IT Solution & maintenance
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>


              <li className="relative group">
                <button className="relative flex items-center py-2 hover:text-blue-600 transition-colors duration-300">
                  Our Location 
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-[300px] bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <ul className="py-2 text-gray-700 text-sm">
                    <li>
                      <Link
                        href="/digital-marketing-company-in-dwarka"
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        Dwarka
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/f&q"
                  className="relative py-2 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  F&Q
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="relative py-2 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </a>
              </li>

              
            </ul>

            {/* CTA Button */}
            <button className="bg-[#003366] text-white rounded-full py-2.5 px-7 font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              <a href="#contact">Contact US</a>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="p-4">
          <div className="flex items-center justify-between px-5 py-3 bg-[#F9F8F6] rounded-2xl shadow-lg">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/navlogo.png" alt="navlogo" className="w-10" />
              {/* Typography */}
              <div className="flex flex-col" style={{ gap: "2px" }}>
                <div
                  className="text-gray-900"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    letterSpacing: "-0.02em",
                    lineHeight: "1",
                  }}
                >
                  Rehoboth
                </div>
                <div
                  className="flex items-center"
                  style={{ gap: "6px", marginLeft: "1px" }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "1.5px",
                      background:
                        "linear-gradient(90deg, #3b82f6 0%, transparent 100%)",
                    }}
                  ></div>
                  <div
                    className="text-blue-600"
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      letterSpacing: "0.2em",
                      lineHeight: "1",
                      textTransform: "uppercase",
                    }}
                  >
                    DigiTech
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Toggle */}
            <button
              onClick={() => setMenu(!menu)}
              className="text-gray-700 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-300"
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menu && (
            <div className="mt-3 bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Contact Info Mobile */}
              <div className="bg-blue-600 text-white p-4 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={16} />
                  <span>+918920281686 </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@rehobothdigitechsolution.com</span>
                </div>
              </div>

              <ul className="py-3">
                <li>
                  <Link
                    href="/"
                    onClick={() => setMenu(false)}
                    className="block py-3 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={() => setMenu(false)}
                    className="block py-3 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    onClick={() => setMenu(false)}
                    className="block py-3 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Service
                  </Link>
                </li>

                <li>
                  <Link
                    href="/fAq"
                    className="block py-3 px-6 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setMenu(false)}
                  >
                    F&Q
                  </Link>
                </li>
              </ul>
              <div className="p-4 border-t border-blue-100">
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
    </>
  );
};

export default memo(Navbar);
