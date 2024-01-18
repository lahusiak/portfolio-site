function NavLinks({setNavOpen, id}) {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        
        let targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetElement.focus();
            setNavOpen(false);
        }

    }
    return (
        <ul id={id} className="nav__links">
            <li key="about">
                <a className="nav__links-link" href="#about" onClick={(e) => handleClick(e, '#about')}>About</a>
            </li>
            <li key="experience">
                <a className="nav__links-link" href="#experience" onClick={(e) => handleClick(e, '#experience')}>Experience</a>
            </li>
            <li>
                <a className="nav__links-link" href="#projects" onClick={(e) => handleClick(e, '#projects')}>Projects</a>
            </li>
        </ul>
    )
}

export default NavLinks;