// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ShareFriends } from './components/ShareFriends/ShareFriends'
import { FormNewsLatters } from './components/FormNewsLatters/FormNewsLatters'
import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)


  return (
    <div className="App">
    <div class="headerMain">
      <Header/>
    </div>
      <FormNewsLatters/>
      <ShareFriends/>
      <div className="footerMain">
        <Footer/>
      </div>
    </div>
  )
}

export default App
