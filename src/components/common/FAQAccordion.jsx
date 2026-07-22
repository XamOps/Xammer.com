import { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={i}>
            <h3 className="faq-item__heading">
              <button
                type="button"
                className="faq-item__question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq-item__icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div className="faq-item__answer-wrap">
              <div className="faq-item__answer-inner">
                <p className="faq-item__answer">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
