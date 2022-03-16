import React from 'react';

import Estrelas from './Estrelas';
import { dadosGerais } from '../../../../utils/avaliacoes';
import {  Nota, NotaGeralContainer, NumeroAvaliacoes } from './styles';

const NotaGeral = () => {
  return (
      <NotaGeralContainer>
          <Nota>{dadosGerais.nota.toLocaleString('pt-br')}</Nota>
          <Estrelas index={dadosGerais.nota}/>
          <NumeroAvaliacoes>{dadosGerais.numeroDeAvaliacoes.toLocaleString('pt-br')}</NumeroAvaliacoes>
      </NotaGeralContainer>
  );
}



export default NotaGeral;