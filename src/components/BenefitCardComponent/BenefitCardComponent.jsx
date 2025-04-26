import './BenefitCardComponent.css';

const BenefitCardComponent = ({icon,alt,title,desc}) => {
  return (
    <div className="benfit-card box-shadow-black border-grey-2">
      <img class="icon" src={icon} alt={alt} />
      <h4 className='fs-28'>{title}</h4>
      <p className='fs-20'>{desc}</p>
    </div>
  )
}

export default BenefitCardComponent