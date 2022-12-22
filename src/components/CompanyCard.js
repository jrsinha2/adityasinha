import { TerminalIcon } from "@heroicons/react/solid";
import React from "react";
const CompanyCard = (props) => {
    return (
        <div className={"h-full bg-gray-800 dark:bg-gray-500  p-8 rounded block"}>
            <TerminalIcon className="block w-8 text-gray-500 dark:text-gray-900 mb-4" />
            <p className="leading-relaxed mb-6"></p>
            <div className="inline-flex items-center">
            {/* <img
                alt="testimonial"
                src={testimonial.image}
                className="w-12 rounded-full flex-shrink-0 object-cover object-center"
            /> */}
            <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white dark:text-gray-900">
                {props.designation}
                </span>
                <span className="text-gray-400 dark:text-gray-800 text-sm uppercase">
                {props.companyname}
                </span>
            </span>
            </div>
        </div>
    )
};
export default CompanyCard;