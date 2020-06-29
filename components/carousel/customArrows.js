import React from "react";
import { Button } from "../../components/common/button";

export const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;

    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
};
