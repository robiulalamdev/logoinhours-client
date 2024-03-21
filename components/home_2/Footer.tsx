import useViewImage from "@/lib/hooks/useViewImage";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const { globalData } = useSelector((state: any) => state.global);
  const { viewImg } = useViewImage();
  return (
    <footer className="footer-2">
      <div className="footer-2__top section--sm">
        <div className="container">
          <div className="row g-4 justify-content-xl-between">
            <div className="col-md-6 col-xl-5">
              <Link href="/" className="logo mb-6">
                <img
                  src={viewImg(globalData?.logo)}
                  alt="image"
                  className="logo__img"
                  style={{ objectFit: "contain", width: "60px" }}
                />
              </Link>
              <p className="clr-light t-short-para">
                {" "}
                We handle factors IT Consulting & Technology boosts business
                success. We Offer a Wide Range of Technological Services.{" "}
              </p>
            </div>
            <div className="col-md-6 col-xl-5">
              <h5 className="clr-light mb-5"> Subscribe to our newsletter </h5>
              <div className="newsletter-1 flex-sm-row flex-md-column flex-lg-row align-items-start align-items-sm-center align-items-md-start align-items-lg-center">
                <input
                  type="text"
                  className="newsletter-1__input"
                  placeholder="Enter your email address"
                />
                <button className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md gap-2 flex-shrink-0">
                  <span className="d-inline-block"> Subscribe </span>
                  <span className="material-symbols-rounded mat-icon fw-300">
                    {" "}
                    arrow_right_alt{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-2__content section--sm">
              <div className="row g-4">
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> IT Services </h5>
                  <ul className="list list-xsm">
                    <li>
                      <Link
                        href="about-us-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        About Us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="service-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Service{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="case-study-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Case Study{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="pricing-plan-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Pricing Plan{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="choose-us-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Why Choose Us{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> Quick Link </h5>
                  <ul className="list list-xs">
                    <li>
                      <Link
                        href="referral"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Referral{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="coming-soon"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Coming Soon{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="terms-condition"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Terms & Condition{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-page-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Newsletter{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="error"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        404{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> Support </h5>
                  <ul className="list list-xs">
                    <li>
                      <Link
                        href="contact-us-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Contact Us{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="leadership"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Leadership Page{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="facts-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Facts{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="faq-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        FAQ{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="help-center"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Help Center{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> Learn Fact </h5>
                  <ul className="list list-xsm">
                    <li>
                      <Link
                        href="leadership-page"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Leadership Details{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="getting-started"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Getting Started{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="blog-details-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Blog Details{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="service-details-1"
                        className="t-link clr-light :clr-accent"
                      >
                        {" "}
                        Service Details{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-xxl-2">
                  <h5 className="clr-light mb-5"> Contact us </h5>
                  <ul className="list list-xsm">
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-danger">
                          <span className="material-symbols-rounded mat-icon clr-light size-32">
                            {" "}
                            phone_in_talk{" "}
                          </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light">
                            {" "}
                            Phone{" "}
                          </span>
                          <Link
                            href="#"
                            className="t-link mobile-notification__title :clr-accent"
                          >
                            {" "}
                            (482) 504 - 3207{" "}
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-success">
                          <span className="material-symbols-rounded mat-icon clr-light size-32">
                            {" "}
                            local_post_office{" "}
                          </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light">
                            {" "}
                            Email{" "}
                          </span>
                          <Link
                            href="#"
                            className="t-link mobile-notification__title :clr-accent"
                          >
                            {" "}
                            demo@mail.com{" "}
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-warning">
                          <span className="material-symbols-rounded mat-icon clr-light size-32">
                            {" "}
                            pin_drop{" "}
                          </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light">
                            {" "}
                            Location{" "}
                          </span>
                          <span className="mobile-notification__title">
                            {" "}
                            Santa Ana, Illinois, USA{" "}
                          </span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  <h5 className="clr-light mb-5"> Gallery </h5>
                  <ul className="list list-row flex-wrap list-xsm">
                    <li>
                      <Link href="#" className="t-link">
                        <img
                          src="/images/gallery-1.png"
                          alt="image"
                          className="img-fluid"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link">
                        <img
                          src="/images/gallery-2.png"
                          alt="image"
                          className="img-fluid"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link">
                        <img
                          src="/images/gallery-3.png"
                          alt="image"
                          className="img-fluid"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link">
                        <img
                          src="/images/gallery-4.png"
                          alt="image"
                          className="img-fluid"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2__bottom">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <p className="clr-light text-center text-md-start">
                {" "}
                Copyright 2023 Itechex All Rights Reserved.{" "}
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list list-xs list-row justify-content-center justify-content-md-end">
                <li>
                  <Link
                    href="#"
                    className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
