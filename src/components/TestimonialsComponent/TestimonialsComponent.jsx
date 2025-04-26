import { useState, useEffect } from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { TestimonialsData } from "./../../data/TestimonialsData";
import "./TestimonialsComponent.css";

const TestimonialsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1200) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= TestimonialsData.length
        ? 0
        : prevIndex + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slidesToShow < 0
        ? TestimonialsData.length - slidesToShow
        : prevIndex - slidesToShow
    );
  };

  return (
    <section className="px-168 mb-200">
      <TitleComponent
        flag={"Their Happy Words 😃"}
        heading={"Our Testimonials"}
        desc={
          "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        }
      />
      <div className="AA-slider">
        <button onClick={prevSlide} className="nav-button bg-size">
          <img src="/images/Testimonials/prev.svg" alt="" />
        </button>
        <div className="testimonial-cards">
          {TestimonialsData.slice(
            currentIndex,
            currentIndex + slidesToShow
          ).map((field, index) => (
            <TestimonialCard
              opinion={field.opinion}
              userImage={field.userImage}
              userName={field.userName}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="nav-button bg-size">
          <img src="/images/Testimonials/next.svg" alt="" />
        </button>
        <div className="btn-nav-row">
          <button onClick={prevSlide} className="nav-button">
            <img src="/images/Testimonials/prev.svg" alt="" />
          </button>
          <button onClick={nextSlide} className="nav-button">
            <img src="/images/Testimonials/next.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
