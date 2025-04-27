import NavComponent from "./components/NavComponent/NavComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import FAQsComponent from "./components/FAQsComponent/FAQsComponent";
import NavigatePagesComponent from "./components/NavigatePagesComponent/NavigatePagesComponent";
import TestimonialsComponent from "./components/TestimonialsComponent/TestimonialsComponent";
import BenefitsComponent from "./components/BenefitsComponent/BenefitsComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import TopBannerComponent from "./components/TopBannerComponent/TopBannerComponent";
import HandleLoadingComponent from './components/HandleLoadingComponent/HandleLoadingComponent'
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { FooterLinks, ContactInfo,socialLinks,policyLinks} from "./data/FooterData";
import { NavLinks } from "./data/NavData";
import { HeroTextData, statistics } from "./data/HeroData";


function App() {

  return (
    <>
      <HandleLoadingComponent />
      <ScrollToTop />
      <TopBannerComponent title={"Admission is Open, Grab your seat now"} />
      <NavComponent logo={"/Task2/images/Navbar/Logo.svg"} items={NavLinks} />
      <HeroComponent
        image={"/Task2/images/Hero/Image.png"}
        data={HeroTextData}
        statistics={statistics}
      />
      <BenefitsComponent />
      <TestimonialsComponent />
      <FAQsComponent />
      <NavigatePagesComponent />
      <FooterComponent
        logo={"/Task2/images/Footer/Logo.svg"}
        about={
          "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        }
        ContactInfo={ContactInfo}
        FooterLinks={FooterLinks}
        policyLinks={policyLinks}
        socialLinks={socialLinks}
        copyright={
          "Copyright © [2023] Little Learners Academy. All rights reserved."
        }
      />
    </>
  );
}

export default App;
