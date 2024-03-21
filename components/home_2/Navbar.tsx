import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Mobilemenu from "../Mobilemenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCategoriesQuery,
  useGetGlobalQuery,
  useGetReviewsQuery,
} from "@/redux/features/globals/globalApi";
import {
  setCategories,
  setGlobalData,
  setReviews,
} from "@/redux/features/globals/globalsSlice";
import useViewImage from "@/lib/hooks/useViewImage";
import { useGetHomeQuery } from "@/redux/features/home/homeApi";
import { setHomeData } from "@/redux/features/home/homeSlice";
import { useGetAllSpQuery } from "@/redux/features/subPage/subPageApi";
import { useGetPagesQuery } from "@/redux/features/pages/pagesApi";

const Navbar = () => {
  const { data, isLoading } = useGetGlobalQuery(null);
  const { data: homeData } = useGetHomeQuery(null);
  const { data: categoryData } = useGetCategoriesQuery(null);
  const { data: reviewData } = useGetReviewsQuery(null);
  const { data: spData } = useGetAllSpQuery(null);
  const { data: pagesData } = useGetPagesQuery(null);
  // console.log(pagesData);

  const { globalData } = useSelector((state: any) => state.global);
  const { viewImg } = useViewImage();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === "light" ? "dark" : "light";
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };
  const dispatch = useDispatch();

  useMemo(() => {
    if (data?.data) {
      dispatch(setGlobalData(data?.data));
    }
  }, [data?.data]);
  useMemo(() => {
    if (homeData?.data) {
      dispatch(setHomeData(homeData?.data));
    }
  }, [homeData?.data]);

  useMemo(() => {
    if (categoryData?.data) {
      dispatch(setCategories(categoryData?.data));
    }
  }, [categoryData?.data]);

  useMemo(() => {
    if (reviewData?.data) {
      dispatch(setReviews(reviewData?.data));
    }
  }, [reviewData?.data]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // console.log(spData);
  return (
    <>
      <Mobilemenu />
      <div className="header-top-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list list-row flex-wrap list--divider align-items-center justify-content-center justify-content-lg-start">
                <li>
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center"
                  >
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        mail{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      {globalData?.contact_header?.email}{" "}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center"
                  >
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        phone_in_talk{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      {globalData?.contact_header?.phone}{" "}
                    </span>
                  </Link>
                </li>
                <li className="t-be-md-0">
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center"
                  >
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        location_pin{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      {globalData?.contact_header?.address}{" "}
                    </span>
                  </Link>
                </li>
                <li className="ms-md-auto">
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center"
                  >
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      {globalData?.contact_header?.schedule}{" "}
                    </span>
                  </Link>
                </li>
                <li className="d-none d-md-block">
                  <ul className="list list-xs list-row">
                    <li>
                      <Link
                        href={globalData?.contact_header?.facebook || "/"}
                        target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={globalData?.contact_header?.twitter || "/"}
                        target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text"
                      >
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={globalData?.contact_header?.instagram || "/"}
                        target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={globalData?.contact_header?.linkedin || "/"}
                        target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top End --> */}
      {/* <!-- Header  --> */}
      <header className="header header--2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Mobile Header  --> */}
              <div className="mobile-header">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="mobile-header__content">
                        {/* <!-- Logo  --> */}
                        <Link href="/" className="logo pb-2">
                          <img
                            src={viewImg(globalData?.logo)}
                            alt="image"
                            className="logo__img logo__dark"
                            style={{
                              maxHeight: "50px",
                              objectFit: "contain",
                            }}
                          />
                          <img
                            src={viewImg(globalData?.logo)}
                            alt="image"
                            className="logo__img logo__light"
                            style={{
                              maxHeight: "50px",
                              objectFit: "contain",
                            }}
                          />
                        </Link>
                        {/* <!-- Logo end --> */}
                        {/* <!-- Mobile Menu Toggle  --> */}
                        <button
                          onClick={openMobileMenu}
                          className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler"
                        >
                          <span className="material-symbols-rounded mat-icon fw-300">
                            {" "}
                            menu{" "}
                          </span>
                        </button>
                        {/* <!-- Mobile Menu Toggle End --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Mobile Header End --> */}
              {/* <!-- Primary Menu  --> */}
              <nav className="primary-menu align-items-center">
                {/* <!-- Logo --> */}
                <Link href="/" className="logo">
                  <img
                    src={viewImg(globalData?.logo)}
                    alt="image"
                    className="logo__img logo__dark"
                    style={{
                      maxHeight: "50px",
                      objectFit: "contain",
                    }}
                  />
                  <img
                    src={viewImg(globalData?.logo)}
                    alt="image"
                    className="logo__img logo__light"
                    style={{
                      maxHeight: "50px",
                      objectFit: "contain",
                    }}
                  />
                </Link>
                {/* <!-- Logo End --> */}
                <ul className="list primary-menu__list">
                  <Link href="/" className="primary-menu__link">
                    Home
                  </Link>
                  {/* <li>
                    <Link href="#" className="primary-menu__link has-sub">
                      {" "}
                      Pages{" "}
                    </Link>
                    {spData?.data?.length > 0 && (
                      <ul className="list sub-menu">
                        {spData?.data.map((sp: any, index: number) => (
                          <li>
                            <Link
                              href={`/sp/${sp?.slug}`}
                              className="sub-menu__link"
                            >
                              {sp?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li> */}
                  {pagesData?.data?.length > 0 && (
                    <>
                      {pagesData?.data?.map((page: any, index: number) => (
                        <li>
                          <Link
                            key={index}
                            href="#"
                            className="primary-menu__link has-sub"
                          >
                            {page?.name}
                          </Link>
                          <ul className="list sub-menu">
                            {page?.subPages?.map((subPage: any, i: number) => (
                              <li key={i}>
                                <Link
                                  href={`/${page?.slug}/${subPage?.slug}/`}
                                  className="sub-menu__link"
                                >
                                  {subPage?.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </>
                  )}

                  <Link href="/about-us" className="primary-menu__link">
                    About us
                  </Link>

                  {/* <li>
                    <Link href="contact-us-1" className="primary-menu__link">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                  <li className="mega-menu--container">
                    <Link href="#" className="primary-menu__link has-megamenu">
                      {" "}
                      Pages{" "}
                    </Link>
                    <ul className="list mega-menu">
                      <li>
                        <span className="mega-menu__title">
                          Information Details
                        </span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link href="about-us-1" className="mega-menu__link">
                              {" "}
                              About Us{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="choose-us-1"
                              className="mega-menu__link"
                            >
                              {" "}
                              Why Choose Us{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="case-study-1"
                              className="mega-menu__link"
                            >
                              {" "}
                              Case Study{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="facts-1" className="mega-menu__link">
                              {" "}
                              History & Facts{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Help & Support</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link href="faq-1" className="mega-menu__link">
                              {" "}
                              FAQ{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="help-center"
                              className="mega-menu__link"
                            >
                              {" "}
                              Help Center{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="getting-started"
                              className="mega-menu__link"
                            >
                              {" "}
                              Getting Started{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="help-center-details"
                              className="mega-menu__link"
                            >
                              {" "}
                              Help Center Details{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Let's Connect</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="case-study-details-1"
                              className="mega-menu__link"
                            >
                              {" "}
                              Case Study Details{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="leadership" className="mega-menu__link">
                              {" "}
                              Leadership Page{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="leadership-page"
                              className="mega-menu__link"
                            >
                              {" "}
                              Leadership Details{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="referral" className="mega-menu__link">
                              {" "}
                              Refferral{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Other Pages</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="pricing-plan-1"
                              className="mega-menu__link"
                            >
                              {" "}
                              Pricing Plan{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="error" className="mega-menu__link">
                              {" "}
                              404{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="coming-soon"
                              className="mega-menu__link"
                            >
                              {" "}
                              Coming Soon{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="terms-condition"
                              className="mega-menu__link"
                            >
                              {" "}
                              Terms & Condition{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="ms-auto">
                    <Link href={`/rtl/home-2`} className="primary-menu__link">
                      {" "}
                      RTL{" "}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dark-mode-toggle"
                      onClick={() => setTheme(inactiveTheme)}
                    >
                      {theme != "light" ? (
                        <span className="dark-mode-toggle__light">
                          <span className="material-symbols-rounded mat-icon">
                            {" "}
                            light_mode{" "}
                          </span>
                        </span>
                      ) : (
                        <span className="dark-mode-toggle__dark">
                          <span className="material-symbols-rounded mat-icon">
                            {" "}
                            dark_mode{" "}
                          </span>
                        </span>
                      )}
                    </button>
                  </li>
                  <li>
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn--base bttn-sm bttn-pill fw-md flex-shrink-0"
                    >
                      {" "}
                      Free Quote{" "}
                    </Link>
                  </li> */}
                </ul>
              </nav>
              {/* <!-- Primary Menu End --> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
