// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ShareFriends } from './components/ShareFriends/ShareFriends'
import { FormNewsLatters } from './components/FormNewsLatters/FormNewsLatters'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <FormNewsLatters/>
      <ShareFriends/>
      <Footer/>
    </div>
  )
}

export default App
