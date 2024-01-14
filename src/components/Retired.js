import React from 'react';
import notifi from './assets/noti.png';
import { FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';










const data = [
    {
        name: '20',
        uv: 30,
        pv: 30,
        customData: 30,
        amt: 2400,
    },
    {
        name: '35',
        uv: 40,
        pv: 40,
        customData: 40,
        amt: 2400,
    },
    {
        name: '40',
        uv: 55,
        pv: 55,
        customData: 55,
        amt: 2400,
    },
    {
        name: '45',
        uv: 66,
        pv: 66,
        customData: 68,
        amt: 2400,
    },
    {
        name: '50',
        uv: 84,
        pv: 84,
        customData: 84,
        amt: 2400,
    },
    {
        name: '55',
        uv: 100,
        pv: 100,
        customData: 100,
        amt: 2400,
    },
    {
        name: '60',
        uv: 100,
        pv: 100,
        customData: 120,
        amt: 2400,
    },

];

const dataa = [
    {
        name: '20',
        uv: 25,
        pv: 25,
        customData: 25,
        amt: 2400,
    },
    {
        name: '',
        uv: 30,
        pv: 30,
        customData: 30,
        amt: 2400,
    },
    {
        name: '25',
        uv: 33,
        pv: 33,
        customData: 34,
        amt: 2400,
    },
    {
        name: '',
        uv: 38,
        pv: 38,
        customData: 38,
        amt: 2400,
    },
    {
        name: '30',
        uv: 44,
        pv: 44,
        customData: 44,
        amt: 2400,
    },
    {
        name: '',
        uv: 50,
        pv: 50,
        customData: 50,
        amt: 2400,
    },
    {
        name: '35',
        uv: 57,
        pv: 57,
        customData: 57,
        amt: 2400,
    },
    {
        name: '',
        uv: 63,
        pv: 63,
        customData: 63,
        amt: 2400,
    },
    {
        name: '40',
        uv: 72,
        pv: 72,
        customData: 72,
        amt: 2400,
    },
    {
        name: '',
        uv: 83,
        pv: 83,
        customData: 83,
        amt: 2400,
    },
    {
        name: '60',
        uv: 91,
        pv: 91,
        customData: 91,
        amt: 2400,
    },
    {
        name: '',
        uv: 97,
        pv: 97,
        customData: 97,
        amt: 2400,
    },
    {
        name: '65',
        uv: 105,
        pv: 105,
        customData: 105,
        amt: 2400,
    },

];


function Retired() {

    const sortedData = data.slice().sort((a, b) => parseInt(a.name) - parseInt(b.name));
    const sortedDataa = dataa.slice().sort((a, b) => parseInt(a.name) - parseInt(b.name));

    const percentage = 78;
    return (
        <>
            {/* <NavBar/> */}
            <div className="main ">
            
            <div className=" relative flex justify-end mr-6 mt-7 md:hidden">
                <div className=" absolute flex justify-end ">
               
                    <div className=' absolute h-2 w-2 bg-blue-400 rounded-full '></div>
                 <img src={notifi} alt="" className='mt-1 cursor-pointer p-1' />
                </div>
            </div>

               

                <div className="afternotify flex flex-col space-y-8 mt-2 md:mt-0 px-5 md:ml-20">


                    <div className="Retired-income flex flex-col mt-9 md:mt-8">

                        <h1 className=' font-serif text-xs md:text-sm text-blue-800 font-bold'>Retirement  Income</h1>
                        <h1 className=' text-xl md:text-2xl font-bold'>Starting Year 2056</h1>

                    </div>

                    <div className="goal flex flex-col space-y-4 md:space-y-0 md:flex-row r md:space-x-8">
                        <div className="my-goal">
                            <h1 className=' text-2xl font-bold md:text-3xl'>$300,000</h1>
                            <p className=' font-serif text-sm font-semibold text-gray-500 md:mt-1'>my Goal</p>
                            <hr className='border-t border-blue-800 my-2' />

                        </div>


                        <div className="compaire-goal flex flex-row space-x-5 ">
                            <div className="goalachive">
                                <h1 className=' text-xl md:text-2xl font-bold'>59%</h1>
                                <p className=' font-serif text-xs font-semibold text-gray-500 md:mt-1'>Goal Archived</p>
                                <hr className='border-t border-blue-800 my-2 md:my-4 w-28' />
                            </div>

                            <div className="est.income">
                                <h1 className=' text-xl md:text-2xl font-bold'>K 300</h1>
                                <p className=' font-serif text-xs font-semibold text-gray-500 md:mt-1'>Est. Monthly Income</p>
                                <hr className='border-t border-blue-800 my-2 md:my-4 w-36' />
                            </div>
                        </div>
                    </div>

                    <div className="contributer mt-4 md:mt-0 ">
                        <h1 className='mb-8 md:mb-0 font-semibold font-serif'>Contribution Overtime</h1>
                        <div className="All-employee flex flex-row justify-center items-center md:justify-start space-x-7">

                            <div className="emp-1 flex flex-col md:flex-row md:justify-center md:items-center space-y-1 md:space-y-0 md:space-x-2">
                                <div className="point rounded-full flex w-3 h-2  bg-blue-900 "></div>
                                <p className='text-xs text-gray-400 font-bold '>Employer:</p>
                                <p className=' font-bold '>$73,500</p>
                            </div>

                            <div className="emp-2 flex flex-col md:flex-row md:justify-center md:items-center space-y-1 md:space-y-0 md:space-x-2">
                                <div className="point rounded-full flex w-3 h-2  bg-blue-700 "></div>
                                <p className='text-xs text-gray-400 font-bold '>Employee:</p>
                                <p className=' font-bold '>$52,500</p>
                            </div>

                            <div className="emp-3 flex flex-col md:flex-row md:justify-center md:items-center space-y-1 md:space-y-0 md:space-x-2">
                                <div className="point rounded-full flex w-3 h-2  bg-blue-500 "></div>
                                <p className='text-xs text-gray-400 font-bold '>Total Interest:</p>
                                <p className=' font-bold '>$244,313</p>
                            </div>


                        </div>


                    </div>

                    <div className="bard md:hidden">
                        <BarChart
                            width={290}
                            height={170}
                            data={sortedData}
                            margin={{
                                top: 5,
                                right: 10,
                                left: -13,
                                bottom: 5,
                            }}
                            barCategoryGap={10}
                        >
                            {/* ... existing JSX */}
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} />
                            <YAxis
                                ticks={[0, 100, 200, 300]}
                                domain={[0, 300]}
                                tickFormatter={(value) => `$${value}`}
                                axisLine={false}
                            />
                            <Tooltip />
                            <Bar dataKey="uv" stackId="a" fill="#1e3a8a" />
                            <Bar dataKey="pv" stackId="a" fill="#1d4ed8" />
                            <Bar dataKey="customData" stackId="a" fill="#3b82f6" />
                        </BarChart>
                    </div>

                    <div className="bard md:flex hidden">
                        <BarChart
                            width={520}
                            height={210}
                            data={sortedDataa}
                            margin={{
                                top: 0,
                                right: -7,
                                left: -16,
                                bottom: 5,
                            }}
                            barCategoryGap={8}
                        >
                            {/* ... existing JSX */}
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} />
                            <YAxis
                                ticks={[0, 100, 200, 300]}
                                domain={[0, 300]}
                                tickFormatter={(value) => `$${value}`}
                                axisLine={false}
                            />
                            <Tooltip />
                            <Bar dataKey="uv" stackId="a" fill="#1e3a8a" />
                            <Bar dataKey="pv" stackId="a" fill="#1d4ed8" />
                            <Bar dataKey="customData" stackId="a" fill="#3b82f6" />
                        </BarChart>
                    </div>
{/* hidden */}
                    <div className="howtocompare md:flex hidden ">
                   
                        <div className="containt flex flex-col">
                            <div className="title">
                                <h1 className=' font-semibold font-serif text-xl'>How do I compare my peers?</h1>
                                <p className=' text-base text-gray-600'>These numbers represent current goal achivement</p>
                            </div>

                            <div className="three_circle flex flex-row justify-center items-center  ">
                                <div className="three flex flex-col space-y-2 mr-10">
                                    <div className="1 cursor-pointer flex flex-row items-center space-x-2 font-semibold">
                                        <strong>Age:  </strong>Under 30<FaCaretDown />

                                    </div><hr className='mt-2' />
                                    <div className="2 cursor-pointer flex flex-row items-center space-x-2 font-semibold">
                                        <strong>Salary:  </strong>K 20-K- 30<FaCaretDown />

                                    </div><hr className='mt-2' />
                                    <div className="2 cursor-pointer flex flex-row items-center space-x-2 font-semibold">
                                        <strong>Gender:  </strong>Male<FaCaretDown />

                                    </div>
                                </div>

                                <div className="cirecl mt-2 flex space-x-11">
                                    <div className="average flex flex-col justify-center items-center">
                                        <div className='1' style={{ width: 72, height: 72 }}>
                                            <CircularProgressbar value={78} text={`${78}%`} strokeWidth={12} styles={{
                                                trail: { stroke: '#f3f3f3' }, // Background color
                                                path: { stroke: '#00FFAD' },  // Progress color
                                                text: { fill: 'black', fontSize: '25px',fontWeight:"bold" } // Text color
                                            }} />
                                        </div>
                                        <h1 className=' font-semibold font-serif text-base'>Average</h1>
                                    </div>

                                    <div className="Top flex flex-col justify-center items-center">
                                        <div className='1' style={{ width: 72, height: 72 }}>
                                            <CircularProgressbar value={95} text={`${95}%`} strokeWidth={12} styles={{
                                                trail: { stroke: '#f3f3f3' }, // Background color
                                                path: { stroke: '#00FFAD' },  // Progress color
                                                text: { fill: 'black', fontSize: '25px',fontWeight:"bold" } // Text color
                                            }}/>
                                        </div>
                                        <h1 className=' font-semibold font-serif text-base'>Top</h1>
                                    </div>

                                    <div className="Me flex flex-col justify-center items-center">
                                        <div className='1' style={{ width: 72, height: 72 }}>
                                            <CircularProgressbar value={59} text={`${59}%`} strokeWidth={12} styles={{
                                                trail: { stroke: '#f3f3f3' }, // Background color
                                                path: { stroke: '#00FFAD' },  // Progress color
                                                text: { fill: 'black', fontSize: '25px',fontWeight:"bold" } // Text color
                                            }} />
                                        </div>
                                        <h1 className=' font-semibold font-serif text-base'>Me</h1>
                                    </div>




                                </div>
                            </div>


                        </div>
                    </div>





                </div>

            </div>
        </>
    )
}

export default Retired
