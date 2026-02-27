import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './components/MainPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <MainPage/>
    </LanguageProvider>
  )
}

export default App
