import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Button} from '../../components/common/button';
import { Titlespan, Description } from '../../components/common/title/index';
import Image from '../../components/common/image/index';
import BannerImg1 from '../../public/assets/images/banner/bannerimg2.png';
import BannerImg from '../../public/assets/images/banner/bg.png';
import BannerBackgroundImages from '../../data/bannerimages';
import Shape2 from '../../public/assets/images/banner/bg-wave.svg';
import Shape3 from '../../public/assets/images/banner/wave.png';
import './banner.scss';


function Banner(props) {
    return (
        <section className={`banner-wrapper ${props.ChangeClass}`} id="home">
            <div className="banner-outer">
                <div className="slider-animation-images">
                    {BannerBackgroundImages.map((img, index) => (
                        <span className={`image${index + 1}`} key={`banner-${index}`} ><Image Path={img.img} /></span>
                    ))}
                </div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="banner-content">
                                <Titlespan
                                    Class="banner-main-title"
                                    Label="WE ARE"
                                    Name="A CREATIVE Software AGENCY"
                                />
                                <Description
                                    Class="banner-dec"
                                    Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                                />
                                <div className="banner-btn-wrapper">
                                    <Button
                                        Class="button1 button3 btn"
                                        Name="LEARN MORE"
                                    />
                                    <Button
                                        Class="button1 button4 btn"
                                        Name="GET STARTED"
                                        Title="gradient-color"
                                        BtnIcon="btn-icon gradient-color1"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="banner-image">
                                <Image
                                    Path={BannerImg1}
                                    Class="banner-img"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>

                {(props.ChangeClass === 'demo2' || props.ChangeClass === 'demo3') &&
                    <div className="bottom-img">
                        {props.ChangeClass === 'demo2' ?
                            <Image Path={Shape2} /> :
                            <Image Path={Shape3} />
                        }
                    </div>
                }
            </div>
        </section>
    );
}

export default Banner;
