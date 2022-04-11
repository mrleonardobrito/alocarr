const carros = [
    {
        id: 0,
        nome: "Gran Siena 2016",
        modelo: "TCH1234",
        cambio: "manual com 5 marchas",
        combustivel: "Gasolina/Etanol",
        imagem: require('../assets/carros/rsz_carro_1.png'),
        placa: "TCH 4567",
        quilometragem: 7.465,
        trava: 'Elétrica',
        codGPS: '12345678',
        avaliacao: [25,150,75,100,700],

        especificacoes: {
            numPassageiros: 4,
            numMalas: 3,
            numPortas: 4,
            numMarchas: 6,
            motor: "1.6",
            manual: true,
            arCondicionado: true,
        },
        detalhes: {
            cor: 'vermelho',
            ano: 2018,
            arCondicionado: true,
            chassi: '445002SKD32H32G4',
            ultimaRevisao: '17/03/22',
            proximaRevisao: '17/04/22',
            trocaDeOleo: 85,
            situacao: 2
        }
    },
   {
        id: 1,
        nome: "Volkswagen Polo 2021",
        modelo: "Polo 2021;",
        motor: "1.0",
        cambio: "manual com 5 marchas",
        combustivel: "Gasolina/Etanol",
        imagem: require('../assets/carros/rsz_carro_2.png'),
        placa: "FDP 4002",
        quilometragem: 7.465,
        trava: 'Elétrica',
        codGPS: '40028922',
        avaliacao: [30,20,70,500,1000],

        especificacoes: {
            numPassageiros: 4,
            numMalas: 3,
            numPortas: 4,
            numMarchas: 5,
            motor: "1.6",
            manual: true,
            arCondicionado: true,
        },
        detalhes: {
            cor: 'branco',
            ano: 2015,
            chassi: '256536ZFRH2J12B1',
            ultimaRevisao: '10/03/22',
            proximaRevisao: '30/04/22',
            trocaDeOleo: 10,
            situacao: 1
        }
    },
    {
        id: 2,
        nome: "Renault Duster",
        modelo: "Duster",
        motor: "2.0",
        cambio: "automático",
        combustivel: "Gasolina/Etanol",
        imagem: require('../assets/carros/rsz_carro_3.png'),
        placa: "LCD 4465",
        quilometragem: 7.465,
        trava: 'Elétrica',
        codGPS: '22982004',
        avaliacao: [10,47,600,203,280],

        especificacoes: {
            numPassageiros: 4,
            numMalas: 3,
            numPortas: 4,
            numMarchas: 4,
            motor: "1.6",
            manual: false,
            arCondicionado: true,
        },
        detalhes: {
            cor: 'preto',
            ano: 2018,
            arCondicionado: true,
            chassi: '445002SKD32H32G4',
            ultimaRevisao: '17/03/22',
            proximaRevisao: '17/04/22',
            trocaDeOleo: 85,
            situacao: 3
        }
    },
    /*
    {
        id: 5,
        nome: "Vokswagen Gol 2014",
        modelo: "TCH2468",
        motor: "1.6",
        cambio: "manual com 5 marchas",
        combustivel: "gasolina/etanol",
        imagem: require('../assets/carros/rsz_carro_4.png')
    },
    /* {
        id: 6,
        nome: "Vokswagen Gol 2014",
        modelo: "TCH2468",
        motor: "1.6",
        cambio: "manual com 5 marchas",
        combustivel: "gasolina/etanol",
        imagem: require('../assets/carros/rsz_carro_4.png')
    },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },
    // {
    //     id: Math.random(),
    //     nome: "Vokswagen Gol 2014",
    //     modelo: "TCH2468",
    //     motor: "1.6",
    //     cambio: "manual com 5 marchas",
    //     combustivel: "gasolina/etanol",
    //     imagem: require('../assets/carros/rsz_carro_4.png')
    // },*/
]

export default carros;