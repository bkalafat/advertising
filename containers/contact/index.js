import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Subtitle, Description, Title, Titlespan, phoneDescription } from "../../components/common/title/index";
import Image from "../../components/common/image/index";
import ContactImg from "../../public/assets/images/contact/contact-us-img.png";
import InputBox from "../../components/common/input/index";
import { Button } from "../../components/common/button";
import ContactBackgroundImages from "../../data/contact";
import "../contact/contact.scss";
import { ProductContext } from "../../pages/oniContext";
import { webAppPackages } from "../../data/business-services";

function Contact(props) {
    const productConsumer = useContext(ProductContext);

    useEffect(() => {
        console.log("ProductContext", productConsumer.messageSent);
        productConsumer.setValue("name", "Tyrique Daniel");
    }, []);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    // const { name, email } = productConsumer;

    // const handelSubmit2 = () => {
    //     const error = {}
    //     if (!name) {
    //         error.name = 'First Name field shouldn’t be empty';
    //     }
    //     if (!email) {
    //         error.email = 'Email field shouldn’t be empty';
    //     }
    //     if (!message) {
    //         error.message = 'Message field shouldn’t be empty';
    //     }

    //     if (error) {
    //         setErrors(error)
    //     } else {
    //         setName('');
    //         setEmail('');
    //         setMessage('');
    //     }
    // }

    return (
        <section className="contact-wrapper" id="contact">
            <div className="contact-animation-images">
                {ContactBackgroundImages.map((img, index) => (
                    <span key={`contact-img-${index}`} className={`image${index + 1}`}>
                        <Image Path={img.img} />
                    </span>
                ))}
            </div>
            <Container>
                <Row>
                    <Col sm={0} md={6}>
                        <div className="contact-image">
                            <Image Path={ContactImg} Class="logo-img" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-content-block main-title-wrapper">
                            <Subtitle Class="sitemain-subtitle" Name="Send us mesage for any Info" />
                            <Subtitle Class="site-subtitle2" Name="Call us for a free consultation" />
                            <Description Class="contact-dec" Name="+1 305 - 204 - 7863" Num="3052047863" />
                            <div className="form">
                                <Form method="POST">
                                    <FormGroup>
                                        <Title Class="form-label" Name="Name *" />
                                        <InputBox
                                            Type="text"
                                            Name="name"
                                            handlechange={productConsumer.setValue}
                                            PlaceHolder="John Doe"
                                            Value={productConsumer.name}
                                            ChangeValue={productConsumer.setValue}
                                            Class={productConsumer.errors && productConsumer.errors.name && "error"}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Number *" />
                                        <InputBox
                                            Type="text"
                                            Name="number"
                                            handlechange={productConsumer.setValue}
                                            PlaceHolder="000-000-0000"
                                            Value={productConsumer.number}
                                            ChangeValue={productConsumer.setValue}
                                            Class={productConsumer.errors && productConsumer.errors.name && "error"}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Email *" />
                                        <InputBox
                                            Type="text"
                                            Name="email"
                                            PlaceHolder="example@gmail.com"
                                            Value={productConsumer.email}
                                            ChangeValue={productConsumer.setValue}
                                            Class={productConsumer.errors && productConsumer.errors.email && "error"}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Message *" />
                                        <InputBox
                                            Type="textarea"
                                            Name="message"
                                            PlaceHolder="Tell us more about your business"
                                            Class={`textbox ${productConsumer.errors && productConsumer.errors.message && "error"}`}
                                            Value={productConsumer.message}
                                            ChangeValue={productConsumer.setValue}
                                        />
                                    </FormGroup>
                                </Form>
                            </div>

                            {!productConsumer.moreInfoNeeded ? (
                                <Button
                                    Class="button1 btn button2 gradient-color"
                                    Name={!productConsumer.messageSent ? "SUBMIT" : "SENT"}
                                    Clickble={productConsumer.handleSubmit}
                                    send={productConsumer.messageSent}
                                    BtnIcon="btn-icon"
                                    type="contact"
                                />
                            ) : (
                                <Button
                                    Class="button1 btn button2 gradient-color"
                                    Name={"Tell Us More"}
                                    Clickble={productConsumer.handleModal}
                                    moreInfo={productConsumer.moreInfoNeeded}
                                    BtnIcon="btn-icon"
                                    type="contact"
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

// webAppPackages.map((service, index) => (
//                 <span
//                   key={`contact-img-${index}`}
//                   className={`image${index + 1}`}
//                 >
//                  {service.title}
//                 </span>
//               ))}
export default Contact;
