import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
// import logo from '../../assests/travel logo.png';
import { Link } from 'react-router-dom';
import { PiRectangleThin } from 'react-icons/pi';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = ({ isServiceOpen, isJoinOpen, toggleService, toggleJoin, toggleMenu }) => {
     const handleClickOutside = (event) => {
          if (node.current && !node.current.contains(event.target)) {
               toggleService(false);
               toggleJoin(false);
               toggleMenu(false)
          }
     };

     const handleNavLinkClick = () => {
          toggleService(false);
          toggleJoin(false);
          toggleMenu(false);
     };


     useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     });

     const node = useRef();
     const [tabCards, setTabCards] = useState([]);

     useEffect(() => {
          fetch('http://127.0.0.1:8000/api/visit/tabcard/')
               .then(response => response.json())
               .then(data => {
                    setTabCards(data);
               })
               .catch(error => console.error('Error fetching tab cards:', error));
     }, []);
     return (
          <>
               <ul className="header-list">
                    <li key="home">
                         <Link className='navbar-link' to={`/`} onClick={handleNavLinkClick}>Home</Link>
                    </li>
                    <li key="service" onClick={() => toggleService(!isServiceOpen)}>
                         <span className='navbar-link'>Service</span>
                         {isServiceOpen && (
                              <div className={`header_dropdown`} ref={node}>
                                   {tabCards.map((tabCard, index) => (
                                        <Link key={index} className='header-sublist' to={`/service/${tabCard.id}`} onClick={handleNavLinkClick}>
                                             <p className="header__dropdown-title">{tabCard.title}</p>
                                             <p className="header__dropdown-des">{tabCard.description1.slice(0, 100) + '....'}</p>
                                        </Link>
                                   ))}
                              </div>

                         )}
                    </li>
                    <li key="join" onClick={() => toggleJoin(!isJoinOpen)}>
                         <span className='navbar-link'>Join</span>
                         {isJoinOpen && (
                              <div className={`header_dropdown`} ref={node}>
                                   <Link className='header-sublist' to={`/join`} onClick={handleNavLinkClick}>
                                        <PiRectangleThin className='header-icon' />
                                        <p className="header__dropdown-title">Careers</p>
                                        <p className="header__dropdown-des">From concept to completion, the design and delivery of technology and products</p>
                                   </Link>
                                   <Link className='header-sublist' onClick={handleNavLinkClick}>
                                        <PiRectangleThin className='header-icon' />
                                        <p className="header__dropdown-title">Fellowship</p>
                                        <p className="header__dropdown-des">A custom-built group of developers and designers, fine-tuned for delivery</p>
                                   </Link>
                              </div>
                         )}
                    </li>
                    <li key="blog">
                         <Link className='navbar-link' to={`/blog`} onClick={handleNavLinkClick}>Blog</Link>
                    </li>
                    <li key="about">
                         <Link className='navbar-link' to={`/about`} onClick={handleNavLinkClick}>About Us</Link>
                    </li>
               </ul>
          </>
     )
}

const Button = () => (
     <>
          <div className="header-button">
               <Link className='animation animation-contact' to={`/visiting-card`}>
                    <div className="animation-icon">
                         <PiRectangleThin className='rectangle' />
                         <span className='animation-line'></span>
                    </div>
                    <span>Build with Card</span>
               </Link>
               <Link className='animation animation-card' to={`/contact`}>
                    <div className="animation-icon">
                         <PiRectangleThin className='rectangle' />
                         <span className='animation-line'></span>
                    </div>
                    <span>Build with us</span>
               </Link>
          </div>
     </>
)

const Navbar = () => {
     const [isServiceOpen, setIsServiceOpen] = useState(false);
     const [isJoinOpen, setIsJoinOpen] = useState(false);
     const [toggleMenu, setToggleMenu] = useState(false);


     const toggleService = (isOpen) => {
          setIsServiceOpen(isOpen);
          setIsJoinOpen(false);
     };

     const toggleJoin = (isOpen) => {
          setIsJoinOpen(isOpen);
          setIsServiceOpen(false);
     };

     return (
          <div className="header-menu">
               <div className='header'>
                    <Link className='logo' to={`/`}>
                         {/* <img src={logo} alt="logo" /> */}
                         <h1>ABC</h1>
                    </Link>
                    <div className="header_link">
                         <Menu
                              isServiceOpen={isServiceOpen}
                              isJoinOpen={isJoinOpen}
                              toggleService={toggleService}
                              toggleJoin={toggleJoin}
                              toggleMenu={setToggleMenu}
                         />
                    </div>
                    <Button />
               </div>

               <div className="header-small">
                    {toggleMenu
                         ? <RiCloseLine color='#000' size={28} onClick={(e) => setToggleMenu(false)} />
                         : <RiMenu3Line color='#000' size={28} onClick={(e) => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                         <div className='header-phone'>
                              <Link className='logo' to={`/`}>
                                   <h1>ABC</h1>
                                   {/* <img src={logo} alt="logo" /> */}
                              </Link>
                              <Menu
                                   isServiceOpen={isServiceOpen}
                                   isJoinOpen={isJoinOpen}
                                   toggleService={toggleService}
                                   toggleJoin={toggleJoin}
                                   toggleMenu={setToggleMenu}
                                   className="menu" />
                              <Button />
                         </div>
                    )}
               </div>
          </div>

     );
};

export default Navbar;
