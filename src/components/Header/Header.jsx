import './Header.css'
import Button from '@mui/material/Button';

export function Header(){
    return(
        <div className="cabecalho">
            <header>
                <div className='texto'>
                    <h2>Uma seleção de produtos</h2>
                    <strong><h1>Especial para você</h1></strong>
                    <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                </div>

                <nav className='navbar'>
                    <ul>
                        <li><Button variant="contained">Conheça a Linx</Button></li>
                        <li><Button variant="contained">Ajude o algorítimo</Button></li>
                        <li><Button variant="contained">Seus produtos</Button></li>
                        <li><Button variant="contained">Compartilhe</Button></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}