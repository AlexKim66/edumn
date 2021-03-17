import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceContent from "./serviceContent";
import OurHistory from "../components/AboutUs/OurHistory";
import OurTeamStyleTwo from "../components/Common/OurTeamStyleTwo";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/_App/Footer";

const Service = () => {
  return (
    <div>
      <PageBanner pageTitle="Цахим үйлчилгээ" />
      <ServiceContent />
    </div>
  );
};

export default Service;
