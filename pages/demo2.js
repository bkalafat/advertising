import React, { useEffect } from 'react'
import BusinessTheme from '../components/businesstheme'

const Home = (props) => {

    useEffect(() => {
        document.body.style.setProperty('--primary', 'linear-gradient(to right, #f83600 0%, #f9d423 100%)')
    }, [])

    return (

        <div className="main-wrapper">
            <BusinessTheme
                ThemeClass="demo2"
            />
        </div>
    )
}

export default Home
