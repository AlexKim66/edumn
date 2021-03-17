import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="about-area pb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <img src="assets/web/images/about-img2.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="text">
                <span className="sub-title">Системийн тухай</span>
                <h2>Боловсролын салбарын мэдээллийн систем </h2>
                <p>
                  Боловсролын салбарын үйл ажиллагааг цахимжуулах, мэдээллийн
                  нэгдсэн сан бүрдүүлэх, иргэдэд мэдээллээр түргэн шуурхай
                  үйлчлэх зорилгоор боловсролын удирдлага мэдээллийн системийг
                  2013 оноос үе шаттайгаар хөгжүүлж, түүнийг 2015 оноос ерөнхий
                  боловсролд, 2018 оноос сургуулийн өмнөх боловсролд, 2019 оноос
                  дээд боловсролын салбарт тус тус нэвтрүүлээд байна.
                </p>

                <ul className="funfacts-list">
                  <li>
                    <div className="list">
                      <i className="flaticon-menu-1"></i>
                      <h3 style={{ fontSize: "36px", lineHeight: "46px" }}>
                        2,470
                      </h3>
                      <p>Байгууллага</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <i className="flaticon-conversation"></i>
                      <h3 style={{ fontSize: "36px", lineHeight: "46px" }}>
                        97,136
                      </h3>
                      <p>Багш, ажилтан</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <i className="flaticon-web-settings"></i>
                      <h3 style={{ fontSize: "36px", lineHeight: "46px" }}>
                        1,078,585
                      </h3>
                      <p>Суралцагч</p>
                    </div>
                  </li>
                </ul>

                <Link href="/system">
                  <a className="default-btn">Дэлгэрэнгүй</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
