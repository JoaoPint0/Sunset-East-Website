import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ContactButton = (props) => {
  return (
    <Link href={`${props.base}/contact`} className="px-6 py-3 text-white bg-red-600 rounded-full">
        <div  style={{display: 'flex', flexDirection: 'row' }}>
            <div>
                Contact Us
            </div>
            <ArrowRightCircleIcon className="ml-3 w-6"/>
        </div>
    </Link>
  );
}

export default ContactButton;