import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import hrc from './hrclogo.png';
import abc from './abclogo.svg';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
        <div className='navbar-container'>
          <img className="abc" src={abc} />
          
          <div className='hrclogo'>
          <img className="hrc" src={hrc} />
          </div>
          <div className='List'>
           Invoice List
            </div>
     
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;