import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

function Strategy() {
    const [value, setValue] = useState(12);
    const [val, setVal] = useState(65);

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
            <div className="main hidden md:flex mt-12 ml-20 flex-col">

                <div className="strategy h-[62vh] w-[40vh] bg-gray-100 flex flex-col p-4 rounded-xl">

                    <div className="title">
                        <h1 className='text-xl font-bold font-serif'>Retriment Strategy</h1>
                    </div>

                    <div className="input mt-4 space-y-7">
                        <div className="1 ">
                            <p className=' font-bold text-sm mb-2'>Employee Contribution</p>

                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="1"
                                value={value}
                                onChange={handleChange}
                                className="slider appearance-none w-64 h-1 bg-blue-500 outline-none"
                                style={trackStyle}


                            />

                            <span className="text-base ml-5 h-2 w-2 p-2 rounded-md bg-white">{value}%</span>


                        </div>

                        <div className="2 ">
                            <p className=' font-bold text-sm mb-2'>Employee Contribution</p>

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

                            <span className="text-base ml-5 h-2 w-2 p-2 rounded-md bg-white">{val}</span>


                        </div>

                    </div><hr className='mt-6 mb-6 ' />

                    <div className="contri-rate flex flex-col space-y-6">
                        <div className="1 flex">
                            <h1 className=' text-base font-semibold text-gray-600'>Employer Contribution</h1>
                            <span className=" font-bold ml-8">8.4%</span>
                        </div>

                        <div className="2 flex">
                            <h1 className=' text-base font-semibold text-gray-600'>Interest Rate</h1>
                            <span className=" font-bold ml-28">5%</span>
                        </div>
                    </div>

                    <div className="btn mt-6 mb-6 h-10 w-60 rounded-lg bg-blue-600 items-center justify-center flex text-center cursor-pointer">
                        <button className='text-white font-semibold text-sm '>Update</button>
                    </div>
                    <div className='flex flex-row items-center justify-center text-blue-600 font-bold'>
                        <span className=' text-xs cursor-pointer hover:underline-offset-4  hover:underline'>View Help Docs</span>
                        <MdKeyboardArrowRight className='cursor-pointer' /></div>
                </div>


                <div className="learnmore flex flex-row mt-6">
                    <hr
                        style={{
                            border: 'none',
                            borderLeft: '2px solid #000', // Adjust color and style as needed
                            height: '100px', // Adjust the height as needed
                            margin: 0,
                            // transform: 'rotate(180deg)',
                        }}
                    />

                    <div className='ml-6 flex flex-col space-y-1'>

                        <h1 className='text-sm font-semibold'>Are you considering a </h1>
                        <h1 className='font-bold text-base'>Housing Advance?</h1>
                        <p className='text-xs font-bold text-gray-400'>Limited Time Reduced interest</p>
                        <div className="flex flex-row items-center text-xs font-bold text-blue-600 ">
                            <p className='cursor-pointer hover:underline-offset-4  hover:underline'>Learn More</p>
                            <MdKeyboardArrowRight className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Strategy
