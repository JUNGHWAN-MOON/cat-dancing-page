import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import useAnimation from '../hooks/useAnimation'

const DancingCat = () => {
  const { isAnimating, toggleAnimation } = useAnimation(true)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
      if (event.code === 'KeyR') {
        event.preventDefault()
        setClickCount(0)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  const handleButtonClick = () => {
    toggleAnimation()
    setClickCount(prev => prev + 1)
  }

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>

      <div className="control-panel">
        <button
          className="animation-control-btn"
          onClick={handleButtonClick}
          aria-label={isAnimating ? '애니메이션 일시정지' : '애니메이션 시작'}
        >
          {isAnimating ? '🛑 일시정지' : '💃 춤추기'}
        </button>

        <div className="stats">
          <p>클릭 횟수: {clickCount}</p>
          <p className="keyboard-hint">
            키보드 단축키: <kbd>Space</kbd> - 토글, <kbd>R</kbd> - 리셋
          </p>
        </div>
      </div>
    </div>
  )
}

export default DancingCat