import Link from "next/link";
import React from "react";

const Workprocess = ({ data }) => {
  return (
    <section className="work-process-1">
      <div className="work-process-1__top section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11 col-xl-6">
              {data?.sub_heading && (
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                  {data?.sub_heading}
                </span>
              )}

              {data?.heading && (
                <h2 className="mt-5 mb-5 text-center clr-light">
                  {data?.heading}
                </h2>
              )}

              {data?.heading_summary && (
                <p className="max-text-60 text-center mx-auto clr-light">
                  {data?.heading_summary}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="work-process-1__bottom section pb-0">
        <div className="container">
          <div className="row g-4">
            {data?.card_1?.title && (
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">01</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 01. {data?.card_1?.title} </h5>
                  <p className="mb-6">{data?.card_1?.summary}</p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto"
                  >
                    {" "}
                    {data?.button_title || "Read More"}{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {data?.card_2?.title && (
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">02</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 02. {data?.card_2?.title} </h5>
                  <p className="mb-6">{data?.card_2?.summary}</p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto"
                  >
                    {" "}
                    {data?.button_title || "Read More"}{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {data?.card_3?.title && (
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">03</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 03. {data?.card_3?.title} </h5>
                  <p className="mb-6">{data?.card_3?.summary}</p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto"
                  >
                    {" "}
                    {data?.button_title || "Read More"}{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            )}

            {data?.card_4?.title && (
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">04</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 04. {data?.card_4?.title} </h5>
                  <p className="mb-6">{data?.card_4?.summary}</p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto"
                  >
                    {" "}
                    {data?.button_title || "Read More"}{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
