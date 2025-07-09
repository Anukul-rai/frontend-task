import React, { useState, useEffect } from 'react';
import { IoMdArrowForward } from "react-icons/io";

const Testimonials = () => {
    const [hovering, setHovering] = useState(false);
    const [showStars1, setShowStars1] = useState(false);
    const [showStars6, setShowStars6] = useState(false);
    const [showdesc,setShowDesc]=useState(false)
    const [showvideo,setShowVideo]=useState(false)

    useEffect(() => {
        const interval1 = setInterval(() => {
            setShowStars1(true);
            setTimeout(() => setShowStars1(false), 2000);
        }, 4000);

        const interval6 = setInterval(() => {
            setShowStars6(true);
            setTimeout(() => setShowStars6(false), 2000);
        }, 3000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval6);
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* bg gradients */}
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
            
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 group"
                onMouseEnter={() => {
                    setHovering(true)
                    setShowDesc(false)
                }}
                onMouseLeave={() => {
                    setHovering(false)
                    setShowDesc(false)
                }}>            
                {/* top left*/}
                <div className={`absolute top-54 left-132  group-hover:top-18 group-hover:left-86 group-hover:scale-110 transition-all duration-500 ease-out  ${hovering ? 'float-animation' : ''}`}
                onMouseOver={()=>setShowDesc(true)}
                onMouseOut={()=>setShowDesc(false)}
                >
                    <div className={`h-full w-full rounded-4xl bg-gray-300 overflow-hidden transition-shadow duration-300 ${showdesc? 'shadow-[0_0_30px_10px_rgba(0,255,150,0.6)]': 'shadow-lg'}`}>
                    <img
                        src="/public/images/image 16.png"
                        alt="Profile 1"
                        className={`w-full h-full object-cover transition-all duration-300 ${showdesc ? 'p-1' : ''}`}
                    />
                    </div>
                    
                    <div className={`absolute -top-8 -right-4 bg-white rounded-lg px-4 py-2 shadow-lg transition-all duration-300  ${showStars1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-medium text-gray-800">Amazing</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-sm">⭐</span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute  -bottom-1 left-30 w-3 h-3 bg-white rotate-45 "></div>
                    </div>
                    <div className={`absolute top-16 left-[-130px] z-50 bg-white rounded-lg px-6 py-2 shadow-lg text-justify transition-all duration-300 w-[329px] h-[170px]  ${showdesc ? 'opacity-100 scale-100 transition-all duration-500 ease-in' : 'opacity-0 scale-75'}`}>
                        <div className="absolute  -top-1 left-50 w-3 h-3 bg-white -z-30 rotate-45"></div>
                            <div>
                                <p className='text-xs'>I was amazed and impressed by the course structure as it was distinctly different from other courses in the market. The classes were highly interactive and the instructor was very humble and friendly. Recordings of the classes were provided within a short time after each class, which made revision very easy and beneficial. I have recommended the same course to my data-enthusiast friends.</p>
                                <div className='text-end mt-[-10px] text-xs font-semibold '>
                                    <p>Rajesh Dhakal</p>
                                    <p>Digital Marketing Student</p>  
                                </div>                      
                            </div>
                    </div>
                </div>
                {/* top right*/}
                <div className={`absolute top-50 right-162 group-hover:top-17 group-hover:right-100 group-hover:scale-110 transition-all duration-500 ease-out ${hovering ? 'float-animation-delayed' : ''}`}>
                    <div className="h-full w-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image.png" 
                            alt="Profile 2" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* mid left*/}
                <div className={`absolute left-108 group-hover:left-30 group-hover:top-1/3 group-hover:-translate-y-1/2 group-hover:scale-110 transition-all duration-500 ease-out ${hovering ? 'float-animation-slow' : ''}`}>
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image-1.png" 
                            alt="Profile 3" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* mid right*/}
                <div className={`absolute right-118 top-78 -z-10 group-hover:right-35 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:scale-110 transition-all duration-500 ease-out ${hovering ? 'float-animation' : ''}`}>
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image 21.png" 
                            alt="Profile 4" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* bottom left*/}
                <div className={`absolute bottom-53 left-139 group-hover:bottom-30 group-hover:left-96 group-hover:scale-110 transition-all duration-500 ease-out ${hovering ? 'float-animation-delayed' : ''}`}>
                    <div className="w-full h-full rounded-4xl bg-gray-300 overflow-hidden shadow-lg">
                        <img 
                            src="/public/images/image 20.png" 
                            alt="Profile 5" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                {/* bottom right*/}
                <div className={`absolute bottom-57 right-160 group-hover:bottom-22 group-hover:right-110 group-hover:scale-110 transition-all duration-500 ease-out ${hovering ? 'float-animation-slow' : ''}`}
                onMouseOver={()=>setShowVideo(true)}
                onMouseOut={()=>setShowVideo(false)}>
                    <div className={`w-full h-full rounded-4xl bg-gray-300 overflow-hidden transition-shadow duration-300 ${showvideo? 'shadow-[0_0_30px_10px_rgba(0,255,150,0.6)]': 'shadow-lg'}`}>
                        <img 
                            src="/public/images/video.png" 
                            alt="Profile 6" 
                            className={`w-full h-full object-cover transition-all duration-300 ${showvideo ? 'p-1' : ''}`}
                        />
                    </div>
                    <div className={`absolute top-23 left-9 bg-white rounded-lg px-4 py-2 shadow-lg transition-all duration-300 ${showStars6 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        <div className="flex items-center gap-1">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-sm">⭐</span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-25 w-4 h-4 bg-white rotate-45"></div>
                    </div>
                    <div className={`absolute bottom-25 right-1 z-50 bg-white rounded-lg px-6 py-2 shadow-lg text-justify  w-[185px] h-[313.24px]  ${showvideo ? 'opacity-100 scale-100 transition-all duration-700 ease-in' : 'opacity-0 scale-75'}`}>
                            <div className='border h-[300px] rounded-lg '>
                                <iframe src="" frameborder="0"/>
                            </div>
                            <div className="absolute  -bottom-1 left-30 w-3 h-3 bg-white rotate-45 "></div>
                    </div>
                </div>

                {/* animated gifs */}
                <div className='absolute top-54 left-165 -z-20 group-hover:top-32 group-hover:left-170 group-hover:scale-125 transition-all duration-500 ease-out '>
                    <img 
                        src="/public/images/likes.gif" 
                        alt="likes" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                <div className='absolute left-115 top-110 -z-20 group-hover:left-65 group-hover:top-95 group-hover:scale-125 transition-all duration-500 ease-out '>
                    <img 
                        src="/public/images/emoji.gif" 
                        alt="emoji" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                <div className='absolute bottom-58 left-169 -z-20 group-hover:bottom-10 group-hover:left-169 group-hover:scale-125 transition-all duration-500 ease-out '>
                    <img 
                        src="/public/images/trophy.gif" 
                        alt="Trophy" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                <div className='absolute right-131 top-107 -z-20 group-hover:right-80 group-hover:top-110 group-hover:scale-125 transition-all duration-500 ease-out '>
                    <img 
                        src="/public/images/heart.gif" 
                        alt="heart" 
                        className="w-[100px] h-[100px]"
                    />
                </div>

                {/* main text content */}
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