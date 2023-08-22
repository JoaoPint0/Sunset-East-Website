import React from "react";
import Container from "./container";

const ProjectSection = (props: {title: string, company: string, dates: string, description:string, responsabilities: string[], skills: string}) => {
  return (
    <Container>
        <div className="flex flex-col w-full">
          <h5 className="mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-2xl dark:text-white">{props.title}<span className="text-yellow-600"> @{props.company}</span></h5>
          <p className="text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">{props.dates}</p>
        </div>
        <div className="py-2 w-full">
            <p className="text-md">{props.description}</p>
            {props.responsabilities.length > 0 && (<div className="px-4 py-1 text-md">
                {props.responsabilities?.map((value, index) => (<div className="py-1" key={index}>&#x2022; {value}</div> ))}
            </div>)}
            <p className="text-md"> <span className="text-lg font-bold">Skills:</span> {props.skills}</p>
        </div>
      </Container>
  );
}

export default ProjectSection;