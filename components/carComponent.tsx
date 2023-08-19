import React from "react";
import { type Car } from "@prisma/client";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

const CarComponent = (props: {car: Car}) => {
    return (
        <Link href={props.car.turoLink} target='blank'>
            <Card isBlurred shadow="sm" isPressable className="p-4" >
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={props.car.title}
                        className="w-full object-cover h-140px"
                        src={props.car.avatar}
                    />
                </CardBody>
                <CardFooter>
                    <div>
                        <div className="font-bold text-xl text-left">{props.car.title} {props.car.year}</div>
                        <div className="flex flex-row justify-start">
                            <p className="text-default-500 mr-4 capitalize">{props.car.exterior.toLowerCase()}</p>
                            <p className="text-default-500 mr-4 capitalize">{props.car.interior.toLowerCase()}</p>
                            <p className="text-default-500 mr-4 capitalize">{props.car.transmission.toLowerCase()}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
      );
}

export default CarComponent;