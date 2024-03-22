import useViewImage from "@/lib/hooks/useViewImage";

const Brand = ({ data }) => {
  const { viewImg } = useViewImage();

  return (
    <>
      {data?.status && (
        <div className="brand-sectiond" style={{ marginTop: "80px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="brand-section__content">
                  <div className="row g-4 justify-content-center align-items-center">
                    {data?.image_1 && (
                      <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <img
                          src={viewImg(data?.image_1)}
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                    )}

                    {data?.image_2 && (
                      <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <img
                          src={viewImg(data?.image_2)}
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                    )}

                    {data?.image_3 && (
                      <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <img
                          src={viewImg(data?.image_3)}
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                    )}

                    {data?.image_4 && (
                      <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <img
                          src={viewImg(data?.image_4)}
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                    )}

                    {/* <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <img
                    src="/images/client-5.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <img
                    src="/images/client-6.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brand;
