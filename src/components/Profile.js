import React from 'react';
import photo from './assets/profile.jpg';
import notifi from './assets/noti.png';
import { FaCaretDown } from "react-icons/fa";

function Profile() {
    return (

        <>

            <div className='main flex flex-col px-4 pt-4 space-y-6 md:space-y-7 md:bg-gray-100 md:w-96 md:h-full'>

                <div className="notify flex absolute top-0 right-0 mt-4 mr-4 md:hidden">
                    <img src={notifi} alt="" className='mt-1 cursor-pointer' />
                    <div className='flex justify-end items-end rounded-full top-0 bg-blue-400 h-2 w-2'></div>
                </div>

                <div className="profiel_image flex flex-row mt-10 space-x-3 md:ml-8 md:mb-4">
                    <img src={photo} alt="profile" className="rounded-full h-20" />
                    <div className="name flex flex-col justify-center">
                        <h1 className='font-semibold text-2xl font-serif'>Hi Mike,</h1>
                        <p className='text-xs text-gray-700'>Welcome Back</p>
                    </div>
                </div>

                <div className="today bg-gray-100 flex h-64 rounded-3xl items-center px-6 mt-8  ">
                    <div className="flex flex-col space-y-6 md:space-y-2 w-full md:ml-8">

                        <div className="title flex flex-col">
                            <p className='text-lg font-bold font-serif'>Today</p>
                            <h1 className='text-4xl font-extrabold md:text-3xl md:font-bold'>$19,892</h1>
                            <p className='text-sm text-gray-800 mt-1'>Account Balance</p>
                        </div>

                        <div className="year-to  flex-row flex md:flex-col space-x-6 md:space-y-3 md:space-x-0 ">
                            <div className="1 flex flex-col md:hidden">
                                <p className='font-bold text-lg'>$4,000</p>
                                <p className="text-sm text-gray-500 font-serif">Year-to-Date</p>
                            </div>

                            <div className="2 flex flex-col md:hidden ">
                                <p className='font-bold text-lg'>$1,892</p>
                                <p className="text-sm text-gray-500 font-serif">Total Interest</p>
                            </div>

                            <div className="1 md:flex md:flex-col hidden">
                                <p className='font-bold text-lg'>$4,000</p>
                                <p className="text-sm text-gray-500 font-serif">Year-to-Date Contributions</p>
                            </div>

                            <div className="2 md:flex flex-col hidden">
                                <p className='font-bold text-lg'>$1,892</p>
                                <p className="text-sm text-gray-500 font-serif">Total Interest</p>
                            </div>
                        </div>

                        <div className="btn flex px-5 md:px-0 justify-center items-center  md:justify-start">
                            <button className='w-full md:hidden h-10 rounded-lg bg-blue-600 text-white items-center justify-center flex text-sm font-bold'>I want to...</button>

                            <button className='w-36 hidden h-10 rounded-lg bg-blue-600 text-white md:items-center md:justify-center md:flex text-sm font-bold'>I want to <FaCaretDown /></button>
                        </div>

                    </div>
                </div>


                <div className="recen_transaction bg-gray-100 flex h-72 rounded-3xl justify-center flex-col space-y-6 px-5 md:ml-8">

                    <p className=' font-serif font-semibold'>Recent Transactions</p>

                    <div className='1'>
                        <div className="1.text space-y-1 flex flex-col ">
                            <p className=' text-xs text-gray-500 font-semibold'>2020-08-07</p>
                            <p className=' text-xs font-bold '>Withdrawal Transfer to Bank-XX11</p>
                        </div>
                        <hr className='mt-2' />
                    </div>

                    <div className='2'>
                        <div className="1.text space-y-1 flex flex-col ">
                            <p className=' text-xs text-gray-500 font-semibold'>2020-07-01</p>
                            <p className=' text-xs font-bold '>Withdrawal Transfer to Bank-XX11</p>
                        </div>
                        <hr className='mt-2' />
                    </div>

                    <div className='3'>
                        <div className="1.text space-y-1 flex flex-col ">
                            <p className=' text-xs text-gray-500 font-semibold'>2020-07-16</p>
                            <p className=' text-xs font-bold '>Withdrawal Transfer to Bank-XX11</p>
                        </div>
                        <hr className='mt-2' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
