"use client";

import { memo, useState, useEffect } from "react";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Testimonals from "./components/Testimonals";
import Contact from "./components/Contact";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const faqs = [
    {
      question: "Which is the best digital marketing company in Janakpuri",
      answer:
        "Rehoboth Digitech Solution is a trusted digital marketing company in Janakpuri offering result-focused online marketing solutions. We help businesses improve visibility, generate leads, and grow online with customized strategies",
    },
    {
      question:
        " Do you provide digital marketing services in Delhi and West Delhi?",
      answer:
        "Yes, we provide complete digital marketing services in Delhi, including West Delhi and nearby areas. Our team works with local businesses, startups, and brands across Delhi NCR",
    },
    {
      question: "Are you a full-service digital marketing agency in Janakpuri",
      answer:
        "Yes! We offer monthly maintenance and 24/7 IT support packages to ensure your business stays running smoothly.",
    },
    {
      question: "Do you offer SEO services for local businesses in Janakpuri?",
      answer:
        "Yes, as a professional SEO company in Janakpuri, we help local businesses rank higher on Google, attract organic traffic, and get quality leads through ethical SEO practices.",
    },
    {
      question: "Can you help my business with social media marketing?",
      answer:
        "Absolutely. We are a reliable social media marketing company in Janakpuri offering social media management, content creation, and paid campaigns to improve engagement and brand awareness.",
    },
    {
      question: " Do you design and develop business websites?",
      answer:
        "Yes, we are a trusted website development company in Janakpuri. We design fast, mobile-friendly, and SEO-optimized websites that help convert visitors into customers.",
    },

    {
      question: "Do you serve clients outside Janakpuri?",
      answer:
        "Yes, we work as a digital marketing company in Delhi and also serve businesses across Delhi NCR. Many clients also find us as a digital marketing company near me through local searches.",
    },

    {
      question:
        " How is your digital marketing agency different from others in Delhi?",
      answer:
        "As a result-focused digital marketing agency in Delhi, we focus on clear communication, transparent reporting, and strategies that bring real business growth, not just traffic.",
    },
    {
      question: "How can I contact a digital marketing agency near Janakpuri?",
      answer:
        "You can contact Rehoboth Digitech Solution by phone or email, or visit our office in Janakpuri. If you’re searching for an affordable digital marketing agency near Janakpuri, we are ready to help.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 brightness-[0.6]"
          style={{ backgroundImage: "url('/Home.jpg') " }}
        />

        {/* Light Overlay for White/Blue Theme */}
        <div className="absolute inset-0 "></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-12">
          <div
            className={`mt-32 text-gray-900 max-w-4xl text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            <h1 className="text-3xl text-white md:text-5xl font-bold leading-tight">
              IT Solutions & Digital Marketing <br />
              From Code to <span className="text-[#003366]">Customer</span>
            </h1>

            <p className="text-gray-700 mt-6 text-lg text-white max-w-2xl mx-auto leading-relaxed">
              Rehoboth Digitech Solution is a professional digital marketing
              company in Janakpuri, Delhi, offering complete online marketing
              solutions for startups, small businesses, and growing brands.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 text-white bg-[#003366] rounded-full py-3 px-8 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
      </div>
      <AboutUs />
      <Service />
      <div className="bg-[#F9F8F6] border-t border-blue-200 py-16">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
      Trusted Digital Marketing Agency Serving 
      <span className="text-[#003366]"> Janakpuri & Delhi NCR</span>
    </h3>

    <p className="text-gray-600 mt-6 max-w-5xl px-24 leading-relaxed">
    We proudly serve businesses in Janakpuri, Delhi, and across Delhi NCR. Our strong understanding of the local market, customer behavior, and competition helps us create highly targeted digital marketing strategies that deliver real and measurable results for Delhi-based businesses.
Whether you are a startup, small business, or established company, we design customized strategies based on your goals and budget. From SEO and social media marketing to paid advertising and website development, we focus on generating quality leads, increasing brand visibility, and improving conversions.
If you are looking for a dependable digital marketing company in Delhi that works with transparency, strategy, and long-term vision, we are here to help you grow online with confidence and clarity.

    </p>
  </div>
</div>
      <Testimonals /> <Contact /> <FAQ faq={faqs} />
    </>
  );
};

export default memo(Home);
