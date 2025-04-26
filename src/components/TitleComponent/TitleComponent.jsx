import './TitleComponent.css';

const TitleComponent = ({ flag, heading, desc }) => {
  return (
    <div className="title mb-100">
      <span className='flag fs-18'>{flag}</span>
      <h3 className='heading fs-58'>{heading}</h3>
      <p className='desc fs-20'>{desc}</p>
    </div>
  );
};

export default TitleComponent;
