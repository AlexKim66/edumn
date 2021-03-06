import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageBanner pageTitle="Холбоо барих" />

      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Хаяг</h3>
                <p> СБД, 1-р хороо, олимпын 16-р байр 202 тоот </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Холбоо барих</h3>
                <p>
                  Утас: <a href="tel:+44457895789">(+976) - 7577 - 8080</a>
                </p>
                <p>
                  Имэйл: <a href="mailto:hello@mibix.com">info@edu.mn</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Цагийн хуваарь</h3>
                <p>Даваа - Баасан: 08:30 - 17:30</p>
                <p>Бямба & Ням: Амарна</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd"></iframe>
      </div>

    </div>
  );
};

export default Contact;
