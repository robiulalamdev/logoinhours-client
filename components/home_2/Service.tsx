import useViewImage from "@/lib/hooks/useViewImage";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Service = ({ data }) => {
  const { categories } = useSelector((state: any) => state.global);
  const { viewImg } = useViewImage();

  return (
    <>
      {data?.status && (
        <section className="section">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-11 col-xxl-10">
                  {data?.sub_heading && (
                    <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                      {" "}
                      {data?.sub_heading}{" "}
                    </span>
                  )}

                  {data?.heading && (
                    <h2 className="mt-5 mb-5 text-center"> {data?.heading} </h2>
                  )}

                  {data?.heading_summary && (
                    <p className="text-center mx-auto t-short-para">
                      {" "}
                      {data?.heading_summary}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {categories?.length > 0 && (
            <>
              <div className="container">
                <div className="row g-4 justify-content-center">
                  {categories?.map((cate: any, index: number) => (
                    <div key={index} className="col-md-6 col-lg-4">
                      <div className="service-card service-card--1">
                        <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                          <img src={viewImg(cate?.image)} alt="image" />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-2">{cate?.name}</h5>
                          <p className="mb-5">
                            {cate?.description?.length > 150
                              ? cate?.description?.slice(0, 150) + "..."
                              : cate?.description}
                          </p>
                          <Link
                            href="service-1"
                            className="t-link t-link--base fw-md"
                          >
                            {" "}
                            {data?.button_title}{" "}
                            <span className="material-symbols-outlined mat-icon fw-200">
                              {" "}
                              trending_flat{" "}
                            </span>
                          </Link>
                          <div className="service-card__number mt-5">
                            <span className="service-card__number-is h5">
                              {" "}
                              0{index + 1}{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <div className="col-md-6 col-lg-4">
                <div className="service-card service-card--1 h-100">
                  <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                    <img src="/images/icon-2.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Web Development</h5>
                    <p className="mb-5">
                      {" "}
                      We provide the most responsive and functional IT solution
                      to enterprises and businesses all around the globe.{" "}
                    </p>
                    <Link
                      href="service-1"
                      className="t-link t-link--base fw-md"
                    >
                      {" "}
                      {data?.button_title}{" "}
                      <span className="material-symbols-outlined mat-icon fw-200">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                    <div className="service-card__number mt-5">
                      <span className="service-card__number-is h5"> 02 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card service-card--1">
                  <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                    <img src="/images/icon-3.png" alt="image" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Networking Services</h5>
                    <p className="mb-5">
                      {" "}
                      We provide the most responsive and functional IT solution
                      to enterprises and businesses all around the globe.{" "}
                    </p>
                    <Link
                      href="service-1"
                      className="t-link t-link--base fw-md"
                    >
                      {" "}
                      {data?.button_title}{" "}
                      <span className="material-symbols-outlined mat-icon fw-200">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                    <div className="service-card__number mt-5">
                      <span className="service-card__number-is h5"> 03 </span>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
              <div className="section__gap-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-8">
                      <div className="group group-row flex-wrap justify-content-center align-items-center">
                        <Link
                          href="service-1"
                          className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"
                        >
                          {" "}
                          More Service{" "}
                        </Link>
                        <Link
                          href="contact-us-1"
                          className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center"
                        >
                          <span className="bttn__arrow"> Contact Us Now </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default Service;
