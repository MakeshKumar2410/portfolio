import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Projects.css';

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Nostra - E-Commerce Website',
      description: 'A modern, responsive e-commerce website designed for fashion enthusiasts. It showcases a curated collection of clothing and accessories from popular brands, offering an intuitive shopping experience with features like new arrivals, most wanted items, brand collections, newsletter signup, and customer support.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
      liveUrl: 'https://makeshkumar2410.github.io/Nostra_Ecommerce/',
      githubUrl: 'https://github.com/MakeshKumar2410/Nostra_Ecommerce',
      year: '2025'
    },
    {
      id: 2,
      title: 'DIY Bluetooth Jammer',
      description: 'Designed and implemented a Bluetooth jammer to disrupt communication within a specified range. Programmed the device to emit jamming signals, powered by a rechargeable lithium battery, with an incorporated on/off switch for activation control.',
      tech: ['ESP32', 'NRF24', 'Arduino IDE'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2025'
    },
    {
      id: 3,
      title: 'Advanced Campus Area Network',
      description: 'Designed and simulated a Campus Area Network using Cisco Packet Tracer. Configured VLANs, routing, DHCP, and Access Control Lists (ACLs). Applied network security protocols such as VPN, firewalls, and port security. Optimized network performance and ensured scalability for future growth.',
      tech: ['Cisco Packet Tracer', 'Networking', 'Network Security'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 4,
      title: 'Maksan Ecommerce Website',
      description: 'I developed a full-stack E-commerce website featuring a user-friendly frontend, a secure backend, and a dedicated admin panel. The frontend provides smooth product browsing, cart management, and checkout functionality, while the backend handles authentication, product management, orders, and payment processing. The admin panel allows efficient control of products, categories, users, and order status. This project strengthened my skills in full-stack development, database management, and building scalable, real-world web applications.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind Css'],
      liveUrl: 'https://maksan-ecommerce-frontend.vercel.app/',
      githubUrl: 'https://github.com/MakeshKumar2410/Maksan-ecommerce',
      year: '2024'
    }
  ];

  return (
    <div className={`projects ${darkMode ? 'dark' : ''}`}>
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-year">Year: {project.year}</p>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;