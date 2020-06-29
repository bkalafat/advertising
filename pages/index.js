import Head from "next/head";
import React from "react";
import BusinessTheme from "../components/businesstheme";
import { ProductProvider } from "../pages/oniContext";

const Home = () => {
    return (
        <ProductProvider>
            <div className="main-wrapper">
                <BusinessTheme ThemeClass="demo1" />
            </div>
        </ProductProvider>
    );
};

export default Home;
