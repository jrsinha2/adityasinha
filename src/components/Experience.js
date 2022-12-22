import React, { useState } from "react";
import {OfficeBuildingIcon, TerminalIcon} from '@heroicons/react/solid'
import CompanyCard from "./CompanyCard";
const Experience = () => {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = index => {
        console.log('tab clicked ' + index);
        setToggleState(index);
    }
    return (
        <section id="experience">
            <div className="container px-5 py-10 mx-auto text-center">
            <OfficeBuildingIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white mb-12">
                Experience
            </h1>
            <div className="flex flex-col md:flex-row lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center items-center">
                    {/* tab navs */}
                    <ul className="flex flex-row items-end md:items-start md:flex-col mr-px sm:w-1/4 w-1/2 text-left justify-center">
                        <li className="md:mb-1">
                            <button onClick={() => toggleTab(1)} className={(toggleState===1) ? "inline-block p-4 md:border-l-2 md:border-b-0  dark:text-gray-400 dark:border-gray-400 active border-gray-900 outline-none box-border" : "inline-block p-4  md:border-l-2 dark:text-gray-400  border-transparent outline-none box-border"} >JPMorgan Chase & Co.</button>
                        </li>
                        <li className="md:mb-1">
                            <button onClick={() => toggleTab(2)} className={toggleState===2 ? "inline-block p-4 md:border-l-2 md:border-b-0 active dark:text-gray-400 dark:border-gray-400 active border-gray-900 outline-none box-border" : "inline-block p-4  md:border-l-2 dark:text-gray-400  border-transparent outline-none box-border"}>Uber</button>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-start sm:w-1/2 w-full">
                        {/* tab contents */}
                        <CompanyCard 
                            designation={toggleState===1 ? "Software Engineer" : "Software Engineer 2"} 
                            companyname={toggleState===1 ?"JPMorgan Chase & Co.": "Uber"} />
                    </div>
            </div>
        </div>




        </section>
    )
}
export default Experience; 