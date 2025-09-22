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
   * Handle lesson click - opens lesson and marks as completed
   */
  const handleLessonClick = (lesson) => {
    // Mark lesson as completed first
    const newCompleted = new Set([...completedLessons, lesson.id]);
    setCompletedLessons(newCompleted);
    
    // For mobile devices, we need to handle redirects differently
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile-specific handling
      // Create a user-initiated action that mobile browsers trust
      const openInNewTab = () => {
        // Try opening in new tab first
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          newWindow.location.href = lesson.url;
        } else {
          // If popup blocked, use direct navigation
          window.location.href = lesson.url;
        }
      };
      
      // Small delay to ensure state is saved, then execute
      setTimeout(openInNewTab, 100);
    } else {
      // Desktop handling - create proper link element
      const link = document.createElement('a');
      link.href = lesson.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Add to document, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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