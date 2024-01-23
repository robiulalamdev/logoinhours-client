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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { globalData } = useSelector((state: any) => state.global);
  const { homeData } = useSelector((state: any) => state.home);
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

  console.log(homeData);
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
      <Hero data={homeData?.hero_section} />

      {/* Service section */}
      <Service data={homeData?.professional_it_services} />
      {/* About Section */}
      <About />
      {/* <!-- About Company 3 --> */}
      <AboutCompany />

      {/* Brand Section */}
      {homeData?.companies && <Brand data={homeData?.companies} />}

      {/* <!-- Consult Section  --> */}
      <Consult />
      {/* <!-- Features section --> */}
      <Features />
      {/*  Work Process Section  --> */}
      <Workprocess />
      {/* <!-- Service Section  --> */}
      <ServiceTab />
      {/* <!-- Pricing Section  --> */}
      <Pricing />
      {/*  Team Section  --> */}
      <Team />
      {/*  Testimonial Section  --> */}
      <Testimonail />
      {/*  Footer --> */}
      <Footer />
    </>
    // <>
    //   <Head>
    //     <title>Itechex - IT Solution & Services HTML Template</title>
    //     <meta
    //       name="description"
    //       content="IT Solution & Services HTML Template"
    //     />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <>
    //     <div
    //       onClick={backtoTop}
    //       className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}
    //     >
    //       <span className="back-top">
    //         <span className="material-symbols-outlined mat-icon fw-300 d-grid">
    //           {" "}
    //           keyboard_double_arrow_up{" "}
    //         </span>
    //       </span>
    //     </div>

    //     <Navbar />
    //     <Hero />
    //     <Service />
    //     <About />
    //     <Tools />
    //     <Counter />
    //     <Team />
    //     <Cta />
    //     <Latestwork />
    //     <Customer />
    //     <Blog />
    //     <Footer />
    //   </>
    // </>
  );
}

Home.getLayout = function getLayout(page: React.ComponentType<any>) {
  return <>{page}</>;
};
