import React from 'react';

const SkillShikshyaJourney = () => {
  return (
    <div className="min-h-screen p-6" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600 text-lg mb-2">Your SkillShikshya Journey</p>
          <h1 className="text-4xl font-bold">
            <span className="text-green-500">Step In. </span>
            <span className="text-green-500">Skill Up. </span>
            <span className="text-gray-800">Stand Out. </span>
            <span className="text-2xl">🚀</span>
          </h1>
        </div>
        
        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1: Start with Clarity */}
          <div 
            className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px]"
            style={{background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)'}}
          >
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold mb-3">Start with Clarity</h2>
                <p className="text-lg font-medium mb-4">Step into a better learning path.</p>
                <p className="text-sm leading-relaxed opacity-90">
                  Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.
                </p>
              </div>
              <div className="w-32 h-32 rounded-xl flex-shrink-0 bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center text-white/50 text-xs text-center">
                Your<br />Character<br />Here
              </div>
            </div>
          </div>
          
          {/* Card 2: Learn by Doing */}
          <div 
            className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px]"
            style={{background: 'linear-gradient(135deg, #4A90A4 0%, #5BA4B0 100%)'}}
          >
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold mb-3">Learn by Doing</h2>
                <p className="text-lg font-medium mb-4">Practical skills, real projects.</p>
                <p className="text-sm leading-relaxed opacity-90">
                  Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.
                </p>
              </div>
              <div className="w-32 h-32 rounded-xl flex-shrink-0 bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center text-white/50 text-xs text-center">
                Your<br />Character<br />Here
              </div>
            </div>
          </div>
          
          {/* Card 3: Get Mentored & Supported */}
          <div 
            className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px]"
            style={{background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)'}}
          >
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold mb-3">Get Mentored & Supported</h2>
                <p className="text-lg font-medium mb-4">You're not learning alone.</p>
                <p className="text-sm leading-relaxed opacity-90">
                  Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.
                </p>
              </div>
              <div className="w-32 h-32 rounded-xl flex-shrink-0 bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center text-white/50 text-xs text-center">
                Your<br />Character<br />Here
              </div>
            </div>
          </div>
          
          {/* Card 4: Achieve & Showcase */}
          <div 
            className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px]"
            style={{background: 'linear-gradient(135deg, #A16207 0%, #CA8A04 100%)'}}
          >
            <div className="flex items-start justify-between h-full">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold mb-3">Achieve & Showcase</h2>
                <p className="text-lg font-medium mb-4">Build your portfolio, get job-ready.</p>
                <p className="text-sm leading-relaxed opacity-90">
                  Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job-readiness, bringing you closer to that dream job, promotion, or your own venture.
                </p>
              </div>
              <div className="w-32 h-32 rounded-xl flex-shrink-0 bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center text-white/50 text-xs text-center">
                Your<br />Character<br />Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillShikshyaJourney;