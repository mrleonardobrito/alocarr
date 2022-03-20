const carros = [
    {
        id: 1,
        nome: "Gran Siena 2016",
        modelo: "TCH1234",
        motor: "1.6",
        cambio: "manual com 5 marchas",
        combustivel: "gasolina/etanol",
        arCondicionado: true,
        imagem: require('../assets/carros/rsz_carro_1.png')
    },
   {
        id: 2,
        nome: "Volkswagen Polo 2021",
        modelo: "TCH4567",
        motor: "1.0",
        cambio: "manual com 5 marchas",
        combustivel: "gasolina/etanol",
        imagem: require('../assets/carros/rsz_carro_2.png')
    },
    {
        id: 3,
        nome: "Renault Duster",
        modelo: "TCH7890",
        motor: "2.0",
        cambio: "automático",
        combustivel: "gasolina/etanol",
        imagem: require('../assets/carros/rsz_carro_3.png')
    },
    {
        id: 5,
        nome: "Vokswagen Gol 2014",
        modelo: "TCH2468",
        motor: "1.6",
        cambio: "manual com 5 marchas",
        combustivel: "gasolina/etanol",
        imagem: require('../assets/carros/rsz_carro_4.png')
    },
    {
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
    // },
]

export default carros;