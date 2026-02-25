'use client'

import { memo, useState, useRef } from "react";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    Name: "Ashutosh",
    image: ashu,
    title: "Full Stack Developer",
    desc: "Expert in building scalable and secure web applications.",
    skills: ["React", "Node.js", "MongoDB"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "ashutosh@rehoboth.com",
    },
  },
  {
    Name: "Khushi",
    image: khushi,
    title: "Full Stack Developer",
    desc: "Expert in building scalable and secure web applications.",
    skills: ["React", "Python", "AWS"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "khushi@rehoboth.com",
    },
  },
  {
    Name: "Nidhi",
    image: nidhi,
    title: "UI/UX Designer",
    desc: "Designing clean, intuitive and conversion-focused user interfaces.",
    skills: ["Figma", "Photoshop", "UI/UX"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nidhi@rehoboth.com",
    },
  },
  {
    Name: "Tannu",
    image: "",
    title: "Digital Marketing Lead",
    desc: "Driving traffic, engagement, and brand visibility across platforms.",
    skills: ["SEO", "Google Ads", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "tannu@rehoboth.com",
    },
  },
  {
    Name: "Jasmine",
    image: jasmine,
    title: "Full Stack Developer",
    desc: "Expert in building scalable and secure web applications.",
    skills: ["Vue.js", "Django", "Docker"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "jasmine@rehoboth.com",
    },
  },
];

const TeamCard = ({ Name, title, image, desc, skills, social }) => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div
      className="relative bg-white border border-blue-200 rounded-2xl p-6 text-center hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
      onMouseEnter={() => setShowSocial(true)}
      onMouseLeave={() => setShowSocial(false)}
    >
      {/* Profile Image */}
      <div className="relative w-28 h-28 mx-auto mb-4">
        {image ? (
          <img
            src={image}
            alt={Name}
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center border-4 border-blue-100 group-hover:border-blue-400 transition-all duration-300 group-hover:scale-110">
            <span className="text-3xl font-bold text-white">
              {Name.charAt(0)}
            </span>
          </div>
        )}

        {/* Online Status Indicator */}
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 border-4 border-white rounded-full"></div>
      </div>

      {/* Name & Title */}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {Name}
      </h3>
      <p className="text-blue-600 text-sm mb-3 font-medium">{title}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>

      {/* Skills Badges */}
      {skills && (
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium hover:bg-blue-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Social Links - Slide up on hover */}
      <div
        className={`flex gap-3 justify-center transition-all duration-500 ${
          showSocial ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {social?.linkedin && (
          <a
            href={social.linkedin}
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
        )}
        {social?.twitter && (
          <a
            href={social.twitter}
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={16} />
          </a>
        )}
        {social?.github && (
          <a
            href={social.github}
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
        )}
        {social?.email && (
          <a
            href={`mailto:${social.email}`}
            className="w-9 h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Mail size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 3;
    const newScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F9F8F6] text-gray-900 py-24 px-12 border-t border-b border-blue-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-600 font-medium">
            Our Team
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet the{" "}
            <span className="text-blue-600">People Behind Rehoboth</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A passionate team of developers, designers, and digital experts
            committed to building powerful digital solutions.
          </p>

         
        </div>

        {/* Team Cards Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center hover:scale-110"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center hover:scale-110"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default memo(Team);
