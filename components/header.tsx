import React from "react";
import Container from "./container";

const HeaderSection = (props: {subtitle:string, title: string, children: string}) => {
  return (
    <Container className="flex flex-wrap ">
        <div className="flex items-center w-full">
          <div className="max-w-4xl">
          {props.subtitle && (<div className="text-sm font-bold tracking-wider text-yellow-600 uppercase">
            {props.subtitle}
            </div>)}
            {props.title && (<h1 className="text-5xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                {props.title}
            </h1>)}
            {props.children && (<p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                {props.children}
            </p>)}
          </div>
        </div>
      </Container>
  );
}

export default HeaderSection;