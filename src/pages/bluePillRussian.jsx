import React from 'react';
import Layout from "../components/Layout";
import importImages from "./importImages";

const listOfImages = importImages(import.meta.glob('../images/blue-pill/ru/*.{png,jpg,jpeg,svg}', { eager: true }));

const BluePillRussian = () => (
    <Layout>
        <section className={"align-center"}>
            {listOfImages.map((image, index) => <img key={index} src={image} alt="info"/>)}
        </section>
    </Layout>
);

export default BluePillRussian;
