import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="flex items-center justify-center h-80 w-screen">
            <div className="w-4/12 border border-gray-600 rounded p-10">
                <div className="mb-4">
                    <label className="block mb-1 text-left">Username</label>
                    <input type="text" className="w-full"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-left">Password</label>
                    <input type="text" className="w-full"/>
                </div>
                <div className="">
                    <button className="bg-blue-500 hover:bg-blue-700 w-16 text-white h-8 rounded-sm">
                        <Link to="/card">Login</Link>
                    </button>   
                </div>
            </div> 
            
        </div>
    )
}


export default Login;