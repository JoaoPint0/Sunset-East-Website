import Image from "next/image"
import Link from "next/link"

const Logo = (props :{ base: string; }) => {

    let destination = "/"

    if(props.base){
        destination = props.base
    }

    return (
        <div>
            {" "}
            <Link href={`${destination}`} className="flex items-center space-x-2 text-2xl font-mediums dark:text-gray-100">
                <Image
                    src="/img/logo.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-8"
                />
                <span>Sunset East</span>
            </Link>
        </div>
    )
}

export default Logo;