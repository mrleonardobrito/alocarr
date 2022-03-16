import React, { createContext, useState } from "react";
import * as auth from '../services/auth'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null)
    const [loggedAs, setLoggedAs] = useState(null)

    async function signIn(email, senha){
        try{
            const response = await auth.signIn(email, senha);

            setLoggedUser(response.user)
            setLoggedAs(response.signedAs)

            return !!user
        }catch(err){
            console.log(err)
            return false
        }
    }

    function signOut(){
        setLoggedAs(null)
    }

    async function updateUser(user){
        try{
            const response = await auth.updateUser(user.id, user);
            setLoggedUser(response.user)

        }catch(err){
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ signed: loggedAs, user: loggedUser, signIn, signOut, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;