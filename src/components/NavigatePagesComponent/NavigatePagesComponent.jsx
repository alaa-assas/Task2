import TitleComponent from "../TitleComponent/TitleComponent";
import NavigatePageCardComponent from "../NavigatePageCardComponent/NavigatePageCardComponent";
import { NavigatePagesData } from "./../../data/NavigatePagesData";
import './NavigatePagesComponent.css';

const NavigatePagesComponent = () => {
  return (
    <section className="px-168 mb-200">
      <TitleComponent
        flag={"Explore More"}
        heading={"Navigate through our Pages"}
        desc={
          "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        }
      />
      <div className="navigate-cards">
        {NavigatePagesData.map((field, index) => (
          <NavigatePageCardComponent title={field.pageName} desc={field.description} linkUrl={"#"} linkName={"Learn More"} />
        ))}
      </div>
    </section>
  );
};

export default NavigatePagesComponent;
