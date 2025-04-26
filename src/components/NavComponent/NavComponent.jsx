import './NavComponent.css'
import { useState } from 'react';

const NavComponent = ({logo , items }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`px-50 ${isOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`nav-links`}>
          {
            items.map((item,index) => (
              <li key={index} onClick={() => setActiveLink(item.name)}  className={`${activeLink == item.name ? 'active' : ''} `}>
                <a href={item.link} className={`fs-20`}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <img src="/Task2/images/Navbar/hamburger.svg" alt="logo" />
        </div>
        <ul className={`nav-menu ${isOpen && "show"}`}>
          {
            items.map((item,index) => (
              <li key={index} onClick={() => setActiveLink(item.name)}  className={`${activeLink == item.name ? 'active' : ''} `}>
                <a href={item.link} className={`fs-18`}>
                  {item.name}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavComponent