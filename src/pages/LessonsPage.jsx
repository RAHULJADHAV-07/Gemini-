import React from 'react';
import { CheckCircle, Award } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import LessonCard from '../components/LessonCard';

/**
 * LessonsPage Component
 * Main course page displaying lessons and progress
 * 
 * @param {string} studentName - Student's name
 * @param {Set} completedLessons - Set of completed lesson IDs
 * @param {Function} onLessonClick - Function to handle lesson click
 * @param {Function} onGoToCertificate - Function to navigate to certificate page
 * @param {Function} onChangeName - Function to go back and change name
 */
const LessonsPage = ({ studentName, completedLessons, onLessonClick, onGoToCertificate, onChangeName }) => {
  // LESSON DATA - Real AI Prompting Lessons
  const lessons = [
    {
      id: 1,
      title: "Creative Personality Prompting",
      description: "Learn to ask AI engaging questions that reveal personality insights and make creative connections.",
      duration: "30 sec",
      difficulty: "Beginner",
      skills: ["Creative Prompting", "Personality Analysis"],
      prompt: "Ask me 5 short and simple, multiple choice questions about my personality, one by one, and then tell me what famous artist or designer I am most like.",
      category: "Creative & Personal",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=914&promptId=17"
    },
    {
      id: 2,
      title: "Event Planning Prompts",
      description: "Master comprehensive prompting for multi-faceted planning tasks with specific requirements.",
      duration: "30 sec",
      difficulty: "Beginner",
      skills: ["Task Planning", "Structured Prompting"],
      prompt: "Help me plan a small, festive get-together for 5 friends at home. Suggest a simple menu, a music playlist theme, and one fun game we can play",
      category: "Planning & Organization",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=914&promptId=16"
    },
    {
      id: 3,
      title: "Educational & Critical Analysis",
      description: "Craft prompts that encourage critical thinking and fact-checking in an entertaining way.",
      duration: "30 sec",
      difficulty: "Intermediate",
      skills: ["Critical Analysis", "Educational Prompting"],
      prompt: "Pick a popular historical movie (Bollywood/Tollywood etc.) and point out three major historical inaccuracies in a fun, myth-busting way.",
      category: "Education & Analysis",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=914&promptId=15"
    },
    {
      id: 4,
      title: "Travel & Recommendation Prompts",
      description: "Learn to create prompts that generate personalized recommendations based on context.",
      duration: "30 sec",
      difficulty: "Beginner",
      skills: ["Recommendation Systems", "Contextual Prompting"],
      prompt: "I have a week-long break. Suggest a location were I can go with my friends for a weekend getaway.",
      category: "Travel & Lifestyle",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=914&promptId=14"
    },
    {
      id: 5,
      title: "Sustainable & Creative Solutions",
      description: "Master prompts that combine creativity with specific constraints and values.",
      duration: "30 sec",
      difficulty: "Intermediate",
      skills: ["Constraint-based Prompting", "Creative Solutions"],
      prompt: "The festive season is here. Suggest 5 creative and eco-friendly ways to decorate my home or hostel room to give it a festive vibe.",
      category: "Creativity & Sustainability",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=914&promptId=13"
    }
  ];

  const allLessonsCompleted = completedLessons.size === lessons.length;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                  Welcome back, {studentName}! 👋
                </h1>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Continue your AI prompting journey</p>
              </div>
              <button
                onClick={onChangeName}
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base self-center sm:self-auto px-3 py-1 rounded-md hover:bg-blue-50"
              >
                Change Name
              </button>
            </div>
            
            {/* Progress Bar */}
            <ProgressBar completed={completedLessons.size} total={lessons.length} />
            
            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 mb-4 sm:mb-6 mt-8 sm:mt-6">
              <div className="text-center p-2 sm:p-3 bg-blue-50 rounded-lg">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-blue-600">{completedLessons.size}</div>
                <div className="text-xs text-blue-600">Completed</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-purple-50 rounded-lg">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-purple-600">{lessons.length - completedLessons.size}</div>
                <div className="text-xs text-purple-600">Remaining</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-green-50 rounded-lg">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-green-600">{Math.round((completedLessons.size / lessons.length) * 100)}%</div>
                <div className="text-xs text-green-600">Progress</div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-amber-50 rounded-lg">
                <div className="text-base sm:text-lg lg:text-xl font-bold text-amber-600">5</div>
                <div className="text-xs text-amber-600">Skills</div>
              </div>
            </div>
            
            {/* Completion Message */}
            {allLessonsCompleted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center animate-pulse">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  <span className="text-green-800 font-medium text-sm sm:text-base">Congratulations! 🎉</span>
                </div>
                <p className="text-green-700 mb-4 text-sm sm:text-base">You've completed all lessons!</p>
                <button
                  onClick={onGoToCertificate}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto text-sm sm:text-base"
                >
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Get Your Certificate</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-3 sm:gap-4 lg:gap-6">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={completedLessons.has(lesson.id)}
                onLessonClick={onLessonClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;