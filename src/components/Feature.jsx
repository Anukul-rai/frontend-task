
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Feature = () => {
    const[show,setShow]=useState(false)
    return (
        <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
            <p className="text-gray-800 text-lg mb-2">Your SkillShikshya Journey</p>
            <h1 className="text-3xl font-bold text-[#1DA077]">
                Step<span className="text-black"> In. </span>
                Skill<span className="text-black"> Up. </span>
                Stand<span className="text-black"> Out. </span>
                <span className="text-3xl">🚀</span>
            </h1>
            </div>
            <style>
                {`
                .float-img {
                    animation: floatUpDown 4s ease-in-out infinite;
                }

                @keyframes floatUpDown {
                    0%, 100% {
                    transform: translateY(0);
                    }
                    50% {
                    transform: translateY(-15px);
                    }
                }
                `}
            </style>
            {/* Cards Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-11">
            {/* Card 1: Start with Clarity */}
            <div className="rounded-3xl p-8 text-white relative min-h-[300px] bg-[#F45B5B] mb-2">
                <div className="flex items-center justify-center">
                        <img src="/public/images/Group.png" alt="pfp-1" className="absolute top-[4px] right-94 h-97 float-img"/>
                </div>
                <div className="flex items-center justify-between h-full w-100">
                    <div className=" text-right  -mr-37 -mt-8  pl-47 relative z-10">
                        <div className=''>
                            <h2 className="text-2xl font-bold mb-3">Start with Clarity</h2>
                            <p className="text-lg font-medium mb-4">Step into a better learning path.</p>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                        Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.
                        </p>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl p-5 text-white relative min-h-[300px] bg-[#F45B5B] mb-2">
                {/* Left Arrow */}
                <button className="bg-white w-17 h-17 rounded-full flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <FaArrowLeft className="text-black text-xl" />
                </button>

                <div className="relative">
                    <img
                    src="/public/images/red bg.png"
                    alt="User"
                    className="w-82 h-80 absolute rounded-xl z-10 -top-[40px] left-[47px] "
                    />
                    {/* WOW Bubble 1 */}
                    <img
                    src="/public/images/wow.png"
                    alt="Wow"
                    className="absolute top-6 left-16 w-16 h-20 w-20"
                    />
                    <img
                    src="/public/images/wow.png"
                    alt="Wow"
                    className="absolute top-40 right-30 rotate-y-180 rotate-40 h-20 w-20 drop-shadow-3xl "
                    />
                </div>
                <div className="text-white text-left absolute left-80 top-10 ">
                    <h2 className="text-xl font-bold">
                    Clarity unlocked—<br />
                    stickers, sips, and skills all in one go!
                    </h2>
                </div>

                {/* Right Arrow */}
                <button className="bg-white w-17 h-17 rounded-full flex items-center justify-center  absolute right-4 top-1/2 -translate-y-1/2 z-10">
                    <FaArrowRight className="text-black text-xl" />
                </button>
            </div>
            
            {/* Card 2: Learn by Doing */}
            <div className="rounded-3xl text-white relative  min-h-[300px]  bg-[#5492A0] mb-2">
                <div className="flex items-center justify-between  h-full w-100 ">
                    <div className="mr-4 px-6">
                        <div className='-mt-5'>
                            <h2 className="text-2xl font-bold mb-3">Learn by Doing</h2>
                            <p className="text-lg font-medium mb-4">Practical skills, real projects.</p>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                        Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                        <img src="/public/images/Group (1).png" alt="" className="absolute top-[4px] right-4 h-100 float-img"/>
                </div>
            </div>            
            {/* Card 3: Get Mentored & Supported */}
            <div className="rounded-3xl text-white relative mb-2 min-h-[300px] bg-[#6C64A8] ">
            <img
                src="/images/Group (2).png"
                alt=""
                className="absolute top-12 -left-28 w-100 z-0 float-img"
            />
            <div className="flex items-center h-full w-full justify-end pr-10 pl-62 relative z-10">
                <div className="text-right max-w-md">
                <h2 className="text-2xl font-bold mb-3">Get Mentored & Supported</h2>
                <p className="text-lg font-medium mb-4">You're not learning alone.</p>
                <p className="text-sm leading-relaxed opacity-90">
                    Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.
                </p>
                </div>
            </div>
            </div>
            
            {/* Card 4: Achieve & Showcase */}
            <div className="rounded-3xl text-white relative  min-h-[300px] bg-[#A88964] mb-2">
                <div className="flex items-center justify-between h-full w-100">
                    <div className="mr-4 px-6">
                        <div className='-mt-5'>
                        <h2 className="text-2xl font-bold mb-3">Achieve & Showcase</h2>
                        <p className="text-lg font-medium mb-4">Build your portfolio, get job-ready.</p>
                        </div>
                        <p className="text-sm leading-relaxed opacity-90">
                        Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job-readiness, bringing you closer to that dream job, promotion, or your own venture.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/public/images/Group (3).png" alt="" className="absolute top-[19px] -right-14 float-img"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Feature;