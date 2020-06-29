import React, { useContext } from "react";
import { PackageCarousel } from "./carousel/packageCarousel";
import { Button } from "./common/button";
import { ProductContext } from "../pages/oniContext";
import Fade from "react-reveal/Fade";

export const SelectPackage = () => {
    const productConsumer = useContext(ProductContext);

    return (
        <div>
            <div className="list-buttons">
                <Button
                    Class="button-rectangular btn button2 gradient-color"
                    Name={"Web App Packages"}
                    Clickble={() => productConsumer.handleActPackage("webPackages", false)}
                    iconFalse={true}
                    BtnIcon="btn-icon"
                    type="touchAction"
                >
                    Do Something
                </Button>{" "}
                <Button
                    Class="button-rectangular btn button2 gradient-color"
                    Name={"Mobile Application Packages"}
                    Clickble={() => productConsumer.handleActPackage("mobileAppPackages", false)}
                    iconFalse={true}
                    BtnIcon="btn-icon"
                    type="touchAction"
                >
                    Cancel
                </Button>
            </div>
            <div className="list-buttons">
                <Button
                    Class="button-rectangular btn button2 gradient-color"
                    Name={"Software Packages"}
                    Clickble={() => productConsumer.handleActPackage("softwareDevelopmentPackages", false)}
                    iconFalse={true}
                    BtnIcon="btn-icon"
                    type="touchAction"
                />
                <Button
                    Class="button-rectangular btn button2 gradient-color"
                    Name={"Marketing  Packages"}
                    Clickble={() => productConsumer.handleActPackage("seoMarketingPackages", false)}
                    iconFalse={true}
                    BtnIcon="btn-icon"
                    type="touchAction"
                />
            </div>
            <div>
                {productConsumer.activePackage.length > 0 && (
                    <Fade>
                        <PackageCarousel />
                    </Fade>
                )}
            </div>
        </div>
    );
};
