import { useState, useEffect } from "react";
import './FAQCardComponent.css'

const FAQCardComponent = ({question, answer}) => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleOpenCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faq-card border-grey-2' style={{backgroundColor: !isOpen ? "var(--Orange95)" : "var(--white-color)"}}>
      <div className="heading-card">
        <h4 className={`fs-22 ${isOpen} ? AA-pb-24 : `}>{question}</h4>
        {!isOpen ?  <img className="plus-icon" src="/images/FAQ/plus.svg" alt="plus" onClick={toggleOpenCard} /> :  <img className="minus-icon" src="/images/FAQ/minus.svg" alt="minus" onClick={toggleOpenCard} /> }
      </div>
      {isOpen && <p className="fs-20">{answer}</p>}
    </div>
  )
}

export default FAQCardComponent