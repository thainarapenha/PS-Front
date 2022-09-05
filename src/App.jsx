import React, { useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
// import { Button } from './components/Button/Button.jsx'
import { Product } from './components/Product/Product.jsx'
import { ShareFriends } from './components/ShareFriends/ShareFriends'
import { FormNewsLatters } from './components/FormNewsLatters/FormNewsLatters'
import { api } from './utils/api.jsx'
import './App.css'

const App = (props) => {  
	const [products, setProduct] = useState(props.products)
	
	const fetchData = async () => {
		const response = await api.get()
		setProduct(response?.data.products)
		// console.log(response?.data.products)
	}  

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<main className="App">
			<div class="headerMain">
				<Header/>
			</div>

			<FormNewsLatters/>
			<Product/>
			{/* <Button/> */}

			<ShareFriends/>

			<div className="footerMain">
				<Footer/>
			</div>
		</main>
	);
}

export default App;