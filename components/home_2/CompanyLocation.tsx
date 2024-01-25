import React from "react";

const CompanyLocation = ({ data }) => {
  return (
    <>
      <div className="section--sm section--bottom team-section-1">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8 col-xxl-7">
                {data?.sub_heading && (
                  <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                    {data?.sub_heading}
                  </span>
                )}

                {data?.heading && (
                  <h2 className="mt-5 mb-5 text-center">{data?.heading}</h2>
                )}

                {data?.heading_summary && (
                  <p className="text-center mx-auto t-short-para">
                    {data?.heading_summary}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="justify-content-center">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.33728799397399!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1706177102105!5m2!1sen!2sbd"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLocation;
