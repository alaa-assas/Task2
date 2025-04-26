import './NavigatePageCardComponent.css';


const NavigatePageCardComponent = ({title,desc,linkName,linkUrl}) => {
  return (
    <div className='navigate-card box-shadow-black border-grey-2'>
      <h4 className='fs-48'>{title}</h4>
      <img className="line" src="/images/Navigate/Container.svg" alt="line" />
      <p className='fs-20'>{desc}</p>    
      <a href={linkUrl} className='box-shadow-black border-grey-2'>
        <span className='fs-20'>{linkName}</span>
        <img src="/images/Navigate/Icon.svg" alt="arrow" />
      </a>
    </div>
  )
}

export default NavigatePageCardComponent