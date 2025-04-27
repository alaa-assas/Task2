import './TopBannerComponent.css'

const TopBannerComponent = ({title}) => {

  return (
    <div className='px-50 top-banner'>
      <div className='container'>
        <img src="/Task2/images/Navbar/leftImageDesign.png" alt="img" className='leftImageDesign'/>
        <div className='center-content'>
          <img src="/Task2/images/Navbar/top.svg" alt="img" className='top'/>
          <p className='fs-20'>{title}</p>
          <img src="/Task2/images/Navbar/bottom.svg" alt="img" className='bottom'/>
        </div>
        <img src="/Task2/images/Navbar/rightImageDesign.png" alt="img" className='rightImageDesign' />
      </div>
          </div>
  )
}

export default TopBannerComponent