import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGetSingleSpBySlugQuery } from "@/redux/features/subPage/subPageApi";
import Head from "next/head";
import About from "@/components/home_2/About";
import AboutCompany from "@/components/home_2/AboutCompany";
import Brand from "@/components/home_2/Brand";
import Consult from "@/components/home_2/Consult";
import Features from "@/components/home_2/Features";
import Footer from "@/components/home_2/Footer";
import Hero from "@/components/home_2/Hero";
import Navbar from "@/components/home_2/Navbar";
import Pricing from "@/components/home_2/Pricing";
import Service from "@/components/home_2/Service";
import ServiceTab from "@/components/home_2/ServiceTab";
import Team from "@/components/home_2/Team";
import Testimonail from "@/components/home_2/Testimonail";
import Workprocess from "@/components/home_2/Workprocess";
import { useSelector } from "react-redux";
import WorkProcess from "@/components/home_2/WorkProccess";
import CompanyLocation from "@/components/home_2/CompanyLocation";

const SubPageBySlug = () => {
  const { query } = useRouter();
  const { data, refetch } = useGetSingleSpBySlugQuery(query.slug);

  useEffect(() => {
    if (!data?.data) {
      refetch();
    }
  }, [query.slug]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // console.log(data);
  return (
    <>
      <Head>
        <title>Itechex - IT Solution & Services HTML Template</title>
        <meta
          name="description"
          content=" IT Solution & Services HTML Template"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        onClick={backtoTop}
        className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}
      >
        <span className="back-top">
          <span className="material-symbols-outlined mat-icon fw-300 d-grid">
            {" "}
            keyboard_double_arrow_up{" "}
          </span>
        </span>
      </div>
      {/* Navbar Section */}
      <Navbar />
      {/* Hero Section */}
      {/* <Hero data={data?.data?.hero_section} /> */}

      {/* Service section */}
      <Service data={data?.data?.professional_it_services} />
      {/* About Section */}
      <About data={data?.data?.boost_creativity} />
      {/* <!-- About Company 3 --> */}
      <AboutCompany data={data?.data?.stand_out} />

      {/* Brand Section */}
      {data?.data?.companies && <Brand data={data?.data?.companies} />}

      {/* <!-- Consult Section  --> */}
      {/* {data?.data?.appointment && <Consult data={data?.data?.appointment} />} */}

      {/* <!-- Features section --> */}
      {data?.data?.it_solutions && <Features data={data?.data?.it_solutions} />}

      {/*  Work Process Section  --> */}
      {data?.data?.about_our_work && (
        <Workprocess data={data?.data?.about_our_work} />
      )}

      {/* <!-- Service Section  --> */}
      {/* {data?.data?.complete_projects && (
        <ServiceTab data={data?.data?.complete_projects} />
      )} */}
      {data?.data?.work_process && (
        <WorkProcess data={data?.data?.work_process} />
      )}

      {/* <!-- Pricing Section  --> */}
      {/* <Pricing /> */}
      {/*  Team Section  --> */}
      {data?.data?.about_company && (
        <CompanyLocation data={data?.data?.about_company} />
      )}

      {/*  Testimonial Section  --> */}
      {/* {data?.data?.client_reviews && (
        <Testimonail data={data?.data?.client_reviews} />
      )} */}

      {/*  Footer --> */}
      <Footer />
    </>
  );
};

export default SubPageBySlug;

SubPageBySlug.getLayout = function getLayout(page: React.ComponentType<any>) {
  return <>{page}</>;
};
