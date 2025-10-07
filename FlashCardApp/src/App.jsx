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
  
  // Track user's guess input
  const [userGuess, setUserGuess] = useState('')
  
  // Track if the guess has been submitted
  const [hasSubmitted, setHasSubmitted] = useState(false)
  
  // Track if the guess is correct
  const [isCorrect, setIsCorrect] = useState(false)
  
  // Track which questions have been viewed (for progress)
  const [viewedQuestions, setViewedQuestions] = useState(new Set([0]))

  // ==========================================
  // FLASHCARD DATA SECTION
  // ==========================================
  // Array of flashcard objects with questions and answers
  // You can easily add, edit, or remove cards here
  const flashcards = [
    {
      id: 1,
      question: "What is the atomic number of Carbon?",
      answer: "The atomic number of Carbon is 6, which means it has 6 protons in its nucleus. Carbon is essential for all organic compounds and life on Earth."
    },
    {
      id: 2,
      question: "What is the chemical formula for water?",
      answer: "H₂O - Water consists of 2 hydrogen atoms covalently bonded to 1 oxygen atom. It's a polar molecule with a bent molecular geometry."
    },
    {
      id: 3,
      question: "What is Avogadro's number?",
      answer: "6.022 × 10²³ particles per mole. This constant represents the number of atoms, molecules, or ions in one mole of any substance."
    },
    {
      id: 4,
      question: "What is the difference between an acid and a base?",
      answer: "Acids release H⁺ ions in solution (pH < 7), while bases release OH⁻ ions or accept H⁺ ions (pH > 7). Examples: HCl is an acid, NaOH is a base."
    },
    {
      id: 5,
      question: "What is an ionic bond?",
      answer: "An ionic bond forms when electrons are transferred from a metal to a nonmetal, creating oppositely charged ions that attract each other. Example: Na⁺Cl⁻"
    },
    {
      id: 6,
      question: "What is the periodic trend for atomic radius?",
      answer: "Atomic radius decreases across a period (left to right) due to increased nuclear charge, and increases down a group due to additional electron shells."
    },
    {
      id: 7,
      question: "What is oxidation and reduction?",
      answer: "Oxidation is the loss of electrons (increase in oxidation number), while reduction is the gain of electrons (decrease in oxidation number). Remember: OIL RIG."
    },
    {
      id: 8,
      question: "What is the ideal gas law equation?",
      answer: "PV = nRT, where P = pressure, V = volume, n = moles, R = gas constant (0.0821 L·atm/mol·K), and T = temperature in Kelvin."
    },
    {
      id: 9,
      question: "What are the three types of chemical bonding?",
      answer: "1) Ionic bonding (electron transfer), 2) Covalent bonding (electron sharing), and 3) Metallic bonding (delocalized electron sea)."
    },
    {
      id: 10,
      question: "What is molarity and how is it calculated?",
      answer: "Molarity (M) = moles of solute ÷ liters of solution. It measures the concentration of a solution. Example: 1 M NaCl = 1 mole NaCl per 1 L solution."
    }
  ]

  // Get current flashcard based on index
  const currentCard = flashcards[currentCardIndex]

  // ==========================================
  // EVENT HANDLER FUNCTIONS SECTION
  // ==========================================
  
  // Handle guess submission
  const handleSubmitGuess = () => {
    if (userGuess.trim() === '') return
    
    // Simple answer checking (case-insensitive, basic matching)
    const correctAnswer = currentCard.answer.toLowerCase()
    const guess = userGuess.toLowerCase().trim()
    
    // Check if guess contains key words from the answer
    const isAnswerCorrect = checkAnswer(guess, correctAnswer, currentCard.id)
    
    setIsCorrect(isAnswerCorrect)
    setHasSubmitted(true)
    setIsFlipped(true)
  }
  
  // Simple answer checking function
  const checkAnswer = (guess, correctAnswer, cardId) => {
    // Define expected answers for each card
    const expectedAnswers = {
      1: ['6', 'six'], // Carbon atomic number
      2: ['h2o', 'water'], // Water formula
      3: ['6.022', '6.022 × 10²³', '6.022e23', 'avogadro'], // Avogadro's number
      4: ['acid', 'base', 'h+', 'oh-', 'ph'], // Acid/base
      5: ['ionic', 'electron transfer', 'metal', 'nonmetal'], // Ionic bond
      6: ['decreases', 'increases', 'smaller', 'larger'], // Atomic radius
      7: ['oxidation', 'reduction', 'electrons', 'oil rig'], // Redox
      8: ['pv = nrt', 'pv=nrt', 'ideal gas'], // Gas law
      9: ['ionic', 'covalent', 'metallic'], // Bonding types
      10: ['molarity', 'moles', 'liters', 'm ='] // Molarity
    }
    
    const validAnswers = expectedAnswers[cardId] || []
    return validAnswers.some(answer => guess.includes(answer))
  }
  
  // Handle card flip - allow flipping at any time
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }
  
  // Navigate to next card (ordered sequence)
  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      const nextIndex = currentCardIndex + 1
      setCurrentCardIndex(nextIndex)
      setViewedQuestions(prev => new Set([...prev, nextIndex]))
      resetCardState()
    }
  }

  // Navigate to previous card (ordered sequence)
  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      const prevIndex = currentCardIndex - 1
      setCurrentCardIndex(prevIndex)
      resetCardState()
    }
  }
  
  // Reset card state when navigating
  const resetCardState = () => {
    setIsFlipped(false)
    setUserGuess('')
    setHasSubmitted(false)
    setIsCorrect(false)
  }

  // Reset entire progress
  const handleReset = () => {
    setCurrentCardIndex(0)
    setViewedQuestions(new Set([0]))
    resetCardState()
  }
  
  // Handle input change
  const handleInputChange = (e) => {
    setUserGuess(e.target.value)
  }

  // ==========================================
  // COMPONENT RENDER SECTION
  // ==========================================
  return (
    <div className="App">
      {/* Header Section */}
      <h1>Chemistry Flashcards</h1>
      
      {/* Progress Section */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{
              width: `${(viewedQuestions.size / flashcards.length) * 100}%`
            }}
          ></div>
        </div>
        <div className="progress-text">
          Progress: {viewedQuestions.size} / {flashcards.length}
        </div>
      </div>
      
      {/* Flashcard Section */}
      <div className="flashcard-container">
        <div 
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner">
            {/* Front Face */}
            <div className="flip-card-front">
              <div className="card-number">
                Question {currentCardIndex + 1} of {flashcards.length}
              </div>
              <div className="question">
                {currentCard.question}
              </div>
              {!hasSubmitted && (
                <div className="hint">
                  💡 Click the card to see the answer or enter your guess below!
                </div>
              )}
            </div>
            
            {/* Back Face */}
            <div className="flip-card-back">
              <div className="card-number">
                Answer {currentCardIndex + 1} of {flashcards.length}
              </div>
              <div className="answer">
                {currentCard.answer}
              </div>
              {hasSubmitted && (
                <div className="result-message">
                  Your guess: "{userGuess}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Guess Input Section - Now Below Flashcard */}
      <div className="guess-container">
        <div className="input-group">
          <input
            type="text"
            value={userGuess}
            onChange={handleInputChange}
            placeholder="Enter your answer..."
            disabled={hasSubmitted}
            className={`guess-input ${hasSubmitted ? 'disabled' : ''}`}
          />
          <button 
            onClick={handleSubmitGuess}
            disabled={hasSubmitted || userGuess.trim() === ''}
            className={`submit-btn ${hasSubmitted ? 'disabled' : ''}`}
          >
            Submit
          </button>
        </div>
        
        {/* Feedback Display */}
        {hasSubmitted && (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </div>
        )}
      </div>
      
      {/* Navigation Section */}
      <div className="navigation">
        <button 
          onClick={handlePrevCard}
          disabled={currentCardIndex === 0}
          className={`nav-btn prev-btn ${currentCardIndex === 0 ? 'disabled' : ''}`}
        >
          ← Previous
        </button>
        
        <button 
          onClick={handleReset}
          className="reset-btn"
        >
          Reset Progress
        </button>
        
        <button 
          onClick={handleNextCard}
          disabled={currentCardIndex === flashcards.length - 1}
          className={`nav-btn next-btn ${currentCardIndex === flashcards.length - 1 ? 'disabled' : ''}`}
        >
          Next →
        </button>
      </div>
      
      {/* Navigation Status */}
      <div className="nav-status">
        {currentCardIndex === 0 && (
          <span className="status-text">You're at the first card</span>
        )}
        {currentCardIndex === flashcards.length - 1 && (
          <span className="status-text">You've reached the last card</span>
        )}
        {currentCardIndex > 0 && currentCardIndex < flashcards.length - 1 && (
          <span className="status-text">Card {currentCardIndex + 1} of {flashcards.length}</span>
        )}
      </div>
    </div>
  )
}

export default App
