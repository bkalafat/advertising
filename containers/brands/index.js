import React from 'react';
import { Container } from 'reactstrap';
import Branddata from '../../data/brands/index';
import Image from '../../components/common/image/index';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './brands.scss';


function Brand() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
      <section className="brand-slider">
        <Container>
          <Slider {...settings}>
            {Branddata.map((data) => (
              <div className="brand-item" key={data.id}>
                <div className="brand-content">
                  <Image Path={data.img} />
                  <br />
                  <div className="text-brand">
                    <a
                      className="align-center"
                      href={`${data.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      <span>{data.desc}</span>
                    </a>
                  </div>

                  <p>{data.blerp}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    );
}

export default Brand;