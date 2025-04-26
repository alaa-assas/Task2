import './SocialBtnComponent.css'


const SocialBtnComponent = ({link,icon,alt}) => {
  return (
    <a href={link} className="social-btn">
      <img src={icon} alt={alt} />
    </a>
  )
}

export default SocialBtnComponent