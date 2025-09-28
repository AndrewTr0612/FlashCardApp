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
        <h1>� Chemistry Study App</h1>
        <p>Master chemistry concepts with interactive flashcards</p>
      </header>

      {/* Main Flashcard Section */}
      <main className="flashcard-container">
        
        {/* Card Counter Display */}
        <div className="card-counter">
          <span>Card {currentCardIndex + 1} of {flashcards.length}</span>
        </div>

        {/* Flashcard with Click Flip Animation */}
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flip-card-inner">
            
            {/* Front of Card (Question) */}
            <div className="flip-card-front">
              <div className="card-content">
                <h2>Question</h2>
                <p>{currentCard.question}</p>
                <div className="flip-hint">Click to reveal answer</div>
              </div>
            </div>

            {/* Back of Card (Answer) */}
            <div className="flip-card-back">
              <div className="card-content">
                <h2>Answer</h2>
                <p>{currentCard.answer}</p>
                <div className="flip-hint">Click to see question</div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Buttons Section */}
        <div className="controls">
          
          {/* Instructions */}
          <div className="instructions">
            <p>💡 <strong>Click on the card</strong> to flip and see the answer!</p>
          </div>

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
        <p>Built with React + Vite | Master chemistry, one card at a time! ⚗️</p>
      </footer>
    </div>
  )
}

export default App
