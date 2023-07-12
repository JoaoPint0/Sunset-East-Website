import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";



const Home: NextPage = (props) => {

  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base=""/>

      <Footer base=""/>
    </>
  );
};

export default Home;
