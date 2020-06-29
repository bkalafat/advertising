import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ProductContext } from "../../pages/oniContext";
import { webAppPackages } from "../../data/business-services";
import { CardComp } from "../cards/card";
import { PackageCarousel } from "../carousel/packageCarousel";
import "./modal.scss";
import { Button } from "../../components/common/button";
import { PrevButton } from "../common/button/prevButton";

import { SelectPackage } from "../selectPackage";
import Fade from "react-reveal/Fade";
import { QuoteSteps } from "../quoteSteps";
const ModalExample = (props) => {
    const productConsumer = useContext(ProductContext);
    const [packageShowing, setpackageShowing] = useState([]);
    useEffect(() => {
        console.log(productConsumer.isModalOpen, "Modal");
    }, [productConsumer.activePackage]);
    const { buttonLabel, className } = props;

    let handlePackageModal = (packageName) => {};

    return (
        <div>
            <Button color="danger" onClick={productConsumer.handleModal}>
                {buttonLabel}
            </Button>
            <Modal isOpen={productConsumer.isModalOpen} toggle={productConsumer.handleModal} className="modal_div">
                <ModalHeader toggle={productConsumer.handleModal}>Choose a package</ModalHeader>
                <ModalBody>
                    <SelectPackage />
                    <QuoteSteps />
                </ModalBody>

                <ModalFooter>
                    <div style={{ "margin-right": "7em" }}>
                        <PrevButton
                            Class="button1 btn button2 gradient-color btn-icon-left"
                            Name={"Previous"}
                            Clickble={productConsumer.handleSubmit}
                            BtnIcon="btn-icon"
                            type="navigation"
                        />
                    </div>
                    <div>
                        <Button
                            Class="button1 btn button2 gradient-color"
                            Name={!productConsumer.messageSent ? "SUBMIT" : "SENT"}
                            Clickble={productConsumer.handleSubmit}
                            send={productConsumer.messageSent}
                            BtnIcon="btn-icon"
                            type="contact"
                            onClick={productConsumer.handleModal}
                        />
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalExample;
