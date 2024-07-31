import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import { Link } from 'react-router-dom'



const Header = ({ title }) => {
    return (
        <header>
            <div className="bg-gray-100 w-full drop-shadow-md flex">
                <div className="flex-grow">
                    <div>
                        <h1 className="text-black text-center p-4 text-5xl">{title}</h1>
                    </div>
                    <div className="flex justify-around w-3/4 mx-auto py-3">
                        <NavLink
                            to="/"
                            className="link inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className="link inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Gallery
                        </NavLink>
                        <NavLink
                            to="/maps"
                            className="link inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"

                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div className="w-[100px] flex justify-end items-center mr-[50px]">
                    <Link to="/">
                        <img src="./images/myLogo.png" alt="logo" />
                    </Link>


                </div>
            </div>
        </header>
    );
};

export default Header;