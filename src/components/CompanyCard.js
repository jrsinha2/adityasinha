import { TerminalIcon } from "@heroicons/react/solid";
import React from "react";
const CompanyCard = (props) => {
    return (
        <div className={"h-full bg-skin-base dark:bg-skin-inverted  p-8 rounded-2xl block"}>
            <TerminalIcon className="block w-8 text-skin-base dark:text-skin-inverted  mb-4" />
            <p className="leading-relaxed mb-6"></p>
            <div className="inline-flex items-center">
            {/* <img
                alt="testimonial"
                src={testimonial.image}
                className="w-12 rounded-full flex-shrink-0 object-cover object-center"
            /> */}
            <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-skin-muted dark:text-skin-inverted">
                {props.designation}
                </span>
                <span className="text-skin-base dark:text-skin-inverted text-sm uppercase">
                {props.companyname}
                </span>
            </span>
            </div>
        </div>
    )
};
export default CompanyCard;