import React from "react";
import Container from "../container";
import { Card, Input, Textarea } from "@nextui-org/react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const ContactPage = () => {
  return (
    <Container className="flex flex-wrap">

        <div className="w-full md:w-1/2 pr-8 pb-8">
          <div className="text-sm font-bold tracking-wider text-yellow-600 uppercase">
            Contact Us
          </div>
          <h1 className="text-5xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Get in touch with us.
          </h1>

          <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              If you have an enquiry or question of any kind, simply let us know using the contact form.
          </p>
        </div>
        
        <Card className="w-full lg:w-1/2 p-8">
          <Input
            isRequired
            type="name"
            label="First Name"
            className="pb-8"
          />
           <Input
            isRequired
            type="name"
            label="Last Name"
            className="pb-8"
          />
           <Input
            isRequired
            type="email"
            label="Email Address"
            className="pb-8"
          />

          <Input
            isRequired
            type="phone"
            label="Phone"
            className="pb-8"
          />

          <Textarea
            isRequired
            label="How can we help?"
            labelPlacement="outside"
            placeholder="Type your message here"
            className="pb-4"
          />

          <p className="pb-8 text-gray-400">
            We&apos;re committed to your privacy. Sunset East uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.
          </p>

        <div className="px-6 py-3 text-white bg-red-600 rounded-full w-fit">
          <div className="flex flex-row">
              <div>
                  Submit
              </div>
              <ArrowRightCircleIcon className="ml-3 w-6"/>
          </div>
        </div>

        </Card>

      </Container>
  );
}

export default ContactPage;