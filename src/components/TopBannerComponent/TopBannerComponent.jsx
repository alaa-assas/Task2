import './TopBannerComponent.css'

const TopBannerComponent = ({title}) => {

  return (
    <div className='px-50 top-banner'>
      <div className='container'>
        <div className='center-content'>
          <img src="/Task2/images/Navbar/top.svg" alt="img" className='top'/>
          <p className='fs-20'>{title}</p>
          <img src="/Task2/images/Navbar/bottom.svg" alt="img" className='bottom'/>
        </div>
      </div>
    </div>
  )
}

export default TopBannerComponent