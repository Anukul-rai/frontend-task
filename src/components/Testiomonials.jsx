import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const Testimonials = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* bg gradient */}
            <div className="absolute w-70 h-70 bg-gradient-to-br from-green-200/10 to-yellow-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-200/10 to-yellow-300/30 rounded-full blur-3xl"></div>
            
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-16px); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-16px); }
                }
                .float-animation { animation: float 3s ease-in-out infinite; }
                .float-animation-delayed { animation: float-delayed 3.5s ease-in-out infinite 0.5s; }
                .float-animation-slow { animation: float-slow 4s ease-in-out infinite 1s; }
            `}</style>
            
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 group">            
                {/* Top left profile */}
                <div className="absolute top-54 left-132 float-animation group-hover:top-18 group-hover:left-86 group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="h-full w-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image 16.png" 
                            alt="Profile 1" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Top right profile */}
                <div className="absolute top-50 right-162 float-animation-delayed group-hover:top-17 group-hover:right-100 group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="h-full w-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image.png" 
                            alt="Profile 2" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Left profile */}
                <div className="absolute left-108 float-animation-slow group-hover:left-30 group-hover:top-1/3 group-hover:-translate-y-1/2 group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image-1.png" 
                            alt="Profile 3" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Right profile */}
                <div className="absolute right-118 top-78 -z-10 float-animation group-hover:right-35 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image 21.png" 
                            alt="Profile 4" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Bottom left profile */}
                <div className="absolute bottom-53 left-139 float-animation-delayed group-hover:bottom-30 group-hover:left-96 group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image 20.png" 
                            alt="Profile 5" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                {/* Bottom right profile */}
                <div className="absolute bottom-57 right-160 float-animation-slow group-hover:bottom-22 group-hover:right-110 group-hover:scale-110 transition-all duration-500 ease-out">
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/video.png" 
                            alt="Profile 6" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* for likes */}
                <div className="absolute top-54 left-165 -z-20 group-hover:top-32 group-hover:left-170 group-hover:scale-125 transition-all duration-500 ease-out">
                    <img 
                        src="/public/images/likes.gif" 
                        alt="likes" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                {/* for emoji */}
                <div className="absolute left-115 top-110 -z-20 group-hover:left-65 group-hover:top-95 group-hover:scale-125 transition-all duration-500 ease-out">
                    <img 
                        src="/public/images/emoji.gif" 
                        alt="emoji" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                {/* for trophy */}
                <div className="absolute bottom-58 left-169 -z-20 group-hover:bottom-10 group-hover:left-169 group-hover:scale-125 transition-all duration-500 ease-out">
                    <img 
                        src="/public/images/trophy.gif" 
                        alt="Trophy" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                {/* for heart */}
                <div className="absolute right-131 top-107 -z-20 group-hover:right-80 group-hover:top-110 group-hover:scale-125 transition-all duration-500 ease-out">
                    <img 
                        src="/public/images/heart.gif" 
                        alt="heart" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                {/* center content */}
                <div className="text-center max-w-2xl">
                    <h2 className="text-gray-700 text-2xl font-medium mb-4">
                        Hear How They Level Up Their Game!
                    </h2>
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Skill <span className="text-green-700">Masters</span> Unite! 
                            <span className="text-yellow-500 ml-1">🤝</span>
                        </h1>
                    </div>
                    <div className="flex flex-row justify-center gap-3 text-gray-700 hover:gap-4 transition-colors cursor-pointer">
                        <span className="mb-1 font-semibold">View all Testimonials</span>
                        <IoMdArrowForward size={28}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;