import React from "react";
import { SocialInfos } from "../data";
export const SocialIcon = (props) => {
    return (
        <a className="text-sm text-gray-900 hover:text-gray-400 dark:text-gray-400 transition dark:hover:text-gray-900" href={props.link} target={"_blank"} referrerPolicy="no-referrer" rel="noopener noreferrer">
            <span className="sr-only">{props.site}</span>
            <svg className="fill-current text-gray-900 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-900 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
            <path d={props.svg}/>
            </svg>
        </a>
    )
}
export default function Footer() {
    return (
        <section id="footer">
            <div className="flex flex-col items-center text-center lg:text-left text-blue-300 dark:text-gray-400 mt-2">
                <div className="flex mb-3 space-x-4">
                {
                    SocialInfos.map((socialInfo) => (
                        <SocialIcon 
                            link={socialInfo.link}
                            site={socialInfo.site}
                            viewBox={socialInfo.viewBox}
                            svg={socialInfo.svg}
                        />
                    ))
                }
                
                
                
                </div>
                <div className="flex items-center mb-2 space-x-2 text-base text-gray-900 dark:text-gray-400">
                    <a href="/">Aditya Sinha</a>
                    <div>&copy; {new Date().getFullYear()}</div>
                </div>
                 
            </div>
        </section>
    )
}