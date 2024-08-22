import React from 'react'
import Header from '../componants/Header'
import Footer from '../componants/Footer'

const Login = () => {
    return (
        <>
            <Header />

            <div className=' my-[70px]  bg-gray-50 w-[500px] h-[400px] m-auto text-black  rounded-l shadow-lg'>
                <div className='w-[100%] bg-green-600 h-[5px]'></div>
                <div className='w-[350px] h-[250px] '>
                    <h2 className='pl-[50px] text-2xl pt-[50px]'>Login</h2>
                </div>
                <form className='w-[400px] h-[300px] p-[40px]'>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                </form>
            </div>


            <Footer />
        </>
    )
}

export default Login