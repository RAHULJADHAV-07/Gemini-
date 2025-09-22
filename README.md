# 🎯 AI Prompting Mastery Course

A comprehensive, interactive web application designed to teach students the art and science of effective AI prompting through practical, hands-on lessons.

## 🌐 Live Demo

**[View Live Application](https://geminilearning.netlify.app)**

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Course Content](#course-content)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Certificate Setup](#certificate-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎓 Overview

AI Prompting Mastery is an educational platform that transforms the way students learn to communicate with AI systems. Through 5 carefully crafted interactive lessons, students master various prompting techniques including creative writing, analytical thinking, planning, and contextual communication.

### Why This Course?

- **Practical Learning**: Real-world scenarios instead of theoretical concepts
- **Progressive Difficulty**: From beginner to intermediate level prompting
- **Interactive Experience**: Hands-on exercises with immediate application
- **Professional Certification**: Google Certificate template integration
- **Mobile-First Design**: Fully responsive across all devices

## ✨ Features

### 🎮 Interactive Learning Experience
- **5 Comprehensive Lessons** covering different prompting strategies
- **Progress Tracking** with visual indicators and completion statistics
- **Skill-based Organization** with color-coded categories
- **Mobile-Responsive Design** for learning on any device

### 📊 Progress Management
- **Real-time Progress Bar** showing course completion
- **Completion Statistics** (completed lessons, remaining tasks, overall progress)
- **Skill Counter** tracking learned prompting techniques
- **Personalized Dashboard** with student name and progress

### 🏆 Professional Certification
- **PDF Certificate Generation** using existing Google Certificate templates
- **Automated Text Overlay** with student details
- **Responsive Positioning** that adapts to different PDF sizes
- **Download Functionality** for certificate storage

### 🎨 Modern UI/UX
- **Gradient Backgrounds** and modern design aesthetics
- **Smooth Animations** and hover effects
- **Touch-Friendly Interface** with 44px minimum touch targets
- **Accessibility Features** with proper color contrast and typography

## 📚 Course Content

### Lesson 1: Creative & Personal Prompting
**"Discover Your Artist Personality"**
- **Skill**: Creative Prompting, Personality Analysis
- **Type**: Interactive questionnaire leading to artist comparison
- **Learning**: How to craft prompts for personal discovery and creative insights

### Lesson 2: Planning & Organization
**"Plan the Perfect Gathering"**
- **Skill**: Task Planning, Structured Thinking
- **Type**: Event planning with specific constraints
- **Learning**: Breaking down complex tasks into structured prompts

### Lesson 3: Education & Analysis
**"Historical Movie Fact-Checking"**
- **Skill**: Critical Analysis, Research Prompts
- **Type**: Analytical thinking with entertainment context
- **Learning**: Using AI for fact-checking and educational content

### Lesson 4: Travel & Lifestyle
**"Weekend Getaway Planning"**
- **Skill**: Contextual Prompting, Recommendation Systems
- **Type**: Travel planning with friend group dynamics
- **Learning**: Crafting prompts for personalized recommendations

### Lesson 5: Creativity & Sustainability
**"Eco-Friendly Festive Decorations"**
- **Skill**: Creative Problem Solving, Constraint-based Thinking
- **Type**: Creative solutions within sustainability constraints
- **Learning**: Balancing creativity with practical limitations

## 🛠 Technology Stack

### Frontend
- **React.js** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **PDF-lib** - PDF manipulation for certificate generation

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **Git** - Version control

### Deployment
- **Render** - Static site hosting platform
- **GitHub** - Source code repository

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/RAHULJADHAV-07/prompting-frontend.git
   cd prompting-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Open Application**
   Navigate to `http://localhost:3000` in your browser

### Build for Production
```bash
npm run build
```

## 📜 Certificate Setup

To enable certificate downloads, follow these steps:

### 1. Prepare Your Certificate Template
- Use your existing Google Certificate PDF template
- Ensure it's a valid PDF file

### 2. File Placement
```
public/
└── assets/
    └── Google Certificate .pdf
```

### 3. Requirements
- **File Name**: Must be exactly `Google Certificate .pdf` (note the space)
- **Location**: `/public/assets/` directory
- **Format**: Valid PDF file

### 4. Text Overlay Positions
The application automatically overlays:
- **Student Name**: Replaces placeholder name in certificate
- **Course**: "AI Prompting Mastery"
- **Instructor**: "Rahul Jadhav"
- **Institution**: "VPPCOE & VA"
- **Date**: Current completion date

## 📁 Project Structure

```
prompting-frontend/
│
├── public/
│   ├── assets/
│   │   └── Google Certificate .pdf    # Certificate template
│   └── index.html                     # HTML entry point
│
├── src/
│   ├── components/
│   │   ├── ProgressBar.jsx           # Progress tracking component
│   │   └── LessonCard.jsx            # Individual lesson display
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx           # Welcome and progress dashboard
│   │   ├── LessonsPage.jsx           # Course content and lessons
│   │   └── CertificatePage.jsx       # Certificate generation and download
│   │
│   ├── App.jsx                       # Main application component
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global styles and Tailwind imports
│
├── package.json                      # Dependencies and scripts
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite build configuration
└── README.md                        # Project documentation
```

## 💡 Usage

### For Students
1. **Enter Your Name** on the landing page
2. **Track Progress** through the dashboard
3. **Complete Lessons** by clicking on lesson cards
4. **Access External Links** to practice prompting exercises
5. **Download Certificate** upon completion

### For Educators
1. **Customize Content** by modifying lesson data in `LessonsPage.jsx`
2. **Update Certificate** by replacing the PDF template
3. **Monitor Progress** through the built-in tracking system
4. **Deploy** to any static hosting platform

## 🌐 Deployment

### Render Deployment (Current)
The application is deployed on Render with the following configuration:

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`
- **Environment**: Node.js
- **Auto-Deploy**: Enabled from GitHub

### Alternative Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 🤝 Contributing

We welcome contributions to improve the AI Prompting Mastery course!

### Development Guidelines
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Use **ES6+** JavaScript features
- Follow **React** best practices
- Maintain **responsive design** principles
- Add **comments** for complex functionality
- Test on **multiple devices** and browsers

## 📧 Contact

**Project Maintainer**: Rahul Jadhav  
**Institution**: VPPCOE & VA  
**Initiative**: Google Student Ambassador Program

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Student Ambassador Program** for inspiration and template design
- **React Community** for excellent documentation and resources
- **Tailwind CSS** for the utility-first approach to styling
- **PDF-lib** for seamless PDF manipulation capabilities

---

**Made with ❤️ for students learning AI prompting skills**

[⬆ Back to Top](#-ai-prompting-mastery-course)
