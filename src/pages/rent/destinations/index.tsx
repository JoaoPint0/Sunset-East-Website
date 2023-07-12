import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";



const Destinations: NextPage = () => {

  return (
    <>
      <Head>
        <title>Destinations</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/rent"/>

      <Footer base="/rent"/>
    </>
  );
};

export default Destinations;