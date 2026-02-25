"use client"

import { memo, useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // EmailJS config
  const publicKey = "FspW1aeUR6rx9CKLD";
  const serviceID = "service_iyp5t2f";
  const templateID = "template_q9n9drf";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const createParticle = () => {
    const newParticle = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    };
    setParticles((prev) => [...prev, newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value:
        "WZ-20 second Floor, Backside village Nangli jalib, Janakpuri B1 New Delhi - 110058",
      link: "https://maps.google.com"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@rehobothdigitechsolution.com",
      link: "mailto:info@rehobothdigitechsolution.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9220157241, +91 8920281686",
      link: "tel:+919220157241"
    }
  ];

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 text-gray-900"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-blue-400 rounded-full opacity-60 animate-ping pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
        />
      ))}

      <div className="relative z-10 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-stretch">

          {/* LEFT */}
          <div className="h-full flex flex-col justify-between">
            <div>
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-600 font-medium">
                Contact Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="text-blue-600">Great Together</span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
               Looking for a Cost-effective digital marketing company in Janakpuri, Delhi?
Visit our office or contact us using the details below. Our team is always ready to help you grow your business online.

              </p>

              <div className="space-y-1">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    onMouseEnter={() => setHoveredContact(i)}
                    onMouseLeave={() => setHoveredContact(null)}
                    className="relative overflow-hidden flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-blue-200 hover:bg-blue-50 transition-all group transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className={`p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-12 group-hover:scale-110 ${hoveredContact === i ? "animate-bounce" : ""}`}>
                      <item.icon size={16} />
                    </div>

                    <div className="relative z-10">
                      <div className="text-sm text-gray-500 mb-1 font-medium">
                        {item.label}
                      </div>
                      <div className="font-medium group-hover:text-blue-600">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            onMouseEnter={createParticle}
            className="h-full flex flex-col justify-center bg-white border-2 border-blue-200 rounded-2xl p-8 space-y-5 shadow-xl hover:shadow-2xl transition-all relative group"
          >
            {/* Success Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 rounded-2xl flex flex-col items-center justify-center z-20 backdrop-blur-sm">
                <CheckCircle size={64} className="text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            )}

            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field[0].toUpperCase() + field.slice(1)}`}
                required
                className="w-full bg-blue-50 border-2 border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            ))}

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-blue-50 border-2 border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
            />

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={18} />}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
