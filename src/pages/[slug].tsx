import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import SectionTitle from "components/sectionTitle";

import Hero from "components/hero";
import Footer from "components/footer";
import Testimonials from "components/testimonials";
import Faq from "components/faq";


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Sunset East 2</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base=""/>
      <Hero base=""/>
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you hire me">
        With years of experience in the field, I offer top-notch Android development services tailored to meet your specific needs. From crafting sleek and intuitive user interfaces to implementing robust backend functionalities, I specialize in delivering high-quality, scalable, and performance-driven solutions. Whether you're a startup looking to build a groundbreaking app or a business seeking to enhance your existing Android application, I bring proficiency in cutting-edge technologies and frameworks, ensuring seamless compatibility across multiple devices and OS versions. Take your Android app development project to new heights with my dedication, creativity, and meticulous attention to detail. Contact me today to discuss your requirements and let's collaborate to transform your vision into a remarkable reality!
      </SectionTitle>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer base=""/>
    </>
  );
};

export default Home;
