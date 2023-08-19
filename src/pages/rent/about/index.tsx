import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import AboutSection from "components/aboutSection";
import HeaderSection from "components/header";

const About: NextPage = () => {

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/rent"/>

      <HeaderSection title= "Find our Mission." subtitle="ABOUT">
      Hey there, fellow adventurers and road trippers! We&apos;re stoked to introduce you to Sunset East, where we&apos;re turning the rental car game on its head and redefining how you hit the road.
      </HeaderSection>

      <AboutSection title="Our Story">
      Hi! I am JP, Software Developer, Entrepreneur & Turo All-Star Host in Bristol. We started this with one car that was sitting around collecting dust, fell in love with the idea quickly, and created Sunset East! From one car we quickly decided to grow and now have many cars for rent on Turo. 
      </AboutSection>

      <AboutSection title="Our Spirit">
      We&apos;re not just any car rental business – we&apos;re your partners in adventure. Every vehicle in our kick-ass fleet is handpicked, with me often taking them for a spin personally. We believe that a rental should be as exhilarating as the journey itself. 
      </AboutSection>

      <AboutSection title="Why Roll With Us?">
      No fears, we are experienced on Turo. We run this as a small business (Sunset East) and take great care of our rental cars and customers! Our cars are available 24/7, well maintained, used specifically for Turo and are cleaned prior to each rental. We will never cancel a booking with you because our rides are used only for Turo.
      </AboutSection>

      <AboutSection title="Our Dream">
      Beyond just renting cars, we&apos;re all about enabling your escapades. We&apos;re building this to be your go-to travel sidekick, so whether you&apos;re a spontaneous spirit or a meticulous planner, we&apos;ve got your back (and your wheels).
      </AboutSection>

      <Footer base="/rent"/>
    </>
  );
};

export default About;