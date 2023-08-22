import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import ContactPage from "components/pages/contact";


const Contact: NextPage = () => {

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

      <Navbar base="/software"/>

      <ContactPage/>

      <Footer base="/software"/>
    </>
  );
};

export default Contact;