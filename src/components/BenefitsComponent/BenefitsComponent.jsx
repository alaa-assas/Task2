import TitleComponent from "../TitleComponent/TitleComponent";
import BenefitCardComponent from "../BenefitCardComponent/BenefitCardComponent";
import { BenefitsData } from './../../data/BenefitsData'
import './BenefitsComponent.css';

const BenefitsComponent = () => {
  return (
    <section className="px-168 mb-200">
    <TitleComponent
      flag={"Explore More"}
      heading={"Navigate through our Pages"}
      desc={
        "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      }
    />
    <div className="benefit-cards">
        {BenefitsData.map((field, index) => (
          <BenefitCardComponent title={field.title} desc={field.desc} icon={field.icon} alt={field.alt}/>
        ))}
    </div>
  </section>
  )
}

export default BenefitsComponent