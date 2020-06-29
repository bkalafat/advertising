import React, { useEffect, useState, useContext } from "react";
import { Card, CardText, CardTitle, Col, Row, CardImg, CardBody, Badge } from "reactstrap";
import "./card.scss";
import Loader from "react-loader-spinner";
import { ProductContext } from "../../pages/oniContext";

const domLoaded = require("dom-loaded");

//p = props
export const CardComp = (props) => {
    const productConsumer = useContext(ProductContext);
    const [loading, setloading] = useState(true);
    const [imageloading, setimageloading] = useState(true);
    const handleImages = (imageName) => {
        packageImages.map((image, index) => {
            let packageTitle = p.title.toLowerCase();
            if (packageTitle.includes(image.uID)) {
                return image.src;
            } else {
                console.log(p.title, image.uID);
            }
            switch (imageName) {
                case value:
                    break;

                default:
                    break;
            }
        });
    };
    useEffect(() => {
        (async () => {
            await domLoaded;
            setloading(false);
        })();
    }, [loading]);
    const p = props;

    if (!loading) {
        return (
            <Card>
                <CardImg
                    top
                    onLoad={() => {
                        setimageloading(false);
                    }}
                    width="100%"
                    src={p.image}
                    alt="Card image cap"
                    className={!imageloading ? "" : "display-none"}
                />
                {imageloading && (
                    <div className="image-loader">
                        {" "}
                        <Loader type="Triangle" color="#e100ff " height={50} width={50} timeout={99000} />
                    </div>
                )}
                <CardBody className="text-center">
                    <CardTitle>{p.title}</CardTitle>
                    <CardText>
                        {p.text}
                        <br />
                        <div className="text-center">
                            {p.addOns.map((addOn) => (
                                <Badge className="badge" color="primary" pill>
                                    {addOn}
                                </Badge>
                            ))}
                        </div>
                        <button onClick={() => productConsumer.handleFinalPackage(p.package)}> click me </button>
                    </CardText>{" "}
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div className="theme-loader">
                <Loader type="Triangle" color="#e100ff " height={50} width={50} timeout={3000} />
            </div>
        );
    }
};
