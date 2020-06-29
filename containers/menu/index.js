import React, { useState } from 'react';
import Menudata from '../../data/menu/index';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FontAwesomeIcon from '../../components/common/icon';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import './menu.scss';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [activeClass, setactiveClass] = useState(false);
    const [active, setActive] = useState();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                let scoll = null
                if (window.scrollY === 0) {
                    scoll = false
                } else {
                    scoll = true
                }
                setactiveClass(scoll)
            });
        }

        const ScrollMenu = [];
        Menudata.map((data, i) =>
            ScrollMenu.push(data.href.slice(1))
        )

    }, [])

    const activeLink = (link) => {
        toggle()
        setActive(link)
        return 60;
    }

    return (

        <nav className="navbar navbar-wrapper menu-wrapper">
            <div className="sidebar-toggle">
                <button className="menu-btn navbar-toggler" type="button" id="navbar-menu-btn" onClick={toggle}>
                    <span className="btn-block"></span><p className="title">Menu</p>
                </button>
            </div>
            <div className={isOpen ? 'open' : ''} id="sidebar">
                <div className="sidebar-overlay"></div>
                <div className="sidebar-wrapper">
                    <div className="slidebar-title-wrapper">
                        <div className="slidebar-title">
                            <div id="slidebar-close-btn" onClick={toggle}><span><FontAwesomeIcon icon={faLongArrowAltLeft} /></span></div>
                        </div>
                    </div>
                    <div className="navbar-link-wrapper">
                        <ul className="navbar-nav navbar-menu-frist" id="menu-navbar">
                            {Menudata.map((file, index) => (
                                <li key={index} className={`nav-item-box ${active === file.href ? 'is-active' : ''}`}>
                                    <AnchorLink offset={() => activeLink(file.href)} href={file.href}><span>{file.title}</span></AnchorLink ></li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div >
        </nav >
    );
}

export default Menu;
