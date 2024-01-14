import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";

import { CircularProgressbar } from 'react-circular-progressbar';

function Strategy_2() {
    const [value, setValue] = useState(12); // Initial value, you can set it to any value you want
    const [val, setVal] = useState(65); // Initial value, you can set it to any value you want
    // Initial value, you can set it to any value you want


    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleChang = (e) => {
        setVal(e.target.value);
    };


    const trackStyle = {
        background: `linear-gradient(to right, #4c81af 0%, #4c81af ${value * 5}%, #d1d5db ${value * 5}%, #d1d5db 100%)`,
    };

    const trackStyl = {
        background: `linear-gradient(to right, #4c81af 0%, #4c81af ${val}%, #d1d5db ${val}%, #d1d5db 100%)`,
    };
    return (
        <>
            <div className='md:hidden flex mt-1 flex-col'>
                <div className="relative mb-6">
                    <RxCross2 className='absolute top-0 right-0 m-4' size={20} />
                </div>


                <div className="title_age_circle flex flex-col m-3 ml-5">
                    <div className="title ">
                        <h1 className=' font-semibold font-serif text-base'>How do I compare my peers?</h1>
                        <p className=' text-xs text-gray-600'>These numbers represent current goal achivement</p>
                    </div>

                    <div className="three flex flex-col space-y-2 mr-10 mt-4">
                        <div className="1 cursor-pointer flex flex-row items-center space-x-2 font-semibold text-sm">
                            <strong>Age:  </strong>Under 30<FaCaretDown />

                        </div><hr className='mt-2' />
                        <div className="2 cursor-pointer flex flex-row items-center space-x-2 font-semibold text-sm">
                            <strong>Salary:  </strong>K 20-K- 30<FaCaretDown />

                        </div><hr className='mt-2' />
                        <div className="2 cursor-pointer flex flex-row items-center space-x-2 font-semibold text-sm">
                            <strong>Gender:  </strong>Male<FaCaretDown />

                        </div><hr className='mt-2' />
                    </div>

                    <div className="cirecl mt-4 flex space-x-7">
                        <div className="average flex flex-col justify-center items-center space-y-2">
                            <div className='1' style={{ width: 65, height: 65 }}>
                                <CircularProgressbar value={78} text={`${78}%`} strokeWidth={12} styles={{
                                    trail: { stroke: '#f3f3f3' }, // Background color
                                    path: { stroke: '#00FFAD' },  // Progress color
                                    text: { fill: 'black', fontSize: '25px', fontWeight: "bold" } // Text color
                                }} />
                            </div>
                            <h1 className=' font-semibold font-serif text-xs'>Average</h1>
                        </div>

                        <div className="Top flex flex-col justify-center items-center space-y-2">
                            <div className='1' style={{ width: 65, height: 65 }}>
                                <CircularProgressbar value={95} text={`${95}%`} strokeWidth={12} styles={{
                                    trail: { stroke: '#f3f3f3' }, // Background color
                                    path: { stroke: '#00FFAD' },  // Progress color
                                    text: { fill: 'black', fontSize: '25px', fontWeight: "bold" } // Text color
                                }} />
                            </div>
                            <h1 className=' font-semibold font-serif text-xs'>Top</h1>
                        </div>

                        <div className="Me flex flex-col justify-center items-center space-y-2">
                            <div className='1' style={{ width: 65, height: 65 }}>
                                <CircularProgressbar value={59} text={`${59}%`} strokeWidth={12} styles={{
                                    trail: { stroke: '#f3f3f3' }, // Background color
                                    path: { stroke: '#00FFAD' },  // Progress color
                                    text: { fill: 'black', fontSize: '25px', fontWeight: "bold" } // Text color
                                }} />
                            </div>
                            <h1 className=' font-semibold font-serif text-xs'>Me</h1>
                        </div>
                    </div>
                </div>

                <div className='h-[52vh] w-full bg-gray-100 flex flex-col mt-5 rounded-t-3xl'>
                    <div className="strategy  pl-5 pt-5  ">

                        <div className="title">
                            <h1 className='text-lg font-semibold font-serif'>Retriment Strategy</h1>
                        </div>

                        <div className="input mt-4 space-y-7">
                            <div className="1 ">
                                <p className=' font-bold text-xs mb-1'>Employee Contribution</p>

                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="1"
                                    value={value}
                                    onChange={handleChange}
                                    className="slider appearance-none  h-1 bg-blue-500 outline-none"
                                    style={trackStyle}


                                />

                                <span className="text-base ml-8 h-2 w-2 p-2 rounded-md bg-white">{value}%</span>


                            </div>

                            <div className="2 ">
                                <p className=' font-bold text-sm mb-1'>Employee Contribution</p>

                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    step="1"
                                    value={val}
                                    onChange={handleChang}
                                    className="slider appearance-none w-64 h-1 bg-blue-500 outline-none"
                                    style={trackStyl}


                                />

                                <span className="text-base ml-8 h-2 w-2 p-2 rounded-md bg-white">{val}</span>


                            </div>

                        </div>

                        <div className="contri-rate flex flex-col space-y-5 mt-8">
                            <div className="1 flex">
                                <h1 className=' text-sm font-semibold text-gray-600'>Employer Contribution</h1>
                                <span className=" font-bold ml-14 text-sm">8.4%</span>
                            </div>

                            <div className="2 flex">
                                <h1 className=' text-sm font-semibold text-gray-600'>Interest Rate</h1>
                                <span className=" font-bold ml-32 text-sm">5%</span>
                            </div>
                        </div>
                   </div>
                   
                </div>
                
                <div className="relative">
                <div className="btn absolute  h-12 w-full bg-blue-600 items-center justify-center flex text-center cursor-pointer">
                    <button className='text-white font-semibold text-sm '>Update</button>
                </div>
                </div>

            </div>









        </>
    )
}

export default Strategy_2
