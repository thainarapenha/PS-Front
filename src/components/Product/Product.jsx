import React, {useState, useEffect} from 'react';
import { api } from '../../utils/api';
import './Product.css'

export function Product(){
	const [data, setData] = useState([])

	const fetchData = async () => {
		const response = await api.get()
		setData([...data, ...response?.data.products])
		// console.log(response?.data.products)
	}  

	useEffect(() => {
		fetchData()
	}, [])

	return(
		<div className="containerProduct">
			{data?.map((item, index) => 
				<div className="cards" key={index}>
					<div className="item">
						<div className="imgProduct">
							<img src={item.image}/>
						</div>

						<div className="infoProduct">
							<strong><p>{item.name}</p></strong>
							<p id="descProduct">{item.description}</p>
						</div>

						<div className="precoProduct">
							<s id="precoAnterios">De R$ {item.oldPrice -1},99</s>
							<strong><p id="precoAtual">Por R$ {item.price -1},99</p></strong>
							<p id="precoParcela">ou {item.installments.count}x de R${' '} {String(item.installments.value).replace('.', ',')}0</p>
						</div>

						<button className='btnProduct'>Comprar</button>
					</div>
				</div>
			)}
			<button className="btnProductMais" onClick={fetchData}>btn produtos</button>
		</div>
	);
}