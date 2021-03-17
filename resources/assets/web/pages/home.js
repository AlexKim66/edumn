import React from "react";
import MainBanner from "../components/HomeDemoSix/MainBanner";
import AboutSection from "../components/HomeDemoSix/AboutSection";
import ServicesCard from "../components/Common/ServicesCard";
import WhatWeDo from "../components/Common/WhatWeDo";

const Home = () => {
    return (
        <div>
            <MainBanner />
            <AboutSection />
            <ServicesCard />
            <WhatWeDo />
        </div>
    );
};

export default Home;
