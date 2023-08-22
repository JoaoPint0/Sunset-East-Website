import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import HeaderSection from "components/header";



const Destinations: NextPage = () => {

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Destinations</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/rent"/>

      <HeaderSection title= "Find your next holiday." subtitle="Destinations">
        We hand pick our favourite destinations a car ride away in the South West for your next adventure.
      </HeaderSection>

      <div className="flex-1"></div>

      <Footer base="/rent"/>
    </div>
  );
};

export default Destinations;