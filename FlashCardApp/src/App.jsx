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
  
  // Track previously shown cards to avoid immediate repeats
  const [previousCards, setPreviousCards] = useState([0])
  
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
  
  // Generate random card index that's different from current card
  const getRandomCardIndex = () => {
    if (flashcards.length <= 1) return 0;
    
    let randomIndex;
    let attempts = 0;
    const maxAttempts = 50; // Prevent infinite loop
    
    do {
      randomIndex = Math.floor(Math.random() * flashcards.length);
      attempts++;
    } while (randomIndex === currentCardIndex && attempts < maxAttempts);
    
    return randomIndex;
  }
  
  // Handle card flip animation (show/hide answer)
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }
  
  // Navigate to random next card
  const handleNextCard = () => {
    // Reset flip state when changing cards
    setIsFlipped(false)
    
    // Get a random card index
    const randomIndex = getRandomCardIndex()
    
    // Update current card and add to previous cards history
    setCurrentCardIndex(randomIndex)
    setPreviousCards(prev => {
      const newHistory = [randomIndex, ...prev]
      // Keep only last 3 cards to avoid recent repeats
      return newHistory.slice(0, 3)
    })
    
    // Mark this question as viewed
    setViewedQuestions(prev => new Set([...prev, randomIndex]))
  }

  // Navigate to previous card from history
  const handlePrevCard = () => {
    // Reset flip state when changing cards
    setIsFlipped(false)
    
    if (previousCards.length > 1) {
      // Get the second-to-last card from history
      const prevIndex = previousCards[1]
      setCurrentCardIndex(prevIndex)
      
      // Remove the current card from history and move to previous
      setPreviousCards(prev => prev.slice(1))
    } else {
      // If no history, just get a random card
      const randomIndex = getRandomCardIndex()
      setCurrentCardIndex(randomIndex)
      
      // Mark this question as viewed
      setViewedQuestions(prev => new Set([...prev, randomIndex]))
    }
  }

  // Reset progress and start over
  const handleReset = () => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setPreviousCards([0])
    setViewedQuestions(new Set([0]))
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
          <span>🎲 Random Mode | Viewed: {viewedQuestions.size} | Remaining: {flashcards.length - viewedQuestions.size} of {flashcards.length}</span>
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
              ↩️ Back
            </button>
            
            <button 
              className="nav-btn next-btn"
              onClick={handleNextCard}
            >
              🎲 Next
            </button>
            
            {viewedQuestions.size === flashcards.length && (
              <button 
                className="nav-btn reset-btn"
                onClick={handleReset}
              >
                🔄 Reset
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${(viewedQuestions.size / flashcards.length) * 100}%` }}
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
