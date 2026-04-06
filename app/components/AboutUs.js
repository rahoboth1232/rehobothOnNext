"use client";
import Link from "next/link";
import { memo, useState, useEffect, useRef } from "react";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  return (
    <section className="bg-[#F9F8F6] text-gray-900 py-24 px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-600 font-medium">
            About Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
         Digital Marketing Company in 
 <br />
            <span className="text-[#003366]">Janakpuri, Delhi</span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Rehoboth Digitech Solution is a results-focused digital marketing
            agency in Janakpuri that helps businesses build a strong online
            presence. We believe digital marketing should be simple,
            transparent, and effective. Based in Janakpuri, West Delhi, we work
            closely with our clients to understand their business goals and
            create customized strategies that deliver long-term growth. Whether
            you want more website traffic, better Google rankings, or quality
            leads, our team is here to support your growth journey.
          </p>
    
          <p className="text-gray-600 mt-4 leading-relaxed">
            From design to deployment, we deliver high-performance solutions
            with speed, security, and scalability at the core.
          </p>

          <button className="mt-8 bg-[#003366] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            <Link href="/about">Learn More</Link>
          </button>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[#003366]">
              <CountUp end={4} />
            </h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[#003366]">
              <CountUp end={120} />
            </h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[#003366]">
              <CountUp end={250} />+
            </h3>
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-4xl font-bold text-[#003366]">24/7</h3>
            <p className="text-gray-600 mt-2">Support</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default memo(About);
