import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <div className="footer-icon" style={{ borderColor: "#0A66C2" }}>
            <a
              href="https://www.linkedin.com/company/mahesh-carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-linkedin-02" style={{ color: "#0A66C2" }} />
            </a>
          </div>

          <div className="footer-icon" style={{ borderColor: "#FF0033" }}>
            <a
              href="https://www.youtube.com/@Mahesh_Carpets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-youtube" style={{ color: "#FF0033" }} />
            </a>
          </div>

          <div className="footer-icon" style={{ borderColor: "#0A66C2" }}>
            <a
              // href="https://www.linkedin.com/company/mahesh-carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-facebook-02" style={{ color: "#0A66C2" }} />
            </a>
          </div>

          <div className="footer-icon" style={{ borderColor: "#dc2743" }}>
            <a
              href="https://www.instagram.com/mahesh_carpets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="hgi-stroke hgi-instagram" style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }} />
            </a>
          </div>
        </div>

        <div className="first-container">
          <div className="footer-container-wraper">
            <div className="footer-logo">
              <Link href='/'>
                <Image
                  src="/images/logo/logo-01.jpeg"
                  alt="logo"
                  width={280}
                  height={80}
                />
              </Link>
            </div>
            {/* <div className="footer-description">
              <h2>MAHESH CARPETs</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div> */}
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Quick Links</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <a href="/">Home</a>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/our-story">Our Story</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="#compliance">Compliance</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/faq">FAQ's</Link>
                </li>
                {/* <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Privacy & Policy</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/">Terms & Conditions</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Categories</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/hand-knotted">Hand Knotted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/hand-tufted">Hand Tufted</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/shaggy">Shaggy</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/handloom">Handloom</Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-link-forward" />
                  <Link href="/collections/flat-weave">Flat Weave</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-container">
          <div className="footer-container-wraper">
            <div className="footer-link-header">
              <span>Contact Us</span>
            </div>

            <div className="footer-links">
              <ul>
                <li>
                  <i className="hgi-stroke hgi-telephone" style={{ color: "#28a745" }} />
                  <Link href="tel:+919517292555">
                    <span>+91 9517292555</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-mail-at-sign-01" style={{ color: "#C5221F" }} />
                  <Link href="mailto:info@maheshcarpets.com">
                    <span>info@maheshcarpets.com</span>
                  </Link>
                </li>
                <li>
                  <i className="hgi-stroke hgi-location-03" style={{ color: "#007bff" }} />
                  <Link className="lst" href='https://www.google.com/maps/place/Mahesh+Carpets/@25.2788299,82.9040077,17z/data=!3m1!4b1!4m12!1m5!3m4!2zMjXCsDE2JzQzLjkiTiA4MsKwNTQnMzEuMCJF!8m2!3d25.2788506!4d82.9086227!3m5!1s0x398e335bd619aa8f:0xb489a27d964108e5!8m2!3d25.2788251!4d82.9086211!16s%2Fg%2F11yc0zdjkp?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoASAFQAw%3D%3D' target="_blank">
                    <span>Araji No. 90D GT Road JAGATPUR, VARANASI-221302 Uttar Pradesh</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="base-footer">
        <span>
          Copyright &copy; {new Date().getFullYear()} Mahesh Carpets | All
          rights reserved | Developed & Maintained by{" "}
          <a href="https://wizards.co.in/" target="_blank">
            Wizards Next
          </a>
        </span>
      </div>
    </footer>
  );
}
