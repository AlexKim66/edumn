import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BmttContent from "./bmttContent";
import OurHistory from "../components/AboutUs/OurHistory";
import OurTeamStyleTwo from "../components/Common/OurTeamStyleTwo";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import Partner from "../components/Common/Partner";
import Footer from "../components/_App/Footer";

const AboutUsBMTT = () => {
  return (
    <div>
      <PageBanner pageTitle="Бидний тухай" />

      <BmttContent />

      <OurHistory />

    </div>
  );
};

export default AboutUsBMTT;
