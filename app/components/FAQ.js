  "use client"
  import { memo, useState } from "react";

  const FAQ = ({ faq }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <section className="py-24 px-4 relative  "
    
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h4
              className="font-semibold uppercase tracking-wide"
              style={{ color: "var(--primary)" }}
            >
              FAQ
            </h4>

            <h2
              className="text-3xl font-bold mt-2"
              
            >
              Frequently Asked Questions
            </h2>

            <p
              className="mt-4"
              
            >
              Find quick answers to the most common questions customers ask us.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faq?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-sm"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium transition"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>{item.question || item.q}</span>

                  <span
                    className="text-xl font-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div
                    className="px-5 pb-5 border-t"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {item.answer || item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default memo(FAQ);
