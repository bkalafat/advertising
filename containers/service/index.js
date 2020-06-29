import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/common/title/index';
import {rectButton} from '../../components/common/button';
import { Servicedata, Servicedata1 } from '../../data/service/index';
import FontAwesomeIcon from '../../components/common/icon';
import '../service/service.scss';

function Service() {
    return (
        <section className="service-wrapper" id="service">
            <Container>
                <Row>
                    <Col lg={5} md={4}>
                        <div className="service-content-1 main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name="Technological"
                                Label="Solutions"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="We Provide "
                            />
                            <Title
                                Class="service-title"
                                Name="Our core features"
                            />
                            <Description
                                Class="service-dec"
                                Name="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot."
                            />
                            <rectButton
                                Class="button1 btn button2 gradient-color"
                                Name="Get a free quote"
                                BtnIcon="btn-icon"
                                href="get-quote"
                            />
                        </div>
                    </Col>
                    <Col lg={7} md={8} className="service-block-content">
                        <Row>
                            <Col sm={6} className="service-block1">
                                {Servicedata.map((data, i) => (
                                    <div className={`service-${i} service-content`} key={data.id}>
                                        <div className="service-icon">
                                            <span><FontAwesomeIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="service-content-dec">
                                            <Title Class="service-title" Name={data.title} />
                                            <Description Class="service-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            <Col sm={6} className="service-block2">
                                {Servicedata1.map((data, i) => (
                                    <div className={`service-${i} service-content`} key={data.id}>
                                        <div className="service-icon">
                                            <span><FontAwesomeIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="service-content-dec">
                                            <Title Class="service-title" Name={data.title} />
                                            <Description Class="service-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Service;
