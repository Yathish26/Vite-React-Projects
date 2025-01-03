import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Metadata() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Hire Arrive</title>
                    <meta
                        name="description"
                        content="Hire Arrive connects you with trusted local service providers, offering solutions for various needs such as home repairs, cleaning, and more. Our platform makes it easy to find, book, and communicate with skilled professionals tailored to your requirements, ensuring quality service and customer satisfaction." />
                </Helmet>
            </HelmetProvider>
        </>)
}