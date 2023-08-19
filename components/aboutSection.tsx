import React from "react";
import Container from "./container";

const AboutSection = (props: {title: string, children: string}) => {
  return (
    <Container className={`flex w-full flex-col mt-4 "left"`}>

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-4xl py-4 text-md leading-normal text-gray-500 lg:text-md xl:text-md dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default AboutSection;