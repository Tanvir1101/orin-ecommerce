import styles from "@/styles/Footer.module.css";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import {
  FaFacebook,
  FaSearch,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { GoHome, GoSearch } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
const Footer = () => {
  return (
    <>
      <div className="" style={{ background: "#232B35" }}>
        
        <div className="text-center p-5">
          <h3 className="text-white">Sign Up For Newsletter</h3>
          <p className="text-white">
            Sign up for all the news about our latest arrivals and get an
            exclusive early access shopping. Join 60.000+ Subscribers and get a
            new discount coupon on every Saturday.
          </p>
          <div className="input-group input-group-lg justify-content-center">
            <span
              className="input-group-text"
              id="inputGroup-sizing-lg"
              style={{
                background: "white",
                border: "none",
                borderRadius: "100px 0px 0px 100px",
              }}
            >
              <PiEnvelopeSimpleLight />
            </span>
            <input
              type="text"
              style={{ maxWidth: "500px" }}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
            <span
              className={`input-group-text px-5 ${styles.font14}`}
              id="inputGroup-sizing-lg"
              style={{
                background: "#FF7E00",
                border: "none",
                color: "white",
                borderRadius: "0px 100px 100px 0px",
              }}
            >
              Subscribe
            </span>
          </div>
        </div>

        <hr className="text-white" />

        <div>SIAM</div>
      </div>

      <div
        className="fixed-bottom d-lg-none muted"
        style={{
          background: "white",
          boxShadow: "0px 0px 5px 0px",
        }}
      >
        <nav className="navbar">
          <div className="container-fluid row text-center m-auto">
            <a
              className="navbar-toggler col py-0"
              style={{ border: "none" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar1"
              aria-controls="offcanvasNavbar1"
            >
              <CgMenuLeft style={{ fontSize: "22px" }} />
            </a>
            <a className="col">
              <GoSearch style={{ fontSize: "22px" }} />
            </a>
            <a className="col">
              <GoHome style={{ fontSize: "22px" }} />
            </a>
            <a className="col">
              <HiOutlineShoppingBag style={{ fontSize: "22px" }} />
            </a>
            <a className="col">
              <AiOutlineUser style={{ fontSize: "22px" }} />
            </a>

            <div
              className="offcanvas offcanvas-start px-0"
              tabIndex={-1}
              id="offcanvasNavbar1"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div
                className="offcanvas-header"
                style={{ background: "rgba(35,47,63)" }}
              >
                <picture
                  className="offcanvas-title p-2"
                  id="offcanvasNavbarLabel"
                >
                  <img src="/logo.webp" alt="logo" />
                </picture>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-start">
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle d-flex justify-content-between align-items-center ${styles.font16}`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className={`dropdown-menu ${styles.font16}`}
                      style={{ border: "none" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle d-flex justify-content-between align-items-center ${styles.font16}`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className={`dropdown-menu ${styles.font16}`}
                      style={{ border: "none" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle d-flex justify-content-between align-items-center ${styles.font16}`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className={`dropdown-menu ${styles.font16}`}
                      style={{ border: "none" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className={`nav-link ${styles.font16}`} href="#">
                      Beaf Steak
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle d-flex justify-content-between align-items-center ${styles.font16}`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className={`dropdown-menu ${styles.font16}`}
                      style={{ border: "none" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle d-flex justify-content-between align-items-center ${styles.font16}`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className={`dropdown-menu ${styles.font16}`}
                      style={{ border: "none" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BiMinus /> Action
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className={`nav-link ${styles.font16}`} href="#">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="m-0" />
              <div className="offcanvas-footer">
                <div className="d-flex justify-content-center align-items-center p-3">
                  <a href="#">
                    <FaFacebook
                      className="mx-2 text-muted"
                      style={{ fontSize: "22px" }}
                    />
                  </a>
                  <a href="#">
                    <FaTwitter
                      className="mx-2 text-muted"
                      style={{ fontSize: "22px" }}
                    />
                  </a>
                  <a href="#">
                    <FaYoutube
                      className="mx-2 text-muted"
                      style={{ fontSize: "22px" }}
                    />
                  </a>
                  <a href="#">
                    <FaInstagram
                      className="mx-2 text-muted"
                      style={{ fontSize: "22px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
