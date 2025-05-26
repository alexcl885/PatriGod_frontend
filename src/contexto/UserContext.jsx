import { createContext, useEffect, useState } from "react";
import { getToken } from "../servicios/auth";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
        const savedToken = getToken();
        if (savedToken) {
          setToken(savedToken);
        }
      }, []);
    return (
        <UserContext.Provider value={{user,setUser,token,setToken}}>
            {children}
        </UserContext.Provider>
    );

} 
export {UserContext, UserProvider}