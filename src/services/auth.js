export function signIn(email, senha){
    return new Promise((resolve, reject) => {
        clientes.map((value) => {
            if(value.email === email && value.senha === senha){
                resolve({
                    token: Math.random().toString(),
                    signedAs: "cliente",
                    user: value
                })
            }   
        })

        gerentes.map((value) => {
            if(value.email === email && value.senha === senha){
                resolve({
                    token: Math.random().toString(),
                    signedAs: "gerente",
                    user: value
                })
            }
        })
        
        reject(Error("Pessoa não encontrada"))
    })
}

export function updateUser(userId, user){
    return new Promise((resolve, reject) => {
        clientes = clientes.map((value) => {
            if(value.id === userId){
                resolve({
                    token: Math.random().toString(),
                    signedAs: "cliente",
                    user: user
                })
            }
        })

        reject(Error("Usuário não encontrado"))
    })
}

const gerentes = [
    {   
        avatar: { uri: "https://i.imgur.com/OB3eIyz.jpg" },
        nome: "Linaldo Florencio",
        email: "gerente@gmail.com",
        senha: "260808",
    },
]

const clientes = [
    {
        id: 0,
        avatar: { uri: "https://i.imgur.com/756nnnh.jpg" },
        nome: 'Leonardo Brito', 
        genero: 'Masculino', 
        telefone: '+55 (82) 99999-9999', 
        email: 'lbritogit@gmail.com', 
        senha: 'logo102030',
        endereco: 'Rua Dom Pedro II, 102, Arapiraca-AL' 
    },
    { 
        id: 1, 
        avatar: { uri: "https://i.imgur.com/4fdhnhu.jpg" },
        nome: 'Emanuel Vilela', 
        genero: 'Masculino', 
        telefone: '+55 (82) 99999-9999', 
        email: 'emanuelvsz@gmail.com', 
        senha: '12345',
        endereco: 'Rua Dom Pedro II, 102, Arapiraca-AL' 
    },
    { 
        id: 2,
        avatar: { uri: "https://i.imgur.com/C3fDjmr.png" },
        nome: 'Joel Neto', 
        genero: 'Masculino', 
        telefone: '+55 (82) 99999-9999', 
        email: 'joelueu@gmail.com', 
        senha: '12345',
        endereco: 'Rua Dom Pedro II, 102, Arapiraca-AL' 
    },
    { 
        id: 3,
        avatar: { uri: "https://i.imgur.com/gnfkRQF.jpg" },
        nome: 'Linaldo Florencio', 
        genero: 'Masculino', 
        telefone: '+55 (82) 99999-9999', 
        email: 'linaldolili@gmail.com', 
        senha: '260808',
        endereco: 'Rua Dom Pedro II, 102, Arapiraca-AL' 
    },

]