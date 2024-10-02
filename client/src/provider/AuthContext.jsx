import { createContext, useState } from "react";
import axios from 'axios';


export const AuthProvider = createContext(null)

const AuthContext = ({children}) => {
    const [code,setCode] = useState([])
    const [getShareId,setGetShareId] = useState('')
    console.log(getShareId);




    const data = {
        code,
        setCode,
        setGetShareId,
        getShareId,
    }
    return(
        <AuthProvider.Provider value={data}>
            {children}
        </AuthProvider.Provider>
    )

}

export default AuthContext;