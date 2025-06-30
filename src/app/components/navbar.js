"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import Image from 'next/image';

import { useModal } from '../contexts/ModalContext';
import CourseInquiryModal from './CourseInquiryModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  console.log("updatedd");


     const { showModal, hideModal } = useModal();
  
  const handleButtonClick = () => {
    showModal(<CourseInquiryModal />);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#301a52" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img
            loading="lazy"
            className="logo_image"
            src="/images/logo.png"
            alt="The Tech Training"
            width="190"
            height="70"
          />
        </Link>

        {/* My Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* My Navbar  */}
        <div
          className={`collapse navbar-collapse p-3 ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto gap-lg-3 gap-md-2 gap-1 text-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/training" ? "active" : ""
                }`}
                href="/training"
              >
                TRAINING COURSES
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link ${pathname === '/technology' ? 'active' : ''}`} href="/technology">TECHNOLOGIES</Link>
            </li> */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contactus" ? "active" : ""
                }`}
                href="/contactus"
              >
                CONTACT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/apply" ? "active" : ""}`}
                href=""
                onClick={handleButtonClick}
              >
                APPLY NOW
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
