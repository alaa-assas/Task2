import TitleComponent from "../TitleComponent/TitleComponent";
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent";
import { FAQData } from "./../../data/FAQData";
import { groupData } from "./../../commons/groupData";
import "./FAQsComponent.css";

const FAQsComponent = () => {
  return (
    <section className="px-168 mb-200">
      <TitleComponent
        flag={"Solutions For The Doubts"}
        heading={"Frequently Asked Questions"}
        desc={
          "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        }
      />
      <div className="faq-cards">
        {groupData(FAQData).map((group, groupKey) => (
          <div key={groupKey} className="AA-FAQ-group" data-aos="fade-down" data-aos-duration="1500" data-aos-delay={groupKey * 400}>
            {group.map((item, itemKey) => (
              <FAQCardComponent
                question={item.question}
                answer={item.answer}
                key={itemKey}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsComponent;
