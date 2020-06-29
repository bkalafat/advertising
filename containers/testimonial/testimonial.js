import React from 'react';
import Testimonialdata from '../../data/testimonial/index';
import { Description, Title } from '../../components/common/title/index';
import Image from '../../components/common/image/index';
import LeftImg from '../../public/assets/images/testimonial/left-box.png';
import RightImg from '../../public/assets/images/testimonial/right-box.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.scss";

function CarouselSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="testimonial-slider ">
            <div className="testimonial-outer-box">
                <Slider {...settings}>
                    {Testimonialdata ? Testimonialdata.map((data, index) => (
                        <div className="testimonial-item" key={index}>
                            <div className="testimonial-content">
                                <div className="animated-bg">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <Description
                                    Class="testimonial-dec"
                                    Name={data.content}
                                />
                                <Title
                                    Class="testimonial-title"
                                    Name={data.title}
                                />
                                <Title
                                    Class="testimonial-subtitle"
                                    Name={data.subtitle}
                                />
                                <div className="testimonial-images">
                                    <Image Path={data.img} />
                                </div>

                            </div>
                        </div>
                    )) : ''}
                </Slider>
            </div>
            <style jsx>{
                `.testimonial-content:before,
                .testimonial-content:after {
                    content: '';
                    position: absolute;
                    width: 36px;
                    height: 25px;
                }
                .testimonial-content:before {
                    left: 15px;
                    top: 15px;
                    background: url(${LeftImg}) no-repeat 0;
                }
                .testimonial-content:after {
                    right: 15px;
                    bottom: 15px;
                    background: url(${RightImg}) no-repeat 0;
                }`
            }</style>
        </div>
    );
}

export default CarouselSlider;