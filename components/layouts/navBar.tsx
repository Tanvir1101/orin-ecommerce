import styles from "@/styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
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
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
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
                  </ul>
                  <form className="d-flex mt-3" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
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
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
