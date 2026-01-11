import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';

const Home = () => {
  const { darkMode } = useTheme();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const professions = ['Network Engineer', 'Web Developer', 'Ethical Hacker'];

  useEffect(() => {
    const currentProfession = professions[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseAfterTyping = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentProfession.length) {
          setDisplayedText(currentProfession.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentProfession.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % professions.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <div className="home-container">
        <div className="home-content">
          {/* <div className="avatar-wrapper">
            <div className="avatar-placeholder">
              <img src='src/assets/avata_image.jpeg'></img>
            </div>
          </div> */}
          <h1 className="home-title">
            Hi, I'm Makesh Kumar
          </h1>
          <div className="profession-container">
            <span className="profession-text">
              {displayedText}
              <span className="cursor">|</span>
            </span>
          </div>
          <p className="home-intro">
            A Cybersecurity and Digital Forensics Professional specializing in ethical hacking, 
            network security, and digital investigation. Passionate about securing systems and 
            uncovering digital evidence.
          </p>
          <div className="home-links">
            <Link to="/about" className="home-btn">
              Learn More
            </Link>
            <Link to="/projects" className="home-btn secondary">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;