import { useContext } from "react";
import UserDetails from "../componentes/UserDetails/UserDetails";
import { UserContext } from "../context/UserContext";

const DetallesUsuarioPage = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    
    
    return (
        <>
            <UserDetails usuario={user}></UserDetails>
        </>
      );
}
 
export default DetallesUsuarioPage;