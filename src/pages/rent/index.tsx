import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";

const Rent: NextPage = () => {

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Rent</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/rent"/>

      <div className="flex-1"></div>

      <Footer base="/rent"/>
    </div>
  );
};

export default Rent;