import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const ResumeButton = () => {
  return (
    <Link href={`/assets/CV_JPinto_2023.pdf`} target="_blank" className="px-6 py-3 text-white bg-black dark:text-black dark:bg-white rounded-full">
        <div  style={{display: 'flex', flexDirection: 'row' }}>
            <div>
                Resume
            </div>
            <ArrowDownTrayIcon className="ml-3 w-6"/>
        </div>
    </Link>
  );
}

export default ResumeButton;