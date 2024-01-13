import React from 'react'
import photo from './assets/profile.jpg';
import notifi from './assets/noti.png'

function Profile() {
    return (
        <div className='main flex flex-col px-4 pt-4  space-y-6'>

            <div className="notify flex absolute top-0 right-0 mt-4 mr-4 ">
                <img src={notifi} alt="" />
            </div>

            <div className="profiel_image flex flex-row mt-10 space-x-3">

                <img src={photo} alt="profile" className=" rounded-full h-20" />
                <div className="name flex flex-col justify-center">
                    <h1 className='font-semibold text-2xl font-serif'>Hi Mike,</h1>
                    <p className=' text-xs text-gray-700'>Welcome Back</p>
                </div>

            </div>


            <div className="today bg-gray-100 flex  h-96 rounded-3xl items-center px-5">
                <div className="flex flex-col space-y-8">
                <div className="title flex flex-col">
                <p className=' text-sm font-bold font-serif'>Today</p>
                <h1 className='text-3xl font-extrabold'>$19,892</h1>
                <p className=' text-xs text-gray-700'>Account Balance</p>
                </div>

                <div className="year-to flex-row flex space-x-6">
                    <div className="1 flex flex-col">
                        <p className=' font-bold'>$4,000</p>
                        <p className="text-xs text-gray-500 font-serif">Year-to-Date</p>
                    </div>
                    <div className="2 flex flex-col">
                        <p className=' font-bold'>$1,892</p>
                        <p className="text-xs text-gray-500 font-serif">Total Interest</p>
                    </div>
                </div>
                <div className="btn">
                    <button className=' bg-blue-700 text-white '>I want to...</button>
                </div>


                </div>
            </div>


            <div className="recen_transaction"></div>



        </div>
    )
}

export default Profile
