import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <Link href="/#">
                <a className="logo" style={{ height: "65px" }}>
                  <img
                    src="https://cdn.esis.edu.mn/logo/bmtt.png"
                    alt="logo"
                    style={{ height: "100%" }}
                  />
                </a>
              </Link>
              <p>
                Боловсролын салбарын мэдээллийн систем, сургалтын цахим контент,
                удирдлагын систем, мэдээллийн сан, мэдээллийн нэгдсэн сүлжээ
                болон боловсролын дата төвийн хяналт, тогтвортой ажиллагааг
                хангах, хөгжлийн асуудлыг цогцоор нь авч хэрэгжүүлэхэд
                байгууллагын эрхэм зорилго оршино.
              </p>
              <ul className="social-link">
                <li>
                  <a
                    href="https://www.facebook.com/esis.edu.mn"
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCtFHcwK83Iha9qmHr6Xm1HQ"
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-block" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Холбоосууд</h3>

              <ul className="footer-links-list">
                <li>
                  <Link href="/#">
                    <a>Нүүр</a>
                  </Link>
                </li>
                <li>
                  <Link href="/bmtt">
                    <a>БМТТ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/network">
                    <a>Сүлжээ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/system">
                    <a>Систем</a>
                  </Link>
                </li>
                <li>
                  <Link href="/service">
                    <a>Үйлчилгээ</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/news">
                    <a>Мэдээ</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="">
                    <a
                      href="https://www.shilendans.gov.mn/org/14941"
                      target="_blank"
                    >
                      Шилэн данс
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Холбоо барих</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Хаяг</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  Улаанбаатар хот, Сүхбаатар дүүрэг, 1 дүгээр хороо Юнескогийн
                  гудамж 16-р байрны 2 дугаар давхрын 202 тоот
                </li>
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+11234567890">(+976) - 7577 - 8080</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:hello@mibix.com">info@edu.mn</a>
                </li>
                {/* <li>
                  <i className="bx bxs-inbox"></i>
                  <a href="tel:+557854578964">+55 785 4578964</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i>
                {currentYear} БОЛОВСРОЛЫН МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ТӨВ{" "}
                <a href="#"></a>
              </p>
            </div>

            {/* <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="shape16">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
    </footer>
  );
};

export default Footer;
