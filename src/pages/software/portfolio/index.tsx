import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import HeaderSection from "components/header";
import ProjectSection from "components/projectSection";


const Portfolio: NextPage = () => {

  const projects = [
    {
      "title": "Founder", 
      "company":"Sunset East Rentals", 
      "dates": "Jul 2023 — Present",
      "description": "" ,
      "responsabilities": [
        "Architecture, design and build of the website using NextJS"
      ],
      "skills": ["NextJS", "React", "TailwindCSS", "Prisma"]
    },
    {
      "title": "Founder", 
      "company":"NanoAndroid", 
      "dates": "May 2023 — Jun 2023",
      "description": "A python script to generate files for a native android application skeleton implementing Navigation, DI, CI/CD and a MVVM architecture as a base." ,
      "responsabilities": [],
      "skills": ["Python", "Android Architecture", "Kotlin DSL", "CI/CD"]
    },
    {
      "title": "Founder", 
      "company":"GameVision", 
      "dates": "May 2023 — Jun 2023",
      "description": "A mobile application to scan board games using the camera and display to the user game information and prices." ,
      "responsabilities": [
        "Architecture, design and build of the application in MVVM architecture using Kotlin, Coroutines, Flow and Compose.",
        "Designed and implemented visually appealing and user-friendly interfaces that align with design guidelines and material principles."
      ],
      "skills": ["Machine learning", "Tablet Design", "Kotlin", "Compose", "MVVM", "Coroutines", "Jetpack", "Retrofit", "Hilt"]
    },
    {
      "title": "Senior Android Developer", 
      "company":"AND Digital, Funky Pigeon (Client)", 
      "dates": "Jul 2022 — Apr 2023",
      "description": "",
      "responsabilities": [
        "Designed and implemented a strategy for the app navigation structure migration to Single Activity with Jetpack Navigation and Compose.",
        "Migrated from multiple architecture styles to a MVVM architecture using Coroutines, Flow and Compose.        ",
        "Established the new overall architecture of the application, ensuring scalability, modularity, and maintainability.",
        "Lead technical meetings to insure feature parity between Android and iOS teams.",
        "Collaborated with designers to implement visually appealing and user-friendly interfaces that align with design guidelines and material principles.",
        "Assisting in the deployment of the app to Google Play Store, ensuring proper app signing, release management, and maintenance of the CI/CD pipeline.",
        "Identifying and addressing performance bottlenecks, memory leaks, and other issues that could impact the app's user experience as a result we increased the crash free rate from 95% to a stable 99%.",
        "Redesigned the payment system and improved analytics to ensure a better customer checkout experience.",
        "Providing technical guidance to new developers, reviewing their code, and offering mentorship to enhance their skills and promote best practices."
      ],
      "skills": ["Kotlin", "Compose", "MVVM", "Coroutines", "Jetpack", "Retrofit", "Koin", "Material Design", "CI/CD"]
    },
    {
      "title": "Senior Android Developer (Contract)", 
      "company":"Cazoo", 
      "dates": "Jan 2022 — Jun 2022",
      "description": "",
      "responsabilities": [
        "Architecture, design and build of the application in MVVM architecture using Kotlin, Coroutines, Flow and Compose.",
        "As an internal product,  collaborated with cross-functional teams to translate requirements into technical specifications and user-friendly interfaces.",
        "Designed and implemented visually appealing and user-friendly interfaces that align with design guidelines and material principles for tablet use.",
        "Established the new overall architecture of the application, ensuring scalability, modularity, and maintainability.",
      ],
      "skills": ["Kotlin", "Compose", "MVVM", "Coroutines", "Jetpack", "Retrofit", "Hilt", "Material Design", "CI/CD"]
    },
    {
      "title": "Senior Android Developer (Contract)", 
      "company":"Ford", 
      "dates": "Jul 2021 — Dec 2022",
      "description": "",
      "responsabilities": [
        "Architecture, design and build of the feature in MVVM architecture using Kotlin, Coroutines, Flow and Compose.",
        "Collaborating with cross-functional teams, including product managers and designers, to translate requirements into technical specifications and user-friendly interfaces.",
        "Conduct end-to-end demo demonstration to ensure integration of all systems  between the app, house and car.",
      ],
      "skills": ["Kotlin", "Compose", "MVVM", "Coroutines", "Jetpack", "Retrofit"]
    },
    {
      "title": "Founder", 
      "company":"StadiaDeals, GFNDeals, BoosteroidDeals",
      "dates": "March 2021 — Present",
      "description": "" ,
      "responsabilities": [
        "Architecture, design and build of the application using Flutter, Dart, Firebase and Google Cloud functions.",
        "Develop Python scripts to aggregate sales and game information.",
        "Released on Android and iOS."
      ],
      "skills": ["Flutter", "Dart", "Android", "iOS", "Testflight"]
    },
    {
      "title": "Founder", 
      "company":"StadiaHunters.com", 
      "dates": "Nov 2019 — Sep 2022",
      "description": "A community achievement hunting website for users  of Google Stadia." ,
      "responsabilities": [
        "Architecture, design and build of the application using Angular, Typescript, Firebase and Google Cloud functions.",
        "Created a social media presence and a discord community.",
        "Created reviews and video tutorials on Youtube.",
        "Architecture, design and build an Android application using Kotlin, MVVM and Jetpack libraries.",
        "Received 5/5 stars in Google play"
      ],
      "skills": ["Angular", "Typescript", "Sass", "SSR", "SEO", "Google Analytics", "Digital Marketing", "Google Cloud Functions"]
    },
  ]

  return (
    <>
      <Head>
        <title>Sunset East</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar base="/software"/>
      
      <HeaderSection title= "Featured Projects." subtitle="TECHNOLOGY">
      Focused on the experience, driven by the engineering.
      </HeaderSection>

      {projects?.map((value, index) => (
      <ProjectSection key={index}
        title={value.title}
        company={value.company}
        dates={value.dates}
        description={value.description}
        responsabilities={value.responsabilities}
        skills={value.skills.join(", ")}
      /> ))}
          
      <Footer base="/software"/>
    </>
  );
};

export default Portfolio;
