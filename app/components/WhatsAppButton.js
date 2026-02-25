"use client"
import { memo, useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const phoneNumber = "918920281686"; 
  const message = "Hello, I am interested in your services.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition transform"
      >
        <span className="text-xl">💬</span>
        <span className="font-medium hidden md:block">Chat with us</span>
      </a>

      
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 animate-slideIn">
          <div className="bg-black border border-gray-700 rounded-2xl p-4 w-72 shadow-xl relative">

            
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-white text-sm">We are online</span>
            </div>

          
            <p className="text-gray-300 text-sm mb-4">
              Need help? Chat with us on WhatsApp. We reply fast
            </p>

            
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#25D366] text-white py-2 rounded-full hover:opacity-90 transition"
            >
              Start Chat
            </a>

            
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full text-sm flex items-center justify-center"
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default memo(WhatsAppButton);
