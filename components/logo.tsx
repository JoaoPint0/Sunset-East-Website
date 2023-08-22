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
                <span className="font-serif font-bold uppercase">Sunset East</span><span>Ltd.</span>
            </Link>
        </div>
    )
}

export default Logo;