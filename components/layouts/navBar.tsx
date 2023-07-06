import styles from "@/styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        className=""
        style={{ background: "rgba(35,47,63)", color: "white" }}
      >
        <div className={`d-flex mx-3 py-2 ${styles.font13}`}>
          <div className="p-2 flex-grow-1 d-none d-md-block d-lg-block">
            <FontAwesomeIcon icon={faLocationDot} /> Stote Location: 1234 Heaven
            Stress, Beverly Hill, Melbourne, USA.
          </div>
          <div className="p-2">Wishlist</div>
          <div className="p-2">Checkout</div>
          <div className="p-2">Gift Certificates</div>
        </div>
        <hr className="m-0" />
        <div className="py-lg-3 py-md-2 py-sm-1">
          <nav className="navbar">
            <div className="container-fluid mx-3">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">
                <picture>
                  <img src="/logo.webp" alt="logo" />
                </picture>
              </a>

              <div className="d-flex align-items-center d-none d-lg-flex">
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ fontSize: "40px", color: "#ff9300" }}
                />
                <div className={`ms-2 ${styles.font14}`}>
                  <p className="mb-0">Hotline Free:</p>
                  <p className="mb-0 fw-bold">(1800)-000-6890</p>
                </div>
              </div>

              <div
                className="input-group input-group-lg rounded-pill d-none d-lg-flex "
                style={{ maxWidth: "500px" }}
              >
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
              <div className="d-none d-lg-flex">
                <FontAwesomeIcon
                  className="me-3"
                  icon={faUser}
                  style={{ fontSize: "25px" }}
                />
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ fontSize: "25px" }}
                />
              </div>

              <div className="d-block d-lg-none"></div>

              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasNavbar"
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
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Accessories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Beaf Steak
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Vitamin Items
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Raw Chicken mdeo
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Breakfast Item
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Fish Items
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Green Vegetables
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
      </div>

      <nav className="navbar navbar-expand-lg d-none d-lg-block">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav me-auto p-2 mb-2 mb-lg-0 fw-bold ${styles.font14}`}
            >
              <li className="nav-item dropdown ps-2 me-5 pe-5">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <HiOutlineMenu style={{ fontSize: "24px", color: "black" }} />
                  <span className="ms-2 text-dark">ALL CATEGORIES</span>
                </a>
                <ul className={`dropdown-menu w-100 ${styles.font14}`}>
                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Audio Music
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Phones & Tablet
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Fashion & Clothing
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Garden & Kitchen
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      TV & Video
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Beauty & Health
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Jewelry & Watches
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Top 10 Offes
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Accessories
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Beaf Steak
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Vitamin Items
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Raw Chicken mdeo
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Breakfast Item
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Fish Items
                    </a>
                    <AiOutlineRight />
                  </li>

                  <li className="px-3">
                    <hr className="m-0" />
                  </li>

                  <li className="d-flex align-items-center p-2">
                    <a className="dropdown-item" href="#">
                      Green Vegetables
                    </a>
                    <AiOutlineRight />
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown1 me-4">
                <a
                  className="nav-link dropdown-toggle1"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown1"
                  aria-expanded="false"
                >
                  DEMOS
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown1 me-4">
                <a
                  className="nav-link dropdown-toggle1"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown1"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown1 me-4">
                <a
                  className="nav-link dropdown-toggle1"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown1"
                  aria-expanded="false"
                >
                  MEGA MENU
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item me-4">
                <a className="nav-link cus_nav_link" href="#">
                  VENDORS
                </a>
              </li>


              <li className="nav-item dropdown1 me-4">
                <a
                  className="nav-link dropdown-toggle1"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown1"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown1 me-4">
                <a
                  className="nav-link dropdown-toggle1"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown1"
                  aria-expanded="false"
                >
                  MEGA MENU
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item me-4">
                <a className="nav-link cus_nav_link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
