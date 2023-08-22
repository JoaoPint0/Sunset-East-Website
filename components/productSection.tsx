import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductSection = (props: {title: string, description:string, base: string, logo: string}) => {
  return (
    <Link href={props.base} className="flex flex-col w-fit items-center">
        <Image
        src={props.logo}
        alt={props.title}
        width="130"
        height="30"
        className="p-2"
        />
        <h2 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
            {props.title}
        </h2>
        <p className="text-md leading-normal text-gray-500 lg:text-md xl:text-md dark:text-gray-300">
            {props.description}
        </p>
    </Link>
  );
}

export default ProductSection;