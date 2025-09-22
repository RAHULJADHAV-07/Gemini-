import React from 'react';
import { Award, Download } from 'lucide-react';

/**
 * CertificatePage Component
 * Displays the completion certificate and handles certificate download
 * 
 * @param {string} studentName - Student's name
 * @param {Function} onGoToLessons - Function to navigate back to lessons
 * @param {Function} onStartOver - Function to start the course over
 */
const CertificatePage = ({ studentName, onGoToLessons, onStartOver }) => {
  
  /**
   * Generate and download certificate using existing PDF template
   * Overlays student details on your Google Certificate template
   */
  const generateCertificate = async () => {
    try {
      // Import PDF-lib for PDF manipulation
      const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib');
      
      // Load your existing PDF template
      const templateUrl = '/assets/Google Certificate .pdf';
      
      // Check if the PDF file exists first
      const response = await fetch(templateUrl);
      if (!response.ok) {
        throw new Error(`PDF template not found at: ${templateUrl}\n\nPlease follow these steps:\n1. Copy your Google Certificate PDF file\n2. Rename it to exactly: "Google Certificate .pdf" (with space before .pdf)\n3. Place it in: /public/assets/Google Certificate .pdf\n4. Refresh the page and try again`);
      }
      
      const existingPdfBytes = await response.arrayBuffer();
      
      // Check if it's a valid PDF
      if (existingPdfBytes.byteLength === 0) {
        throw new Error('PDF file is empty. Please check your Google Certificate PDF file.');
      }
      
      // Load the existing PDF document
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      
      // Get the first page of your template
      const pages = pdfDoc.getPages();
      if (pages.length === 0) {
        throw new Error('PDF has no pages. Please check your Google Certificate PDF file.');
      }
      
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      
      // Load fonts for text overlay
      const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
      
      // Define colors for text
      const darkBlue = rgb(0.1, 0.2, 0.5);
      const black = rgb(0, 0, 0);
      const darkGray = rgb(0.3, 0.3, 0.3);
      
      // **PRECISELY POSITIONED COORDINATES FOR GOOGLE CERTIFICATE**
      // Based on analysis of the generated certificate showing misaligned text
      
      // Student Name - positioned in the blue name area (centered under "This is to certify that")
      const nameWidth = studentName.length * 11;
      firstPage.drawText(studentName, {
        x: width / 2 - nameWidth / 2, // Center the name horizontally
        y: height - 277, // Exact position for the name line
        size: 24,
        font: timesBold,
        color: rgb(0.2, 0.4, 0.8), // Blue color to match template
      });
      
      // Course Name - positioned in the blank after "has successfully participated in"
      firstPage.drawText('AI Prompting ', {
        x: 445, // Right after "has successfully participated in "
        y: height - 307, // Same line as the participation text
        size: 14,
        font: helveticaBold,
        color: rgb(0.2, 0.4, 0.8), // Blue color to match
      });
      
      // Institution - positioned in the blank after "at"
      firstPage.drawText('VPPCOE & VA', {
        x: 280, // Right after "at " 
        y: height - 347, // Same line as "at"
        size: 14,
        font: helvetica,
        color: black,
      });
      
      // Instructor - positioned in the blank after "Conducted by"  
      firstPage.drawText('Rahul Jadhav', {
        x: 485, // Right after "Conducted by " text
        y: height - 327, // Same line as "Conducted by"
        size: 14,
        font: helvetica,
        color: black,
      });
      
      // Date - positioned to replace the existing "06-09-2025" date
      const today = new Date().toLocaleDateString('en-GB');
      
      firstPage.drawText(today, {
        x: 210, // Position where "06-09-2025" appears
        y: height - 442, // Exact date field position
        size: 14,
        font: helveticaBold,
        color: black,
      });
      // Instructor - positioned in the blank after "Conducted by"  
      firstPage.drawText('Rahul Jadhav', {
        x: 545, // Right after "Conducted by " text
        y: height - 452, // Same line as "Conducted by"
        size: 14,
        font: helvetica,
        color: black,
      });
      
      // Save the modified PDF
      const pdfBytes = await pdfDoc.save();
      
      // Download the PDF
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${studentName.replace(/\s+/g, '_')}_AI_Prompting_Certificate.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert('Certificate downloaded successfully!');
      
    } catch (error) {
      console.error('Error generating PDF certificate:', error);
      alert(`Certificate Generation Error:\n\n${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Congratulations Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-4 sm:p-6 bg-yellow-500 rounded-full animate-bounce">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 px-4">
              Congratulations, <span className="block sm:inline">{studentName}!</span> 🎉
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              You've successfully mastered AI prompting through hands-on exercises and real-world scenarios
            </p>
          </div>

          {/* Certificate Information Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8 border-4 border-yellow-400 mx-4 sm:mx-0">
            <div className="border-2 border-yellow-200 p-4 sm:p-6 lg:p-8 rounded-xl">
              <div className="text-center space-y-6">
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">Certificate Ready!</h2>
                
                {/* Certificate Details */}
                <div className="bg-white p-4 rounded border border-blue-200 text-left space-y-3">
                  <p className="text-lg font-bold text-blue-800 text-center">📝 Your Certificate Details:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Student Name:</span>
                      <p className="text-blue-900 font-bold">{studentName}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Course:</span>
                      <p className="text-blue-900">AI Prompting Mastery</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Instructor:</span>
                      <p className="text-blue-900">Rahul Jadhav</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Institution:</span>
                      <p className="text-blue-900">VPPCOE & VA</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Date:</span>
                      <p className="text-blue-900">{new Date().toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}</p>
                    </div>
                  </div>
                </div>
                
                {/* Simple Setup Note */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-600">
                    <strong>Setup Required:</strong> Place your <code className="bg-gray-100 px-2 py-1 rounded text-xs">Google Certificate.pdf</code> file in <code className="bg-gray-100 px-2 py-1 rounded text-xs">/public/assets/</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 px-4 sm:px-0">
            {/* Download Button */}
            <button
              onClick={generateCertificate}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 flex items-center space-x-3 mx-auto shadow-lg w-full sm:w-auto justify-center"
            >
              <Download className="w-6 h-6 sm:w-7 sm:h-7" />
              <span>Download Certificate</span>
            </button>
            
            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 pt-4">
              <button
                onClick={onGoToLessons}
                className="text-blue-500 hover:text-blue-700 font-medium px-6 py-3 transition-colors duration-200 text-base sm:text-lg"
              >
                Review Lessons
              </button>
              <button
                onClick={onStartOver}
                className="text-gray-500 hover:text-gray-700 font-medium px-6 py-3 transition-colors duration-200 text-base sm:text-lg"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;