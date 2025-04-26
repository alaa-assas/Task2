import ContactInfoComponent from "../ContactInfoComponent/ContactInfoComponent";
import SocialBtnComponent from "../SocialBtnComponent/SocialBtnComponent";
import "./FooterComponent.css";

const FooterComponent = ({
  logo,
  about,
  ContactInfo,
  FooterLinks,
  socialLinks,
  policyLinks,
  copyright,
}) => {
  return (
    <footer className="box-shadow-black border-grey-2">
      <div className="footerTopPart">
        <div className="footer-links">
          <div className="about-footer">
            <img className="logo" src={logo} alt="logo" />
            <p className="fs-20">{about}</p>
          </div>
          <ul className="contact-info-list">
            {ContactInfo.map((field, index) => (
              <li className="contact-info" key={index}>
                <ContactInfoComponent alt={field.alt} icon={field.icon} data={field.data} link={field.link}/>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          {FooterLinks.map((field, index) => (
            <div className="AA-col" key={index}>
              <h5 className="fs-20-6">{field.MainTitle}</h5>
              <ul>
                {field.links?.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="fs-20">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footerBottomPart">
        <ul className="privacy-part">
          {policyLinks.map((field, index) => (
            <>
              <li>
                <a href={field.link} className="fs-18" key={index}>
                  {field.name}
                </a>
              </li>
              {policyLinks.length != index + 1 && <li> | </li>}
            </>
          ))}
        </ul>
        <ul className="social-part">
          {socialLinks.map((field, index) => (
            <li>
              <SocialBtnComponent icon={field.icon} alt={field.alt} link={field.link} />
            </li>
          ))}
        </ul>
      </div>
      <p className="copyright fs-18">{copyright}</p>
    </footer>
  );
};

export default FooterComponent;
