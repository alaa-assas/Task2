import './ContactInfoComponent.css'


const ContactInfoComponent = ({link,icon,alt,data}) => {
  return (
    <>
      <img src={icon} alt={alt} />
      <a className="fs-20" href={link}>
        {data}
      </a>
    </>
  )
}

export default ContactInfoComponent