// src/components/sections/Resume.tsx
const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 bg-light-background-100 dark:bg-dark-background-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          
          <div className="text-center border-b pb-4 mb-6 border-gray-300 dark:border-gray-700">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Aryan Singh Shaktawat</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">B.Tech CSE (Cyber Security & Forensics), 5th Semester</p>
            <p className="text-md text-gray-500 dark:text-gray-400">School of Computer Science, UPES, Dehradun</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-accent pb-2 mb-4">Scholastic Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>NCC ‘A’ Certificate Examination, 14 RAJ BN NCC</li>
              <li>Scored 92% in Class 10th CBSE Board, Sir Padampat Singhania School, Kota (2021)</li>
              <li>Scored 84% in Class 12th CBSE Board, Sir Padampat Singhania School, Kota (2023)</li>
              <li>Awarded multiple honors for academic excellence, sports, and Olympiads</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-accent pb-2 mb-4">Internships & Experience</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Cyber Security Intern | STF Cyber Cell, Uttarakhand Police, Dehradun</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">(July 2025 – Present)</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Assisted in real-world cyber investigations and open-source intelligence (OSINT) operations for the Special Task Force.</li>
                <li>Designed and developed a Cyber Investigation OSINT Toolkit for digital case management and evidence logging, utilizing Python and CustomTkinter.</li>
                <li>Supported field officers with digital evidence workflows and case automation in active cybercrime investigations.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Social Intern | Shine India Foundation</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Contributed to public awareness campaigns on eye donation through community outreach and event engagement.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-accent pb-2 mb-4">Key Projects</h3>
            <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Cyber Investigation OSINT Toolkit (STF Cyber Cell)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Developed a toolkit to support cyber investigations and OSINT, focused on evidence collection and centralized case management.</li>
                    <li>Utilized Python with CustomTkinter for a user-friendly desktop interface.</li>
                </ul>
            </div>
            <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">PYQ Analyzer – Repeated Question Predictor</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Built a program that allows users to input all previous years’ question papers (PYQs) and analyzes the frequency of each question.</li>
                    <li>Identifies and highlights the most repeated questions and predicts those most likely to appear in upcoming exams.</li>
                    <li>Technologies used: Python (with file handling and data analysis libraries).</li>
                </ul>
            </div>
            <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Emergency Response App ‘BACHAAV’ (CSA Hackathon 4.0)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Co-developed a mobile-based emergency alert application at UPES CSA Hackathon, ensuring robust backend and user security.</li>
                </ul>
            </div>
            <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Drone Technology Bootcamp (NIT Kurukshetra, 2024)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Hands-on experience in drone piloting, embedded systems, and sensor technology integration.</li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Flutter Workshop (Open Community, UPES)</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Completed practical training in cross-platform mobile app development using Flutter.</li>
                </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-accent pb-2 mb-4">Positions of Responsibility</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Operations Head, IEEE Signal Processing Society Student Branch Chapter, UPES (2025)</li>
              <li>Core Member, Taal Tarang (Official Dance Club, UPES)</li>
              <li>Organizing Team Member for major college fests (TAAL TARANG, UURJA’23)</li>
              <li>Active Member, CSI Student Chapter (First Year)</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-accent pb-2 mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Programming Languages:</strong> Python, C, C++</li>
              <li><strong>GUI & Interface Development:</strong> CustomTkinter (Python)</li>
              <li><strong>Web Basics:</strong> HTML, JavaScript</li>
              <li><strong>Mobile Tech:</strong> Introductory skills in Flutter</li>
              <li><strong>Event Operations:</strong> Team planning, event coordination, poster design, social media management</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
