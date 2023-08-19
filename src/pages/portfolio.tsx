import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import HeaderSection from "components/header";


const Portfolio: NextPage = () => {

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base=""/>

      <HeaderSection title= "Featured Projects." subtitle="TECHNOLOGY">
      Focused on the experience, driven by the engineering.
      </HeaderSection>

      <Footer base=""/>
    </>
  );
};

export default Portfolio;