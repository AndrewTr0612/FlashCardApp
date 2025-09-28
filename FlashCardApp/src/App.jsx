import { useState } from 'react'
import './App.css'

function App() {
  // ==========================================
  // STATE MANAGEMENT SECTION
  // ==========================================
  // Track which card is currently displayed
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  
  // Track whether the current card is flipped (showing answer)
  const [isFlipped, setIsFlipped] = useState(false)

  // ==========================================
  // FLASHCARD DATA SECTION
  // ==========================================
  // Array of flashcard objects with questions and answers
  // You can easily add, edit, or remove cards here
  const flashcards = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, particularly web applications. It allows developers to create reusable UI components."
    },
    {
      id: 2,
      question: "What is a React Hook?",
      answer: "Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext."
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to XML/HTML. It allows you to write HTML-like code in your JavaScript files."
    },
    {
      id: 4,
      question: "What is Vite?",
      answer: "Vite is a build tool that provides fast development server and optimized builds. It's designed to be faster than traditional bundlers like Webpack."
    },
    {
      id: 5,
      question: "What is the Virtual DOM?",
      answer: "The Virtual DOM is a JavaScript representation of the actual DOM. React uses it to optimize updates by comparing changes and updating only what's necessary."
    }
  ]

  // Get current flashcard based on index
  const currentCard = flashcards[currentCardIndex]

  // ==========================================
  // EVENT HANDLER FUNCTIONS SECTION
  // ==========================================
  
  // Handle card flip animation (show/hide answer)
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  // Navigate to next card
  const handleNextCard = () => {
    // Reset flip state when changing cards
    setIsFlipped(false)
    // Move to next card, loop back to first if at end
    setCurrentCardIndex((prevIndex) => 
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Navigate to previous card
  const handlePrevCard = () => {
    // Reset flip state when changing cards
    setIsFlipped(false)
    // Move to previous card, loop to last if at beginning
    setCurrentCardIndex((prevIndex) => 
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    )
  }

  // ==========================================
  // COMPONENT RENDER SECTION
  // ==========================================
  return (
    <div className="app">
      {/* Header Section */}
      <header className="app-header">
        <h1>🧠 Flashcard Study App</h1>
        <p>Test your knowledge with interactive flashcards</p>
      </header>

      {/* Main Flashcard Section */}
      <main className="flashcard-container">
        
        {/* Card Counter Display */}
        <div className="card-counter">
          <span>Card {currentCardIndex + 1} of {flashcards.length}</span>
        </div>

        {/* Flashcard with Flip Animation */}
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
          
          {/* Front of Card (Question) */}
          <div className="card-front">
            <div className="card-content">
              <h2>Question</h2>
              <p>{currentCard.question}</p>
              <div className="flip-hint">Click "Show Answer" to reveal</div>
            </div>
          </div>

          {/* Back of Card (Answer) */}
          <div className="card-back">
            <div className="card-content">
              <h2>Answer</h2>
              <p>{currentCard.answer}</p>
              <div className="flip-hint">Click "Show Question" to go back</div>
            </div>
          </div>
        </div>

        {/* Control Buttons Section */}
        <div className="controls">
          
          {/* Flip Button */}
          <button 
            className="flip-btn"
            onClick={handleFlip}
          >
            {isFlipped ? '🔄 Show Question' : '🔍 Show Answer'}
          </button>

          {/* Navigation Buttons */}
          <div className="navigation">
            <button 
              className="nav-btn prev-btn"
              onClick={handlePrevCard}
            >
              ⬅️ Previous
            </button>
            
            <button 
              className="nav-btn next-btn"
              onClick={handleNextCard}
            >
              Next ➡️
            </button>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentCardIndex + 1) / flashcards.length) * 100}%` }}
          ></div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>Built with React + Vite | Study smart, learn faster! 📚</p>
      </footer>
    </div>
  )
}

export default App
