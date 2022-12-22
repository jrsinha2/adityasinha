import React, { useState } from "react";
import {OfficeBuildingIcon, TerminalIcon} from '@heroicons/react/solid'
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
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                Experience
            </h1>
            <div className="flex flex-col md:flex-row lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center items-center">
                    {/* tab navs */}
                    <ul className="flex flex-row items-end md:items-start md:flex-col mr-px sm:w-1/4 w-1/2 text-left justify-center">
                        <li className="md:mb-1">
                            <button onClick={() => toggleTab(1)} className={(toggleState===1) ? "inline-block p-4 md:border-l-2 md:border-b-0 border-b-2 dark:text-blue-500 dark:border-blue-500 active border-blue-600 outline-none box-border" : "inline-block p-4  border-b-2 md:border-l-2 dark:text-blue-500 dark:border-blue-500 border-transparent outline-none box-border"} >JPMorgan Chase & Co.</button>
                        </li>
                        <li className="md:mb-1">
                            <button onClick={() => toggleTab(2)} className={toggleState===2 ? "inline-block p-4 md:border-l-2 md:border-b-0 border-b-2 active border-blue-600 outline-none box-border" : "inline-block p-4  border-b-2 md:border-l-2 border-transparent outline-none box-border"}>Uber</button>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-start sm:w-1/2 w-full">
                        <div className={toggleState===1 ? "h-full bg-gray-800 bg-opacity-40 p-8 rounded block" : "hidden"}>
                            <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                            <p className="leading-relaxed mb-6"></p>
                            <div className="inline-flex items-center">
                            {/* <img
                                alt="testimonial"
                                src={testimonial.image}
                                className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                            /> */}
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-white">
                                Software Engineer I
                                </span>
                                <span className="text-gray-500 text-sm uppercase">
                                JPMorgan Chase & Co.
                                </span>
                            </span>
                            </div>
                        </div>
                        <div className={toggleState===2 ? "h-full bg-gray-800 bg-opacity-40 p-8 rounded block" : "hidden"}>
                            <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                            <p className="leading-relaxed mb-6"></p>
                            <div className="inline-flex items-center">
                            {/* <img
                                alt="testimonial"
                                src={testimonial.image}
                                className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                            /> */}
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-white">
                                Software Engineer II
                                </span>
                                <span className="text-gray-500 text-sm uppercase">
                                JPMorgan Chase & Co.
                                </span>
                            </span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>




        </section>
    )
}
export default Experience; 