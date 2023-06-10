import React from "react";
import { Input } from "antd";
import Link from "antd/es/typography/Link";
import "@fontsource/source-sans-pro";
import Staffion from "../icons/Staffion_Logo.svg"
import Joshua from "../icons/Joshua.svg"
import rotate from "../icons/tabler_rotate-clockwise.svg"

const SignInPage = () => {
    return (
        <div className="flex min-h-screen">

            <div className="flex flex-col bg-[#194BAF] text-white" style={{ width: "600px" }}>
                <div className="flex items-center justify-center flex-grow">
                    <img className="mt-8" src={Staffion} alt="Your Company" />
                </div>
                <div className="flex flex-col items-left text-[15px] p-12 justify-end" style={{ fontFamily: "Source Sans Pro" }}>
                    <div className="mb-5">  <img className="" src={Joshua} alt="Your Company" style={{ width: "50px", height: "50px" }} /></div>
                    <p className="text-left mb-2">
                        "A very important part of our day to day operations is to manage the efficiency of our ever-growing supply and delivery fleets. With FleetConnect doing the heavy lifting of monitoring the fleets, we can do what is important to us, that is to just make our products and sell them."
                    </p>
                    <p className="text-left items-left text-[15px] font-semibold">
                        Joshua Cramwell, CEO, Coders In High Places
                    </p>
                    <div className="navigator flex mt-[40px]">
                        <div className="w-2 h-2 rounded-full mr-2"></div>
                        <div className="w-2 h-2 rounded-full active mr-2"></div>
                        <div className="w-2 h-2 rounded-full mr-2"></div>
                        <div className="w-2 h-2 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="flex-1  flex-col items-center justify-center" style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #194BAF", fontFamily: "Source Sans Pro" }}>
                <div className="flex flex-col items-center justify-center mt-[10rem]">
                    <div className="flex text-[#194BAF] font-semibold text-[15px] mr-[33rem] mb-[10px]">
                        <img className="mt-[2px]" src={rotate} alt="Your Company" />
                        <div className="ml-1">Back to home</div>
                    </div>
                    <div className="bg-white" style={{ width: "640px", borderRadius: "5px" }}>
                        <div className="" style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #194BAF", borderRadius: "5px" }}>
                            <h2 className="text-left px-5 py-2 text-[20px] font-semibold leading-9 tracking-tight text-gray-900">
                                Sign in
                            </h2>
                        </div>
                        <div className=" ">
                            <form className="" action="#" method="POST">
                                <div className=" p-5">
                                    <label htmlFor="email" className="block text-[13px] font-normal leading-6">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <Input
                                            className="custom-inputemail rounded-none border-gray-300 text-[15px] font-normal" style={{ height: "40px", WebkitTextFillColor: "rgba(0, 0, 0, 0.6)" }}
                                            placeholder="Enter email address"
                                        />
                                    </div>
                                </div>
                                <div className="px-5">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-[13px] font-normal leading-6">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-1 ">
                                        <Input
                                            className="custom-input rounded-none border-gray-300 text-[15px] font-normal"
                                            style={{ height: "40px" }}
                                            placeholder="Enter password"
                                            suffix= {<a className="text-[#194BAF] text-[13px] font-semibold" href=""> Forgot Password?</a>}
                                            // suffix={<Link className="text-[#194BAF]" href="">Forgot Password?</Link>}
                                        />
                                    </div>
                                </div>
                                <hr className=" mt-5 border-gray-300 border-t-1 w-full" />
                                <div className="flex justify-end" style={{ paddingRight: "20px" }}>
                                    <button
                                        type="submit"
                                        className="flex mt-4 mb-4 justify-center rounded-full bg-[#194BAF] px-3 py-2 text-sm font-semibold leading-6 text-white" style={{ width: "97px", height: "40px" }}
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default SignInPage