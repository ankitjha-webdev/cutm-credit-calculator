import React from 'react';
import LoginImg from '../assets/cutm.png'

export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className=' w-fit h-screen object-cover' src={LoginImg} alt='cutm'/>
            </div>
            
            <div className='bg-yellow-200 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-white py-2'>
                        <label>User Name</label>
                        <input className='rounded-lg bg-gray-600  mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' type="text" />
                    </div>
                    <div>
                        <label className='flex flex-col text-white py-2'>Password</label>
                        <input className='rounded-lg bg-gray-600 w-full mt-2 p-2 focus:border-blue-500 focus:bg-gray-400 focus:outline-none' type="password" />
                    </div>
                    <div className=' flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p>Forget Password</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-yellow-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40 text-gray-900 font-semibold rounded-lg'>Sign In</button>
                </form>
            </div>
            
        </div>
    )
}