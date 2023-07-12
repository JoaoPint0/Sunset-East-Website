import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Container from "components/container";



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

      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="text-sm font-bold tracking-wider text-yellow-600 uppercase">
              TECHNOLOGY
            </div>
            <h1 className="text-5xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Featured Projects. 
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Focused on the experience, driven by the engineering.
            </p>
          </div>
        </div>
      </Container>

      <Footer base=""/>
    </>
  );
};

export default Portfolio;