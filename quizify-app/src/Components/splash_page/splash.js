import React from 'react';
import './splash_global.css';
import './splash_index.css';
import Logo from "./logo.png";



const Splash = () =>{

  const navigateToSignUp = () => {
    window.location.href = '/signup'
  };
  const navigateToLogin = () => {
    window.location.href = '/login'
  };
  const navigateToNotePage = () => {
    window.location.href = "/notepage"
  }
  

  return(
  <body>
    <section class="hero">
        <img src="background.jpg" alt="Quizify Landing Page Background" class="background-image"/>
        <div class="hero-content">
            <h1>Unleash the Power of Words with Quizify: Your Text-to-Quiz Playground!</h1>
            <p>Tired of boring lectures and monotonous presentations? Want to transform dry text into interactive, knowledge-boosting experiences? Quizify is your answer!</p>
            <a href="#" class="cta-button">Start Your Free Trial Now!</a>
        </div>
    </section>
    <section class="features">
        <h2>Key Features</h2>
        <div class="feature-list">
            <div class="feature">
                <img src="text-to-quiz.png" alt="Text-to-Quiz Feature Icon"/>
                <h3>Text-to-Quiz Magic</h3>
                <p>Simply input any text, and Quizify will automatically generate an engaging quiz.</p>
            </div>
            <div class="feature">
                <img src="lecture-to-learning.png" alt="Lecture-to-Learning Feature Icon"/>
                <h3>Lecture to Learning</h3>
                <p>Upload your lecture audio files, and Quizify will transcribe them into text and create a quiz.</p>
            </div>
            <div class="feature">
                <img src="customization.png" alt="Customization Feature Icon"/>
                <h3>Customization Galore</h3>
                <p>Choose question types, customize difficulty, and add multimedia for a richer experience.</p>
            </div>
            <div class="feature">
                <img src="share-and-engage.png" alt="Share and Engage Feature Icon"/>
                <h3>Share & Engage</h3>
                <p>Share quizzes with friends, colleagues, or students and track results.</p>
            </div>
        </div>
    </section>
    <section class="benefits">
        <h2>Benefits</h2>
        <ul class="benefit-list">
            <li>Boost Learning</li>
            <li>Increase Engagement</li>
            <li>Save Time</li>
            <li>Go Green</li>
        </ul>
    </section>
    <section class="call-to-action">
        <a href="#" class="cta-button">Sign Up Today and Spark Engagement!</a>
    </section>
    <footer>
        <p>&copy; 2024 Quizify. All rights reserved.</p>
    </footer>
  </body>
  );
};

export default Splash;
