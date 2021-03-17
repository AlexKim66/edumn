import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import SystemContent from "./systemContent";
import OurHistory from "../components/AboutUs/OurHistory";
import OurTeamStyleTwo from "../components/Common/OurTeamStyleTwo";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/_App/Footer";

const AboutUsSystem = () => {
  return (
    <div>
      <PageBanner pageTitle="Мэдээллийн систем" />
      <SystemContent />
    </div>
  );
};

export default AboutUsSystem;
