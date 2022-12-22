import React from "react";
import { SocialInfos } from "../data";
export const SocialIcon = (props) => {
    return (
        <a className="text-sm text-skin-inverted hover:text-skin-base dark:text-skin-base transition dark:hover:text-skin-inverted" href={props.link} target={"_blank"} referrerPolicy="no-referrer" rel="noopener noreferrer">
            <span className="sr-only">{props.site}</span>
            <svg className="fill-current text-skin-inverted hover:text-skin-base dark:text-skin-base dark:hover:text-skin-inverted h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
            <path d={props.svg}/>
            </svg>
        </a>
    )
}
export default function Footer() {
    return (
        <section id="footer">
            <div className="flex flex-col items-center text-center lg:text-left text-skin-base dark:text-skin-base mt-2">
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
                <div className="flex items-center mb-2 space-x-2 text-base text-skin-inverted dark:text-skin-base">
                    <a href="/">Aditya Sinha</a>
                    <div>&copy; {new Date().getFullYear()}</div>
                </div>
                 
            </div>
        </section>
    )
}