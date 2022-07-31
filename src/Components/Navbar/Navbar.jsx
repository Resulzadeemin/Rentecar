import { useState } from 'react';
import { AiTwotoneCar } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"
function Navbar() {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(!isMenu);
        setResponsiveclose(!isResponsiveclose);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }
        
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    // const toggleSubmenu = () => {
    //     setMenuSubMenu(isMenuSubMenu === false ? true : false);
    // };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }
    
    return (
          <header className="header__middle">
              <div id="navbar">
                <div className="navbar">
                    <div className="container">
                        {/* Add Logo  */}
                        <div className="header__middle__logo">
                                <h2>Auto<span style={{color:"#f7b71d"}}>Road</span></h2>
                        </div>
                        <div className="header__middle__menus">
                            <nav className="main-nav " >

                                {/* Responsive Menu Button */}
                                {
                                    isResponsiveclose === true ? <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><AiTwotoneCar /></span> 
                                    : <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><GiHamburgerMenu /></span>
                                }
                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item"><a onClick={toggleClass} href="/">Home</a></li>
                                    <li className="menu-item"><a onClick={toggleClass} href="#about">About</a></li>   
                                    <li className="menu-item"><a onClick={toggleClass} href="#blog">Blog</a></li>
                                    <li className="menu-item"><a onClick={toggleClass} href="#ourCar">Our Car</a></li>
                                    <li className="menu-item"><a onClick={toggleClass} href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
              </div>
          </header>
    )
}

export default Navbar 