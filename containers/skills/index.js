import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Titlespan2, Title } from '../../components/common/title/index';
import Image from '../../components/common/image/index';
import Skills_img from '../../public/assets/images/skills/skills-img.png';
import Progressbar from './progressbar';
import './skills.scss';
import "../../public/assets/scss/variable.scss";


function Skills() {
    return (
        <section className="skills-wrapper" id="skills">
            <Container>
                <Row>
                    <Col md={6} sm={0}>
                        <div className="skills-image">
                            <Image Path={Skills_img} Class="logo-img" />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="skills-content-block main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name="We Lead From "
                                Label="The Front"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="What We Do"
                            />

                            <Description
                                Class="skills-dec"
                                Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text of the printing "
                            />
                            <div className="progress-outer-block">
                                <Title
                                    Class="progress-title"
                                    Name="Our Popular Services of (100 Jobs)"
                                />
                                <div className="progressbar-wrapper-block">
                                    <div className="progressbar-block">
                                        <Progressbar
                                            Class="progressbar1"
                                            Percenteg="55"
                                            ProgressTitle="Web/App Development"
                                            ProgressClass="progressbar-title"
                                        />
                                        <Progressbar
                                            Class="progressbar2"
                                            Percenteg="25"
                                            ProgressTitle="Automation"
                                            ProgressClass="progressbar-title"
                                        />
                                        <Progressbar
                                            Class="progressbar3"
                                            Percenteg="20"
                                            ProgressTitle="Marketing/SEO"
                                            ProgressClass="progressbar-title"
                                        />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
