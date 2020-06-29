import React from 'react';
import './themeoption.scss'

const ThemeOption = () => {
    return (
        <div id="framework-button">
            <a href="https://themeforest.net/item/react-gatsby-business-landing-page/25936943" target="_blank">
                <span><img src={'/assets/images/framework/gatsby.svg'} alt="gatsby" title="gatsby" /></span>
            </a>
            <a href="https://themeforest.net/item/busline-business-landing-page-html-rtl/25581077" target="_blank">
                <span><img src={'/assets/images/framework/html-5.svg'} alt="Html" title="Html" /></span>
            </a>
        </div>
    )
}

export default ThemeOption