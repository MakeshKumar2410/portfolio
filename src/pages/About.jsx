import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { darkMode } = useTheme();

  const skills = [
    { name: 'Networking Concepts', level: 'Advanced' },
    { name: 'TCP/IP, Subnetting, Routing', level: 'Advanced' },
    { name: 'Network Security', level: 'Advanced' },
    { name: 'Firewall Configuration, VPN, ACLs', level: 'Advanced' },
    { name: 'Wireshark, Cisco Packet Tracer, Nmap', level: 'Advanced' },
    { name: 'Kali Linux, Metasploit', level: 'Intermediate' },
    { name: 'FTK Imager, Write Blocker', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'HTML, CSS, JavaScript', level: 'Intermediate' },
    { name: 'Windows, Linux', level: 'Advanced' },
    { name: 'Tailwind Css, React.js', level: 'Intermediate' },
    { name: 'Database-MongoDB', level: 'Intermediate' }
  ];

  return (
    <div className={`about ${darkMode ? 'dark' : ''}`}>
      <div className="about-container">
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            I'm Makesh Kumar, a dedicated cybersecurity and digital forensics professional 
            with a passion for ethical hacking, network security, and digital investigation. 
            My journey in cybersecurity started with curiosity about how systems can be 
            secured and how digital evidence can be recovered and analyzed.
          </p>
          <p>
            I specialize in ethical hacking, network security, and cyber forensics, with 
            hands-on experience in penetration testing, vulnerability assessment, and digital 
            evidence preservation. When I'm not working on security projects, I enjoy 
            exploring new cybersecurity tools and techniques, contributing to security 
            research, and continuously learning to stay at the forefront of cybersecurity.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Master of Computer Application</h3>
            <p className="institution">Hindisthan Arts and Science College, Coimbatore</p>
            <p className="duration">CGPA: 8.0 | April 2027</p>
          </div>
          <div className="education-item">
            <h3>B.Sc. Digital and Cyber Forensics Science</h3>
            <p className="institution">Nehru Arts and Science College, Coimbatore</p>
            <p className="duration">CGPA: 7.5 | April 2025</p>
          </div>
          <div className="education-item">
            <h3>Higher Secondary</h3>
            <p className="institution">State Board of Tamil Nadu</p>
            <p className="duration">Percentage: 6.0 | May 2022</p>
          </div>
          <div className="education-item">
            <h3>SSLC</h3>
            <p className="institution">State Board of Tamil Nadu</p>
            <p className="duration">Percentage: 6.5 | March 2020</p>
          </div>
        </section>

        <section className="about-section">
          <h2>Internship Experience</h2>
          <div className="experience-item">
            <h3>Ethical Hacking Intern</h3>
            <p className="company">HackOver Security, Coimbatore, India</p>
            <p className="duration">2024</p>
            <p>
              Learned and applied ethical hacking techniques, including penetration testing 
              and vulnerability assessments. Gained hands-on experience with ethical hacking 
              tools such as Kali Linux and Metasploit. Performed network security testing 
              and simulated cyber-attacks to identify vulnerabilities. Assisted in securing 
              networks through vulnerability scans and penetration testing.
            </p>
          </div>
          <div className="experience-item">
            <h3>Training in Cyber Forensics</h3>
            <p className="company">Mibiz Cyber Forensics, Kerala, India</p>
            <p className="duration">2025</p>
            <p>
              Gained knowledge in SIM forensics and mobile device data extraction techniques. 
              Worked with forensic tools such as FTK Imager and Write Blocker for preserving 
              digital evidence. Participated in forensic data recovery and evidence preservation 
              for cybercrime investigations. Analyzed digital footprints and assisted in tracking 
              malicious activities.
            </p>
          </div>
          <div className="experience-item">
            <h3>Internship in Computer Networks</h3>
            <p className="company">HackOver Security, Coimbatore, India</p>
            <p className="duration">2024</p>
            <p>
            I completed an internship in Computer Networking, gaining hands-on experience in network configuration, troubleshooting, and core concepts such as TCP/IP, routing and switching, IP addressing, and basic network security. This experience improved my practical understanding of real-world networks and strengthened my technical and problem-solving skills.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Certifications</h2>
          <div className="education-item">
            <h3>Cisco Certified Network Association (CCNA)</h3>
            <p className="institution">GUVI</p>
            <p className="duration">2025</p>
          </div>
          <div className="education-item">
            <h3>Certified Ethical Hacking</h3>
            <p className="institution">HackOver Security</p>
            <p className="duration">In Progress</p>
          </div>
          <div className="education-item">
            <h3>HTML and CSS, JavaScript</h3>
            <p className="institution">GUVI</p>
            <p className="duration">2024</p>
          </div>
          <div className="education-item">
            <h3>Full Stack Development</h3>
            <p className="institution">Error Makesh Clever</p>
            <p className="duration">2026</p>
          </div>
          <div className="education-item">
            <h3>Cyber Tech Mastery</h3>
            <p className="institution">Selfmade Ninja Accademy </p>
            <p className="duration">2026</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;