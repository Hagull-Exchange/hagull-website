import React, { useState } from "react";
import "./Faq.css";
import questionsData from "./questionsData";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section mt-5 mb-5">
      <div className="container">
        <h1 className="text-center">Frequent asked questions</h1>
        <p className="text-center small-text">
          Here are some frequently asked questions by our Users
        </p>

        <div className="accordion mt-5">
          {questionsData.map((question, index) => (
            <div key={index} className="accordion-item">
              <button
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="accordion-title">{question.title}</span>
                <span className="icon"></span>
              </button>
              <div
                className={
                  activeIndex === index
                    ? "accordion-content show"
                    : "accordion-content"
                }
              >
                <p className="pb-2">{question.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
