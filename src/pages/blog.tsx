import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import HeaderSection from "components/header";



const Blog: NextPage = () => {

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base=""/>

      <HeaderSection title= "Recent Articles." subtitle="INFORMATIVE">
      A personal quest to become a better creative writer.
      </HeaderSection>

      <Footer base=""/>
    </>
  );
};

export default Blog;