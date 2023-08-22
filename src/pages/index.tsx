import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Container from "components/container";
import ProductSection from "components/productSection";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import WorkSection from "components/workSection";


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

      <Navbar base=""/>

      <Container className="flex w-full flex-col mt-4 left">

      <div className="text-sm font-bold tracking-wider text-yellow-600 uppercase">Services</div>
      <h2 className="max-w-2xl text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
        From Digital to your next Adventure
      </h2>
    </Container>
      
      <Container className="gap-2 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
          <ProductSection title="Software" description="Android App Developer in Bristol" base="/software" logo="/img/android.svg" />
          <ProductSection title="Car Rental" description="Find the next adventure in Bristol" base="/rent" logo="/img/rent.png" />
      </Container>

      <Container className="flex w-full flex-col mt-4 left">

      <div className="text-sm font-bold tracking-wider text-yellow-600 uppercase">Products</div>
      <h2 className="max-w-2xl text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
        Delivering for our Users
      </h2>
      <div className="text-md leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        We&apos;ve worked across a wide range of industries, each with unique needs and challenges.
      </div>
    </Container>

    <Container className="gap-2 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
      <WorkSection title="GameVision" description="" link="https://play.google.com/store/apps/details?id=com.endeavour.tensor" logo="https://play-lh.googleusercontent.com/Mej7TN8MXwLJtS1k2DQRtyTCgXDlhlI-ZFCPLeLhfGPBCXn_Xc36onRD6A6AG5OUfw=w240-h480-rw"/>
      <WorkSection title="FordPass" description="" link="https://play.google.com/store/apps/details?id=com.ford.fordpasseu" logo="https://play-lh.googleusercontent.com/woZFx6xqlLAw9gDudq0Kl5mNs4w3rsRk5os97ewre7Gc6XBJRhZDnh2yIg1aslHmqg=w240-h480-rw"/>
    </Container>
      
      <Footer base=""/>
    </div>
  );
};

export default Home;
