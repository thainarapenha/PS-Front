import React from 'react'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Product } from './components/Product/Product.jsx'
import { ShareFriends } from './components/ShareFriends/ShareFriends'
import { FormNewsLatters } from './components/FormNewsLatters/FormNewsLatters'
import './App.css'

const App = () => {
  return (
    <main className="App">
      <div class="headerMain">
        <Header />
      </div>

      <FormNewsLatters />
      <Product />
      <ShareFriends />

      <div className="footerMain">
        <Footer />
      </div>
    </main>
  );
}

export default App;