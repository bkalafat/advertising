import React, { useEffect } from 'react'
import BusinessTheme from '../components/businesstheme'

const Home = () => {
    useEffect(() => {
        document.body.style.setProperty('--primary', 'linear-gradient(to right, #184e68 0%, #57ca85 100%)')
    }, [])

    return (

        <div className="main-wrapper">
            <BusinessTheme
                ThemeClass="demo3"
            />
        </div>
    )
}

export default Home
