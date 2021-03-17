import React, { useState } from "react";
import {Router, Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
    const activeName = useLocation().pathname;
    console.log(activeName);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div
        id="navbar"
        className={ "navbar-area " + (activeName != "/" ? "navbar-color-white" : "")}
      >
        <div className="main-nav">
          <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand" style={{ height: "65px" }}>
                  <img
                    src={
                      activeName != "/"
                        ? "https://cdn.esis.edu.mn/logo/bmtt.png"
                        : "https://cdn.esis.edu.mn/logo/bmtt1.png"
                    }
                    alt="logo"
                    style={{ height: "100%" }}
                  />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className={"nav-link " + (activeName == "/" ? "active" : "")}>
                        Нүүр
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/bmtt"  className={"nav-link " + (activeName == "/bmtt" ? "active" : "")}>
                        БМТТ
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/network" className={ "nav-link " + (activeName == "/network" ? "active" : "")}>
                        Сүлжээ
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/system" className={ "nav-link " + (activeName == "/system" ? "active" : "")}>
                      Систем
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/service" className={ "nav-link " + (activeName == "/service" ? "active" : "") }>
                      Үйлчилгээ
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/news" className={ "nav-link " + (activeName == "/news" ? "active" : "")}>
                        Мэдээ
                    </Link>
                  </li>

                  <li className="nav-item">
                      <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" className={"nav-link"} >
                        Шилэн данс
                    </Link>

                  </li>

                  <li className="nav-item">
                    <Link to="/contact"  className={ "nav-link " + (activeName == "/contact" ? "active" : "") }>
                        Холбоо барих
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option d-flex align-items-center">
                {/* <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div> */}

                <div className="option-item">
                  <div
                    className="side-menu-btn"
                    onClick={handleToggleSidebarModal}
                  >
                    <i className="flaticon-menu"></i>
                  </div>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="bx bx-x"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link to="/" className="d-inline-block" style={{ padding: "0 50px" }}>
                    <img
                      src="https://cdn.esis.edu.mn/logo/bmtt1.png"
                      alt="image"
                    />
                </Link>
              </div>

              <div className="sidebar-contact-info">
                <p style={{ marginBottom: "100px" }}>
                  {" "}
                  Улаанбаатар хот, Сүхбаатар дүүрэг, 1 дүгээр хороо Юнескогийн
                  гудамж 16-р байрны 2 дугаар давхрын 202 тоот
                </p>
                <h2>
                  <a href="tel:+11234567890">(+976)-7577-8080</a>
                  <span></span>
                  <a href="mailto:hello@mibix.com">info@edu.mn</a>
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Сошиал:</span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/esis.edu.mn"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCtFHcwK83Iha9qmHr6Xm1HQ"
                    target="_blank"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </React.Fragment>
  );
};

export default Navbar;
