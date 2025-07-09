import React from 'react';
import { IoMdArrowForward } from "react-icons/io";


const TestimonialSection = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-green-300/20 to-yellow-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1 w-80 h-80 bg-gradient-to-br from-green-300/30 to-yellow-300/30 rounded-full blur-3xl"></div>
        
        {/* Main content container */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
            
            {/* Profile images positioned around the center */}
            
            {/* Top left profile */}
            <div className="absolute top-10 left-50">
            <div className="h-full w-full rounded-2xl bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image 16.png" 
                alt="Profile 1" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Top right profile */}
            <div className="absolute top-32 right-32">
            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image.png" 
                alt="Profile 2" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Left side profile */}
            <div className="absolute left-48 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image-1.png" 
                alt="Profile 3" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Right side profile */}
            <div className="absolute right-48 top-1/2 transform -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image 21.png" 
                alt="Profile 4" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Bottom left profile */}
            <div className="absolute bottom-32 left-40">
            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/image 20.png" 
                alt="Profile 5" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            
            {/* Bottom right profile */}
            <div className="absolute bottom-32 right-40">
            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden shadow-lg">
                <img 
                src="/public/images/video.png" 
                alt="Profile 6" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
            {/* for likes */}
            <div className="absolute top-100 left-110 ">
                <img 
                src="/public/images/likes.gif" 
                alt="likes" 
                className="w-[100px] h-[100px]"
                />
            </div>
            {/* for emoji */}
            <div className="absolute left-60 top-160 ">
                <img 
                    src="/public/images/emoji.gif" 
                    alt="emoji" 
                    className="w-[100px] h-[100px]"
                />
            </div>
            {/* for trophy */}
            <div className="absolute bottom-100 left-128 ">
                <img 
                src="/public/images/trophy.gif" 
                alt="Trophy" 
                className="w-[100px] h-[100px]"
                />
            </div>
            {/* for heart  */}
            <div className="absolute right-60 top-158 ">
                <img 
                src="/public/images/heart.gif" 
                alt="heart" 
                className="w-[100px] h-[100px]"
                />
            </div>
            
            {/* Center content */}
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
            
            <div className="flex flex-row justify-center gap-2 text-gray-700 hover:gap-4 transition-colors cursor-pointer">
                <span className="mb-1 font-medium">View all Testimonials</span>
                <IoMdArrowForward size={28}/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default TestimonialSection;