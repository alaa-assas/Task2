import './TestimonialCard.css'

const TestimonialCard = ({userImage,userName,opinion}) => {
  return (
    <div className='testimonial-card border-grey-2 box-shadow-black'>
        <div className='user-image'>
            <img src={userImage} alt="" />
        </div>
        <h5 className='fs-24'>{userName}</h5>
        <img src="/images/Testimonials/Shape.svg" alt="" className='stars'/>
        <p className='fs-20'>{opinion}</p>
    </div>
  )
}

export default TestimonialCard