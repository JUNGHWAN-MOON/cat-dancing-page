import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 고양이 댄싱 파티 🐱</h1>
        <p>고양이가 신나게 춤을 춥니다!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
      <footer className="app-footer">
        <p>버튼을 클릭하거나 키보드로 고양이를 제어해보세요!</p>
      </footer>
    </div>
  )
}

export default App
