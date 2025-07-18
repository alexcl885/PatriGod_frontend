import { Button, Box } from "@mui/material";
import ManagementUser from "../componentes/ManagementUser/ManagementUser";
import { Link } from "react-router-dom";

const GestionUsuariosPage = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, mr: 2 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/actualizacionPatrigod"
                    sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        borderRadius: 2,
                        px: 3,
                        py: 1.5,
                        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
                    }}
                >
                    Enviar actualización
                </Button>
            </Box>
            <ManagementUser />
        </>
    );
};

export default GestionUsuariosPage;
