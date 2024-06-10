import React, { useState } from 'react'
import './Faq.css'
const Faq = () => {
    const faq = [
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Sign Up' button and fill out the registration form with your details.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods, including credit cards, PayPal, and bank transfers.",
        },
        {
          question: "Can I cancel my order?",
          answer:
            "Yes, you can cancel your order by contacting our customer support team before it is shipped.",
        },
      ];
      const [selectedQuestion, setSelectedQuestion] = useState(null);
    
      const handleQuestionClick = (index) => {
        setSelectedQuestion(index === selectedQuestion ? null : index);
      };
  return (
    <div className="faq-content">
    <div className="faq-container">
      <h4>FAQ</h4>
      <h2>Frequently Asked Questions</h2>
      <p>
        Frequently Asked Questions About the Car Rental Booking Process on
        Our Website: Answers to Common Concerns and Inquiries.
      </p>
      <div className="all-questions-container">
        {faq.map((fq, index) => (
          <div className="quest-container" key={index}>
            <div
              className={`quest-box ${
                selectedQuestion === index ? "selected" : ""
              }`}
              onClick={() => handleQuestionClick(index)}
            >
              <p>{fq.question}</p>
              <i className="fas fa-chevron-down"></i>
            </div>
            {selectedQuestion === index && (
              <div className="answer-box">
                <p>{fq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Faq
