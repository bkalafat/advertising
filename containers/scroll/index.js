import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './scroll.scss'

export default function Scroll() {

    const [showClass, setshowClass] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                let scoll = null;
                if (window.scrollY < 250) {
                    scoll = false;
                } else {
                    scoll = true;
                }
                setshowClass(scoll);
            });
        }
    }, [])

    const scrollTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    return (
        <div className="scroll-to-top">
            <div id="bottom-to-top" onClick={() => scrollTop()} title="Back to top" className={showClass ? 'show' : ''}>
                <div className="scroll-icon-link gradient-color">
                    <FontAwesomeIcon icon={faCaretUp} />
                </div>
            </div>
        </div>
    )
}

