import React, { useContext } from 'react'

import UserRouter from './app.routes'
import LoginRouter from './login.routes'
import AdmRouter from './manager.routes'

import AuthContext from '../contexts/auth'

const Routes = () => {
    const { signed } = useContext(AuthContext)
    
    console.log(signed)

    if(signed === "cliente"){
        return <UserRouter/>
    }else if(signed === "gerente"){
        return <AdmRouter/>
    }else{
        return <LoginRouter/>
    }
}

export default Routes;