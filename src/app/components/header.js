"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <header className="head">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works">Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <div className="head-phone-wrapper w-100 d-flex justify-content-between">
              <Link className="navbar-brand ms-5" href="#">
                <Image
                  src="/asset/images/logo.png" // Replace with the correct path
                  alt="logo img"
                  width={100}
                  height={50}
                />
              </Link>
              <a
                href="tel:+393145678901"
                className="phone-number text-center text-white text-decoration-none p-4"
              >
                +39 314 567 8901
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
