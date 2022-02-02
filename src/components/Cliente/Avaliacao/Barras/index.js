import React from 'react';
import { dadosGerais } from '../../../../utils/avaliacoes';
import { BarraContainer, BarraIndice, BarraMaximo, BarrasContainer } from './styles';

const Barras = () => {
  return (
    <BarrasContainer>
        <Barra index={dadosGerais.cincoEstrelas} max={dadosGerais.numeroDeAvaliacoes} />
        <Barra index={dadosGerais.quatroEstrelas} max={dadosGerais.numeroDeAvaliacoes} />
        <Barra index={dadosGerais.tresEstrelas} max={dadosGerais.numeroDeAvaliacoes} />
        <Barra index={dadosGerais.duasEstrelas} max={dadosGerais.numeroDeAvaliacoes} />
        <Barra index={dadosGerais.umaEstrela} max={dadosGerais.numeroDeAvaliacoes} />
    </BarrasContainer>
  );
}

const Barra = ({ index, max }) => {
    return(
        <BarraContainer>
            <BarraIndice width={(index/max) * 100}/>
            <BarraMaximo/>
        </BarraContainer>
    )
}

export default Barras;