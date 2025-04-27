import './NavigatePageCardComponent.css';


const NavigatePageCardComponent = ({title,desc,linkName,linkUrl,delay}) => {
  return (
    <div className='navigate-card box-shadow-black border-grey-2' data-aos="fade-up" data-aos-duration="1500" data-aos-delay={delay * 400}>
      <h4 className='fs-48'>{title}</h4>
      <img className="line" src="/Task2/images/Navigate/Container.svg" alt="line" />
      <p className='fs-20'>{desc}</p>    
      <a href={linkUrl} className='box-shadow-black border-grey-2'>
        <span className='fs-20'>{linkName}</span>
        <img src="/Task2/images/Navigate/Icon.svg" alt="arrow" />
      </a>
    </div>
  )
}

export default NavigatePageCardComponent