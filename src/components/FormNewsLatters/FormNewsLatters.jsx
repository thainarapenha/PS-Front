import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import './FormNewsLatters.css'

export function FormNewsLatters(){
  return(
    <div className='containerNewsLatters'>
      <div className='textoNewsLatters'>
        <h2>Ajude o algorítimo a ser mais certeiro</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. 
            Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. 
            Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. 
            Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            
        <p>Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna. 
            Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, 
            pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. 
            Quisque ut neque mattis, consequat velit ut, ultrices orci. 
            Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. 
            Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, 
            at mattis augue est vel metus.</p>
      </div>

      <form className='formNewsLatter' >
        <TextField id="nomeNews" label="Nome:" variant="outlined" margin="normal"/>
        <TextField  id="emailNews" label="E-mail:" variant="outlined" margin="normal"/>
        <TextField id="cpfNews" label="CPF:" variant="outlined" margin="normal"/>

        <div className='radioButtonSexo'>
          <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
          <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
        </div>

        <Button id='btnNews' variant="contained">Enviar agora</Button>
      </form>
    </div>
  );
}