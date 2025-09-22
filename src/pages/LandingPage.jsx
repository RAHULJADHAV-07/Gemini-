import React from 'react';
import { Brain, Award, ArrowRight, Target, Users, Lightbulb } from 'lucide-react';

/**
 * LandingPage Component
 * Entry point for the course - collects student name and introduces the course
 * 
 * @param {string} inputName - Current input value for student name
 * @param {Function} setInputName - Function to update input name
 * @param {Function} onNameSubmit - Function to handle name submission
 */
const LandingPage = ({ inputName, setInputName, onNameSubmit }) => {
  const handleNameSubmit = (e) => {
    if (e) e.preventDefault();
    if (inputName.trim()) {
      onNameSubmit(inputName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-blue-500 rounded-full">
                <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-2">
              AI Prompting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline">Mastery</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Master the art of AI communication through hands-on prompting exercises and real-world scenarios
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">5 Interactive Lessons</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Hands-on prompting exercises with real scenarios</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Practical Skills</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Learn prompting techniques you can use immediately</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Real Scenarios</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Creative, planning, and analytical prompting challenges</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Certificate</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Earn a certificate upon course completion</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-md mx-4 sm:mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Start Your Journey</h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="Enter your full name"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleNameSubmit();
                    }
                  }}
                />
              </div>
              <button
                onClick={handleNameSubmit}
                disabled={!inputName.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
              >
                <span>Begin Learning</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;