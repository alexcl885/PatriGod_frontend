import { useContext } from "react";
import DetallesUsuario from "../componentes/DetallesUsuario/DetallesUsuario";
import { UserContext } from "../contexto/UserContext";

const DetallesUsuarioPage = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    
    
    return (
        <>
            <DetallesUsuario usuario={user}></DetallesUsuario>
        </>
      );
}
 
export default DetallesUsuarioPage;