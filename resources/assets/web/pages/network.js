import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NetworkContent from "./networkContent";
import OurHistory from "../components/AboutUs/OurHistory";
import OurTeamStyleTwo from "../components/Common/OurTeamStyleTwo";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/_App/Footer";

const AboutUsNetwork = () => {
  return (
    <div>
      <PageBanner pageTitle="Мэдээллийн сүлжээ" />
      <NetworkContent />
    </div>
  );
};

export default AboutUsNetwork;
