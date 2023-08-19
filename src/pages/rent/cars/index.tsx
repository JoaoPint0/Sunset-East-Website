import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import HeaderSection from "components/header";
import { api } from "~/utils/api";
import CarComponent from "components/carComponent";
import Container from "components/container";

const Cars: NextPage = () => {

  const { data } = api.cars.getAll.useQuery()

  console.log(data)

  return (
    <>
      <Head>
        <title>Cars</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/rent"/>

      <HeaderSection title= "Find your next ride." subtitle="CARS">
        We hand pick the most reliable, low mileage, vehicles for car rentals in Bristol
      </HeaderSection>

      <Container>
        <div className="gap-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {data?.map((value) => ( <CarComponent key={value.id}  car={value}/> ))}
        </div>
      </Container>

      <Footer base="/rent"/>
    </>
  );
};

export default Cars;