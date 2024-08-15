import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { FooterLinkStyle } from "./styles";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Logo } from "@/src/components/Logo";
import {
  BriefcaseIcon,
  GiftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export const Footer: React.FC = () => {
  const styleProps = "my-5 border-top py-3 px-4";
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    rootMargin: `0px 0px 0px`,
  });

  return (
    <Container fluid className="px-0 non-print" ref={myRef}>
      <FooterLinkStyle>
        <div className="footer-content flex flex-wrap gap-3 justify-around [&>div]:w-fit [&_h3]:mb-3 [&_h3]:font-semibold [&_a]:text-gray-300 hover:[&_a]:text-white [&_a]:no-underline ">
          <div className="">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/our-service">Services</a>
              </li>
              <li>
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:info@circuitxperts.com">
                  Email: info@circuitxperts.com
                </a>
              </li>
              <li>
                <a href="tel:+91-9235916122">Phone: +91-9235916122</a>
              </li>
            </ul>
          </div>
          <div className=" [&>a]:mr-3">
            <h3>Follow Us</h3>
            <a href="#">
              <i className="bi text-2xl bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi text-2xl bi-twitter-x"></i>
            </a>
            <a href="#">
              <i className="bi text-2xl bi-facebook"></i>
            </a>
          </div>
        </div>
      </FooterLinkStyle>
      <div className="bg-[#222] text-white p-3 !text-base text-center">
        &copy; {new Date().getFullYear()} CircuitXperts| Designed by
        CircuitXperts
      </div>
    </Container>
  );
};
