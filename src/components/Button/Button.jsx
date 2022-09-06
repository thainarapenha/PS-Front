// import React, {useState, useEffect} from 'react';
// import { api } from '../../utils/api';
// import './Button.css'

// export function Button(){
//   const [data, setData] = useState([])

//   const fetchData = async () => {
//     const response = await api.get()
//     setData(response?.data.products)
//   }  

//   useEffect(() => {
//     fetchData()
//   }, [])
    
//     return(
//         <div className="btnBuscar">
//             <button onClick={fetchData}>Carregar mais produtos...</button>
//         </div>
//     );
// }