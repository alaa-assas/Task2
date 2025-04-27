import './BenefitCardComponent.css';

const BenefitCardComponent = ({icon,alt,title,desc,delay}) => {
  return (
    <div className="benfit-card box-shadow-black border-grey-2" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={delay * 300}>
      <img class="icon" src={icon} alt={alt} />
      <h4 className='fs-28'>{title}</h4>
      <p className='fs-20'>{desc}</p>
    </div>
  )
}

export default BenefitCardComponent