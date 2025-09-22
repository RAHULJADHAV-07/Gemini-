import React, { useState } from 'react';
import { CheckCircle, BookOpen, ArrowRight, Eye, Target, Lightbulb } from 'lucide-react';

/**
 * LessonCard Component
 * Interactive lesson card with prompt preview and skill indicators
 * 
 * @param {Object} lesson - Lesson object with enhanced data
 * @param {boolean} isCompleted - Whether the lesson has been completed
 * @param {Function} onLessonClick - Callback when lesson is clicked
 */
const LessonCard = ({ lesson, isCompleted, onLessonClick }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800 border-green-200',
    'Intermediate': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Advanced': 'bg-red-100 text-red-800 border-red-200'
  };

  const categoryColors = {
    'Creative & Personal': 'bg-purple-100 text-purple-700',
    'Planning & Organization': 'bg-blue-100 text-blue-700',
    'Education & Analysis': 'bg-indigo-100 text-indigo-700',
    'Travel & Lifestyle': 'bg-green-100 text-green-700',
    'Creativity & Sustainability': 'bg-teal-100 text-teal-700'
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mx-1 sm:mx-0 ${
      isCompleted ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-blue-300'
    }`}>
      <div className="p-3 sm:p-4 lg:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
          <div className="flex items-start space-x-2 sm:space-x-3">
            <div className={`p-2 rounded-full flex-shrink-0 ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`}>
              {isCompleted ? 
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" /> : 
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              }
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight mb-1">{lesson.title}</h3>
              <p className="text-xs text-gray-500 mb-2">Lesson {lesson.id} • {lesson.duration}</p>
              
              {/* Category and Difficulty Tags */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                {lesson.category && (
                  <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${categoryColors[lesson.category] || 'bg-gray-100 text-gray-700'}`}>
                    {lesson.category}
                  </span>
                )}
                {lesson.difficulty && (
                  <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium border ${difficultyColors[lesson.difficulty] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                    <Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-1" />
                    {lesson.difficulty}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {isCompleted && (
            <span className="bg-green-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium self-start sm:self-auto flex items-center">
              <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
              Completed
            </span>
          )}
        </div>
        
        {/* Skills Tags */}
        {lesson.skills && lesson.skills.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center mb-1 sm:mb-2">
              <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 mr-1" />
              <span className="text-xs font-medium text-gray-600">Skills you'll learn:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {lesson.skills.map((skill, index) => (
                <span key={index} className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-amber-50 text-amber-700 rounded-md text-xs font-medium border border-amber-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm">{lesson.description}</p>
        
        {/* Interactive Prompt Preview */}
        {lesson.prompt && (
          <div className="mb-3 sm:mb-4">
            <button
              onClick={() => setShowPrompt(!showPrompt)}
              className="flex items-center space-x-1 sm:space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-xs sm:text-sm font-medium"
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{showPrompt ? 'Hide' : 'Preview'} Prompt</span>
            </button>
            
            {showPrompt && (
              <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs sm:text-sm text-blue-800 italic leading-relaxed">
                  "{lesson.prompt}"
                </p>
              </div>
            )}
          </div>
        )}
        
        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center justify-between sm:justify-start sm:space-x-4 order-2 sm:order-1">
            <span className="text-xs text-gray-500">{lesson.duration}</span>
            {lesson.difficulty && (
              <span className="text-xs text-gray-400">
                {lesson.difficulty}
              </span>
            )}
          </div>
          
          <button
            onClick={() => onLessonClick(lesson)}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-2 text-sm order-1 sm:order-2 w-full sm:w-auto ${
              isCompleted
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:shadow-lg transform hover:scale-105'
            }`}
          >
            <span>{isCompleted ? 'Review Lesson' : 'Start Learning'}</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;