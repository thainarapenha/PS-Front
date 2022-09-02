import './ShareFriends.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function ShareFriends(){
    return(
        <div className='conteinerIndicacao'>
            <h3>Compartilhe a novidade</h3> 
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

            <form className='formAmigo'>
                <div className='inputAmigo'>
                    <div className='campo'>
                        <TextField fullWidth id="outlined-basic" label="Nome do seu amigo:" variant="outlined" margin="normal"/>
                    </div>
                    <div className='campo'>
                        <TextField fullWidth id="outlined-basic" label="E-mail:" variant="outlined" margin="normal"/>
                    </div>
                </div>
                
                <Button id='btnAmigo' variant="contained">Enviar agora</Button>
            </form>
        </div>
    );
}