import { Button } from "@mui/material";
import './Product.css'
export function Product(){
    return(
        <div className="containerProduct">
            <div className="card">
                <div className="imgProduct">
                    <img src=""/>
                </div>
                <div className="infoProduct">
                    <p id="nomeProduct">nome</p>
                    <p id="descProduct">descrição</p>
                </div>
                <div className="precoProduct">
                    <p id="precoAnterios">preço</p>
                    <strong><p id="precoAtual">preço</p></strong>
                    <p id="precoParcela">preço</p>
                </div>
            </div>
            <Button/>
        </div>
    );
}