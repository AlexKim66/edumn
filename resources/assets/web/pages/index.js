import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import AboutUsNetwork from "./network";
import Bmtt from "./bmtt";
import Home from "./home";
import System from "./system";
import Service from "./service";
import News from "./news";
import Contact from "./contact";
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import BmttContent from "./bmttContent";

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/bmtt">
                        <Bmtt/>
                    </Route>
                    <Route path="/network">
                        <AboutUsNetwork/>
                    </Route>
                    <Route path="/system">
                        <System/>
                    </Route>
                    <Route path="/service">
                        <Service/>
                    </Route>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
                {/*<MainBanner />*/}
                {/*<AboutSection />*/}
                {/*<ServicesCard />*/}
                {/*<WhatWeDo />*/}
                <Footer/>
            </Router>
        </React.Fragment>
    );
};

export default App;
