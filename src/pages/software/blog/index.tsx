import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import HeaderSection from "components/header";


const Home: NextPage = () => {

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Sunset East</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/software"/>

      <HeaderSection title= "Recent Articles." subtitle="INFORMATIVE">
      A personal quest to become a better creative writer.
      </HeaderSection>

      <div className="flex-1"></div>
      
      <Footer base="/software"/>
    </div>
  );
};

export default Home;
