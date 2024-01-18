import "./header.css";
import NavLinks from "../nav/navLinks";
import {useEffect, useState} from 'react';

function Header () {
    const [ navOpen, setNavOpen ] = useState(false);

    function handleKeyDown(event) {
        const mobileSubmenu = document.getElementById('mobileNavSubmenu');
        const submenuItems = mobileSubmenu.querySelectorAll('.nav__links-link');
        const navButton = document.getElementById('navButton');
        const firstItem = submenuItems[0];
        const lastItem = submenuItems[submenuItems.length - 1];

        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            if (document.activeElement === lastItem) {
                firstItem.focus();
            } else if (document.activeElement === navButton && navOpen) {
                firstItem.focus()
            } else {
              const currentIndex = Array.from(submenuItems).indexOf(document.activeElement);
              submenuItems[currentIndex + 1].focus();
            }
            break;
          case 'ArrowUp':
            if (document.activeElement !== navButton) {
                event.preventDefault();
                if (document.activeElement === firstItem) {
                lastItem.focus();
                } else {
                const currentIndex = Array.from(submenuItems).indexOf(document.activeElement);
                submenuItems[currentIndex - 1].focus();
                } 
            } 
            break;
          case 'Tab':
            if (event.shiftKey) {
                if (document.activeElement === firstItem) {
                    //Close submenu if focus is moved away
                    mobileSubmenu.classList.remove('open');
                }
            }
            if (!event.shiftKey) {
                if (document.activeElement === lastItem) {
                    //Close submenu if focus is moved away
                    mobileSubmenu.classList.remove('open');
                }
            }
            break;
          case 'Escape':
            // Close the submenu
            mobileSubmenu.classList.remove('open');
            navButton.focus();

            break;
          default:
            break;
        }
      }
      
    useEffect(() => {
        // Add event listeners
        const navButton = document.getElementById('navButton');
        const navLinks = document.getElementById('mobileNavSubmenu');

        navButton.addEventListener('keydown', handleKeyDown);
        navLinks.addEventListener('keydown', handleKeyDown);
      
        // Clean up event listeners
        return () => {
          navButton.removeEventListener('keydown', handleKeyDown);
          navLinks.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    
    function toggleNav () {
        setNavOpen(!navOpen);
    }


    return (
        <>
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Laryssa Husiak</h1>
                <div className="header__tagline">
                    <p className="header__tagline--title">Accessibility Specialist & Senior Frontend Engineer</p>
                    <p className="header__tagline--desc">tag line</p>
                </div>
                <button 
                    id="navButton"
                    className="header__navBtn" 
                    aria-label="Opens navigation menu"
                    aria-expanded={navOpen}
                    aria-haspopup="true"
                    aria-controls="mobileNavSubmenu"
                    onClick={toggleNav}
                >
                    <svg aria-hidden="true" title="navigation menu" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32">
                        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                    </svg>
                </button>
                <div className="nav__submenu--desktop">
                    <NavLinks id="navLinksDesktop" setNavOpen={setNavOpen} />
                </div>
            </div>
            <div id="mobileNavSubmenu" className={`nav__submenu--mobile ${navOpen ? 'open' : ''}`}>
                <NavLinks id="navLinksMobile" setNavOpen={setNavOpen}/>
            </div>
        </header>
        
    </>
    )
}

export default Header;