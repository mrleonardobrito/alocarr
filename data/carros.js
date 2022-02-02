import duster from './img/carro_duster.png';
import dusterFront from '../car_photos/renault_duster/duster_front.jpg'
import dusterBack from '../car_photos/renault_duster/duster_back.jpg'
import dusterDrift from '../car_photos/renault_duster/duster_drift.jpg'


import siena from './img/carro_siena.png';
import hb20 from './img/carro_hb20.png';


export default renault_duster = [
    {
        id: 1,
        nomeCarro: 'Renault Duster',
        placa: 'JML 9605',
        proxRevisao: '26/09/2022',
        trocaOleo: '102km',
        situacao: 1,
        imagem: duster,
        quilometragem: 10.456,
        especificacoes: {
            passageiros: 5,
            arcondicionardo: true,
            manual: true,
            malas: 3,
            portas: 4,
            motor: 1.6,
            imagens: [dusterFront, dusterBack, dusterDrift],
        },
        detalhes: {
            cor: 'branco',
            modelo: 'Renault Duster',
            ano: '2018',
            combustivel: 'Diesel/Gasolina',
            machas: 5,
            travaEletrica: true,
            chassi: '9BHBG41DBJP794125',
            ultimaRevisao: '10/08/2021',
            proximaRevisao: '10/02/2022',
            codigoGPS: 40028922
        }
    },
]