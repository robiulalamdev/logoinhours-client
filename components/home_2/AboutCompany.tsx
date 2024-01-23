import useViewImage from "@/lib/hooks/useViewImage";
import Link from "next/link";
import React from "react";

const AboutCompany = ({ data }) => {
  const { viewImg } = useViewImage();
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-xl-around">
          <div className="col-lg-6">
            <div className="about-company-1__img about-company-1__img-start section__gap-bottom h-100 pb-lg-0">
              <div className="row g-4 h-100">
                <div className="col-md-6 align-self-lg-end">
                  <div className="row g-4">
                    <div className="col-sm-6 col-md-12">
                      <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-secondary h-100">
                        <div className="icon-box icon-box--md bg-neutral circle">
                          <img src={viewImg(data?.card_1?.icon)} alt="image" />
                        </div>
                        <h5 className="text-center clr-light mt-6">
                          {" "}
                          {data?.card_1?.title}{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12">
                      <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-success h-100">
                        <div className="icon-box icon-box--md bg-neutral circle">
                          <img src={viewImg(data?.card_2?.icon)} alt="image" />
                        </div>
                        <h5 className="text-center clr-light mt-6">
                          {" "}
                          {data?.card_2?.title}{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-sm-6 col-md-12">
                      <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-danger h-100">
                        <div className="icon-box icon-box--md bg-neutral circle">
                          <img src={viewImg(data?.card_3?.icon)} alt="image" />
                        </div>
                        <h5 className="text-center clr-light mt-6">
                          {" "}
                          {data?.card_3?.title}{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12">
                      <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-warning h-100">
                        <div className="icon-box icon-box--md bg-neutral circle">
                          <img src={viewImg(data?.card_4?.icon)} alt="image" />
                        </div>
                        <h5 className="text-center clr-light mt-6">
                          {" "}
                          {data?.card_4?.title}{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            {data?.sub_heading && (
              <span className="d-block h5 lh-1 fw-semibold clr-base">
                {" "}
                {data?.sub_heading}{" "}
              </span>
            )}

            {data?.heading && <h2 className="mt-5 mb-5"> {data?.heading} </h2>}

            {data?.heading_summary && (
              <p className="mb-8 max-text-60"> {data?.heading_summary} </p>
            )}

            <ul className="list">
              <li>
                <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                  <span className="d-inline-block clr-heading flex-shrink-0">
                    {" "}
                    Analytics{" "}
                  </span>
                  <span className="d-inline-block clr-heading flex-shrink-0">
                    {" "}
                    {data?.analytics}%{" "}
                  </span>
                </div>
                <div className="progress progress--danger">
                  <div
                    className="progress-bar rounded-pill"
                    style={{ width: `${data?.analytics}%` }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                  <span className="d-inline-block clr-heading flex-shrink-0">
                    {" "}
                    Development{" "}
                  </span>
                  <span className="d-inline-block clr-heading flex-shrink-0">
                    {" "}
                    {data?.development}%{" "}
                  </span>
                </div>
                <div className="progress progress--secondary">
                  <div
                    className="progress-bar rounded-pill"
                    style={{ width: `${data?.development}%` }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                  <span className="d-inline-block clr-heading flex-shrink-0">
                    {" "}
                    Solutions{" "}
                  </span>
                  <span className="d-inline-block clr-heading flex-shrink-0">
                    {" "}
                    {data?.solutions}%{" "}
                  </span>
                </div>
                <div className="progress progress--primary">
                  <div
                    className="progress-bar rounded-pill"
                    style={{ width: `${data?.solutions}%` }}
                  ></div>
                </div>
              </li>
            </ul>
            <div className="group group-md group-row flex-wrap mt-12">
              <Link
                href="about-us-1"
                className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"
              >
                {" "}
                {data?.button_title || "Learn More"}{" "}
                <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                  {" "}
                  trending_flat{" "}
                </span>
              </Link>
              <div className="group group-row align-items-center flex-shrink-0">
                <div className="icon-box icon-box--sm icon-box--light-outline circle bg-neutral clr-base">
                  <span className="material-symbols-rounded mat-icon fw-300 size-32 solid">
                    {" "}
                    phone_in_talk{" "}
                  </span>
                </div>
                <div className="group group-0">
                  <p className="clr-heading sm-text">Call for Help</p>
                  <p className="clr-heading fw-md">+7 (903) 880-91-85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
