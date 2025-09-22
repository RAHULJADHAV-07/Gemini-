import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LessonsPage from './pages/LessonsPage';
import CertificatePage from './pages/CertificatePage';

/**
 * Main App Component
 * Handles routing and state management for the AI Prompting Course
 */
const App = () => {
  // App state
  const [currentPage, setCurrentPage] = useState('landing');
  const [studentName, setStudentName] = useState('');
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [inputName, setInputName] = useState('');

  // Load saved data from localStorage on component mount
  useEffect(() => {
    try {
      const savedName = localStorage.getItem('studentName');
      const savedLessons = localStorage.getItem('completedLessons');
      
      if (savedName) {
        setStudentName(savedName);
        setInputName(savedName);
      }
      
      if (savedLessons) {
        const lessonsArray = JSON.parse(savedLessons);
        setCompletedLessons(new Set(lessonsArray));
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    if (studentName) {
      localStorage.setItem('studentName', studentName);
    }
  }, [studentName]);

  useEffect(() => {
    if (completedLessons.size > 0) {
      localStorage.setItem('completedLessons', JSON.stringify([...completedLessons]));
    }
  }, [completedLessons]);

  /**
   * Handle name submission from landing page
   */
  const handleNameSubmit = (name) => {
    setStudentName(name);
    setCurrentPage('lessons');
  };

  /**
   * Handle lesson click - opens lesson in new tab and marks as completed
   */
  const handleLessonClick = (lesson) => {
    // Open lesson in new tab
    window.open(lesson.url, '_blank');
    
    // Mark lesson as completed
    const newCompleted = new Set([...completedLessons, lesson.id]);
    setCompletedLessons(newCompleted);
  };

  /**
   * Navigate to certificate page
   */
  const handleGoToCertificate = () => {
    setCurrentPage('certificate');
  };

  /**
   * Go back to landing page to change name
   */
  const handleChangeName = () => {
    setCurrentPage('landing');
  };

  /**
   * Go back to lessons page
   */
  const handleGoToLessons = () => {
    setCurrentPage('lessons');
  };

  /**
   * Start the course over - reset all data
   */
  const handleStartOver = () => {
    setCurrentPage('landing');
    setStudentName('');
    setInputName('');
    setCompletedLessons(new Set());
    
    // Clear localStorage
    localStorage.removeItem('studentName');
    localStorage.removeItem('completedLessons');
  };

  // Route to appropriate page based on current state
  switch (currentPage) {
    case 'landing':
      return (
        <LandingPage
          inputName={inputName}
          setInputName={setInputName}
          onNameSubmit={handleNameSubmit}
        />
      );

    case 'lessons':
      return (
        <LessonsPage
          studentName={studentName}
          completedLessons={completedLessons}
          onLessonClick={handleLessonClick}
          onGoToCertificate={handleGoToCertificate}
          onChangeName={handleChangeName}
        />
      );

    case 'certificate':
      return (
        <CertificatePage
          studentName={studentName}
          onGoToLessons={handleGoToLessons}
          onStartOver={handleStartOver}
        />
      );

    default:
      return (
        <LandingPage
          inputName={inputName}
          setInputName={setInputName}
          onNameSubmit={handleNameSubmit}
        />
      );
  }
};

export default App;