import React from 'react';
import { IoMdArrowForward } from "react-icons/io";


const Testimonials = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
        <div className="absolute w-70 h-70 bg-gradient-to-br from-green-200/10 to-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-200/10 to-yellow-300/30 rounded-full blur-3xl"></div>
        
        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
            
            {/* Top left profile */}
            <div className="absolute top-44 left-112">
            <div className="h-full w-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image 16.png" 
                alt="Profile 1" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Top right profile */}
            <div className="absolute top-40 right-142">
            <div className="h-full w-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image.png" 
                alt="Profile 2" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Left side profile */}
            <div className="absolute left-82  ">
            <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image-1.png" 
                alt="Profile 3" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Right side profile */}
            <div className="absolute right-97 top-64 -z-10">
            <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image 21.png" 
                alt="Profile 4" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Bottom left profile */}
            <div className="absolute bottom-43 left-115">
            <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image 20.png" 
                alt="Profile 5" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Bottom right profile */}
            <div className="absolute bottom-45 right-140">
            <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/video.png" 
                alt="Profile 6" 
                className="w-full h-full object-cover "
                />
            </div>
            </div>
            {/* for likes */}
            <div className="absolute top-44 left-140 ">
                <img 
                src="/public/images/likes.gif" 
                alt="likes" 
                className="w-[100px] h-[100px]"
                />
            </div>
            {/* for emoji */}
            <div className="absolute left-90 top-95 -z-10">
                <img 
                    src="/public/images/emoji.gif" 
                    alt="emoji" 
                    className="w-[100px] h-[100px]"
                />
            </div>
            {/* for trophy */}
            <div className="absolute bottom-44 left-149 ">
                <img 
                src="/public/images/trophy.gif" 
                alt="Trophy" 
                className="w-[100px] h-[100px]"
                />
            </div>
            {/* for heart  */}
            <div className="absolute right-105 top-90 ">
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
    )
}

export default Testimonials;