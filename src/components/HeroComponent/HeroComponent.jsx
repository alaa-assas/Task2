import './HeroComponent.css'
import {highlightText ,getLastWords} from './../../commons/highlightText'
import StatisticsComponent from '../StatisticsComponent/StatisticsComponent'

const HeroComponent = ({image, data,statistics}) => {
  return (
    <section className="hero px-168 mb-200">
      <div  className='left-side'>
        <img src={image} alt="image"/>
      </div>
      
      <div className='right-side'>
        <div className='about-hero'>
          <span className='fs-22 welcom-message'>{data.welcomMessage} </span>
          <h1 className='fs-54 hero-title'>{highlightText(data.title, getLastWords(data.title,4),"highlight")}</h1>
          <p className='fs-20 hero-desc'>{data.desc}</p>
        </div>
        <StatisticsComponent statistics={statistics} />
      </div>
    </section>
  )
}

export default HeroComponent