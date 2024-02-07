import useViewImage from "@/lib/hooks/useViewImage";

const WorkProcess = ({ data }) => {
  const { viewImg } = useViewImage();
  return (
    <>
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-7">
                {data?.sub_heading && (
                  <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                    {data?.sub_heading}
                  </span>
                )}

                {data?.heading && (
                  <h2 className="mt-5 mb-5 text-center">{data?.heading}</h2>
                )}

                {data?.heading_summary && (
                  <p className="text-center mx-auto max-text-60">
                    {data?.heading_summary}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gy-5 gy-xl-4 g-4 justify-content-center">
            {data?.process_1 && (
              <div className="col-sm-6 col-lg-3">
                <div className="process-card-2 process-card-2--1 text-center">
                  <div className="process-card-2__icon ">
                    <img
                      src={viewImg(data?.process_1?.icon)}
                      alt="image"
                      className="img-fluid"
                      style={{ objectFit: "contain", maxWidth: "80px" }}
                    />
                    <span className="process-card-2__notification"> 01 </span>
                  </div>
                  <h5 className="mt-8 mb-2">{data?.process_1?.title}</h5>
                  <p>{data?.process_1?.summary}</p>
                </div>
              </div>
            )}

            {data?.process_2 && (
              <div className="col-sm-6 col-lg-3">
                <div className="process-card-2 process-card-2--2 text-center">
                  <div className="process-card-2__icon">
                    <img
                      src={viewImg(data?.process_2?.icon)}
                      alt="image"
                      className="img-fluid"
                      style={{ objectFit: "contain", maxWidth: "80px" }}
                    />
                    <span className="process-card-2__notification"> 02 </span>
                  </div>
                  <h5 className="mt-8 mb-2">{data?.process_2?.title}</h5>
                  <p>{data?.process_2?.summary}</p>
                </div>
              </div>
            )}

            {data?.process_3 && (
              <div className="col-sm-6 col-lg-3">
                <div className="process-card-2 process-card-2--1 text-center">
                  <div className="process-card-2__icon">
                    <img
                      src={viewImg(data?.process_3?.icon)}
                      alt="image"
                      className="img-fluid"
                      style={{ objectFit: "contain", maxWidth: "80px" }}
                    />
                    <span className="process-card-2__notification"> 03 </span>
                  </div>
                  <h5 className="mt-8 mb-2">{data?.process_3?.title}</h5>
                  <p>{data?.process_3?.summary}</p>
                </div>
              </div>
            )}

            {data?.process_4 && (
              <div className="col-sm-6 col-lg-3">
                <div className="process-card-2 text-center">
                  <div className="process-card-2__icon">
                    <img
                      src={viewImg(data?.process_4?.icon)}
                      alt="image"
                      className="img-fluid"
                      style={{ objectFit: "contain", maxWidth: "80px" }}
                    />
                    <span className="process-card-2__notification"> 04 </span>
                  </div>
                  <h5 className="mt-8 mb-2">{data?.process_4?.title}</h5>
                  <p>{data?.process_4?.summary}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
