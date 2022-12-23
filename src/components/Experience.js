import React, { useState } from "react";
import {OfficeBuildingIcon, TerminalIcon} from '@heroicons/react/solid'
import CompanyCard from "./CompanyCard";
import { experience } from "../data";

const Experience = () => {
    const CompanyNav = (props) => {
        return (
            <li className="md:mb-1" key={props.companyName}>
                <button 
                    className={ props.isActive ? "inline-block p-4 md:border-l-4 md:border-t-0 border-l-0 border-t-4 dark:text-skin-base dark:border-gray-400 active border-gray-900 outline-none box-border"
                        : "inline-block p-4 dark:text-skin-base outline-none box-border"}
                    onClick={props.onClick} >
                {props.companyName}
                </button>
            </li>
        )
    }
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = index => {
        console.log('tab clicked ' + index);
        setToggleState(index);
    }
    return (
        <section id="experience">
            <div className="container px-5 py-10 mx-auto text-center">
            <OfficeBuildingIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-skin-inverted dark:text-skin-muted mb-12">
                Experience
            </h1>
            <div className="flex flex-col md:flex-row lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center items-center">
                    {/* tab navs */}
                    <ul className="flex flex-row items-end md:items-start md:flex-col mr-px md:w-1/4 w-full text-left justify-center">
                        {
                            experience.map((exp) => (
                                <CompanyNav 
                                    companyName={exp.companyName} 
                                    onClick={() => toggleTab(exp.id)} 
                                    isActive={toggleState===exp.id} 
                                />  
                            ))
                        }    
                    </ul>
                    <div className="flex flex-col justify-start sm:w-1/2 w-full">
                        {/* tab contents */}
                        <CompanyCard 
                            designation={experience[toggleState-1].designation} 
                            companyname={experience[toggleState-1].companyName} />
                    </div>
            </div>
        </div>




        </section>
    )
}
export default Experience; 