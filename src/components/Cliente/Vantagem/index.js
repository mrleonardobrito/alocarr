import React from 'react';
import { VantagemContainer, VantagemIcone, VantagemTexto, VantagemTitulo, Vantagens } from './styles';

const Vantagem = (props) => {
  return (
    <VantagemContainer>
        <VantagemIcone
            name={props.nomeIcone}
            size={52}
        />
        <Vantagens>
            <VantagemTitulo>{props.titulo}</VantagemTitulo>
            <VantagemTexto>{props.texto}</VantagemTexto>
        </Vantagens>
    </VantagemContainer>
  );
}

export default Vantagem;