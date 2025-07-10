
import React from 'react';

const Feature = () => {
    return (
        <div className="min-h-screen p-6" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'}}>
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
            
            {/* Cards Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-11">
            {/* Card 1: Start with Clarity */}
            <div className="rounded-3xl p-8 text-white relative min-h-[300px] bg-[#F45B5B] mb-2">
                <div className="flex items-center justify-center">
                        <img src="/public/images/Group.png" alt="pfp-1" className="absolute top-[4px] right-94 h-97"/>
                    </div>
                <div className="flex items-center justify-between h-full w-100">
                    <div className=" text-right  -mr-37 -mt-8">
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
                        <img src="/public/images/Group (1).png" alt="" className="absolute top-[4px] right-4 h-100"/>
                </div>
            </div>            
            {/* Card 3: Get Mentored & Supported */}
            <div className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] bg-[#6C64A8]">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center justify-center">
                        <img src="/public/images/Group (2).png" alt="" className="max-h-32 w-auto object-contain"/>
                    </div>
                    <div className="flex-1 ml-6 text-right">
                        <h2 className="text-2xl font-bold mb-3">Get Mentored & Supported</h2>
                        <p className="text-lg font-medium mb-4">You're not learning alone.</p>
                        <p className="text-sm leading-relaxed opacity-90">
                        Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Card 4: Achieve & Showcase */}
            <div className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] bg-[#A88964]">
                <div className="flex items-center justify-between h-full">
                    <div className="flex-1 mr-6">
                        <h2 className="text-2xl font-bold mb-3">Achieve & Showcase</h2>
                        <p className="text-lg font-medium mb-4">Build your portfolio, get job-ready.</p>
                        <p className="text-sm leading-relaxed opacity-90">
                        Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job-readiness, bringing you closer to that dream job, promotion, or your own venture.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src="/public/images/Group (3).png" alt="" className="max-h-32 w-auto object-contain"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Feature;