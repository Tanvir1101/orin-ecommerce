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
const Footer = () => {
  return (
    <>
      <div
        className="fixed-bottom d-lg-none muted"
        style={{
          background: "white",
          boxShadow: "0px 0px 5px 0px",
        }}
      >
          <nav className="navbar">
            <div className="container-fluid row text-center m-auto" >
              <a
                className="navbar-toggler col py-0"
                style={{ border: "none"}}
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <CgMenuLeft style={{fontSize: '22px'}}/>
              </a>
              <a className="col">
                <GoSearch style={{fontSize: '22px'}}/>
              </a>
              <a className="col">
                <GoHome style={{fontSize: '22px'}}/>
              </a>
              <a className="col">
                <HiOutlineShoppingBag style={{fontSize: '22px'}}/>
              </a>
              <a className="col">
                <AiOutlineUser style={{fontSize: '22px'}}/>
              </a>
            </div>
          </nav>
      </div>
    </>
  );
};

export default Footer;
