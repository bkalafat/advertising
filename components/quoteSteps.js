import React, { useContext } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { ProductContext } from "../pages/oniContext";

export const QuoteSteps = () => {
    const pCR = useContext(ProductContext);
    return (
        <div>
            <Progress percent={pCR.progress} status="success" />
        </div>
    );
};
