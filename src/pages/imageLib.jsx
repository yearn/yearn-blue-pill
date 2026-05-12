import React from 'react';
import Layout from "../components/Layout";
import importImages from "./importImages";

const listOfImages = importImages(import.meta.glob('../images/all/*.{png,jpg,jpeg,svg}', { eager: true }));

const ImageLib = () => (
    <Layout>
        <section className={"align-center"}>
            {listOfImages.map((image, index) => <img className={"sml"} key={index} src={image} alt="info"/>)}
        </section>
    </Layout>
);

export default ImageLib;
