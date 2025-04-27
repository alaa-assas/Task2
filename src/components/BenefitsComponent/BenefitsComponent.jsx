import TitleComponent from "../TitleComponent/TitleComponent";
import BenefitCardComponent from "../BenefitCardComponent/BenefitCardComponent";
import { BenefitsData } from './../../data/BenefitsData'
import './BenefitsComponent.css';

const BenefitsComponent = () => {
  return (
    <section className="px-168 mb-200">
    <TitleComponent
      flag={"Children Deserve Bright Future"}
      heading={"Our Benefits"}
      desc={
        "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      }
    />
    <div className="benefit-cards" >
        {BenefitsData.map((field, index) => (
          <BenefitCardComponent title={field.title} desc={field.desc} icon={field.icon} alt={field.alt} delay={index}/>
        ))}
    </div>
  </section>
  )
}

export default BenefitsComponent