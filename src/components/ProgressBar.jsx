import React from 'react';

/**
 * ProgressBar Component
 * Shows the completion progress of lessons
 * 
 * @param {number} completed - Number of completed lessons
 * @param {number} total - Total number of lessons
 */
const ProgressBar = ({ completed, total }) => {
  const percentage = (completed / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-2 sm:mb-4">
      <div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center">
        {completed} of {total} lessons completed ({Math.round(percentage)}%)
      </p>
    </div>
  );
};

export default ProgressBar;