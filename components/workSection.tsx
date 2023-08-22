import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@nextui-org/react";

const WorkSection = (props: {title: string, description:string, link: string, logo: string}) => {
  return (
    <Link href={props.link} target="_blank" className="flex flex-col w-fit items-center">
        <Card className="w-fit">
            <Image
                src={props.logo}
                alt={props.title}
                width="130"
                height="30"
            />
        </Card>
        <div className="p-4">
            <h3 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
                {props.title}
            </h3>
            <p className="text-md leading-normal text-gray-500 lg:text-md xl:text-md dark:text-gray-300">
                {props.description}
            </p>
        </div>
    </Link>
  );
}

export default WorkSection;