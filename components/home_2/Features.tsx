import useViewImage from "@/lib/hooks/useViewImage";
import Link from "next/link";
import React from "react";

const Features = ({ data }) => {
  const { viewImg } = useViewImage();
  return (
    <section className="section features-section-1">
      <div className="solution__gap-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-xxl-7">
              {data?.sub_heading && (
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  {data?.sub_heading}{" "}
                </span>
              )}

              {data?.heading && (
                <h2 className="mt-5 mb-5"> {data?.heading} </h2>
              )}

              {data?.heading_summary && (
                <p className="max-text-60"> {data?.heading_summary} </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 mt-4">
          {data?.solution_1 && (
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-secondary circle">
                  <img src={viewImg(data?.solution_1?.icon)} alt="image" />
                </div>
                <h5 className="mt-8 mb-2">{data?.solution_1?.title}</h5>
                <p className="mb-5">{data?.solution_1?.summary}</p>
                <Link href="service-1" className="t-link t-link--base fw-md">
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

          {data?.solution_2 && (
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-danger circle">
                  <img src={viewImg(data?.solution_2?.icon)} alt="image" />
                </div>
                <h5 className="mt-8 mb-2">{data?.solution_2?.title}</h5>
                <p className="mb-5"> {data?.solution_2?.summary} </p>
                <Link href="service-1" className="t-link t-link--base fw-md">
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

          {data?.solution_3 && (
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-success circle">
                  <img src={viewImg(data?.solution_3?.icon)} alt="image" />
                </div>
                <h5 className="mt-8 mb-2">{data?.solution_3?.title}</h5>
                <p className="mb-5">{data?.solution_3?.summary}</p>
                <Link href="service-1" className="t-link t-link--base fw-md">
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

          {data?.solution_4 && (
            <div className="col-md-6 col-xl-3">
              <div className="feature-card-1">
                <div className="icon-box icon-box--md bg-warning circle">
                  <img src="/images/icon-31.png" alt="image" />
                </div>
                <h5 className="mt-8 mb-2">{data?.solution_4?.title}</h5>
                <p className="mb-5">{data?.solution_4?.summary}</p>
                <Link href="service-1" className="t-link t-link--base fw-md">
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
    </section>
  );
};

export default Features;
