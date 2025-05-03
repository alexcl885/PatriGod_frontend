import { Box, Typography } from "@mui/material";
import Ranking from "../componentes/Ranking/Ranking";

const RankingPage = () => {
    return ( 
        <Box>
            <Typography variant="h4" gutterBottom align="center" color="white">
                Ranking de Ciudades Patrimonio
            </Typography>
            <Ranking></Ranking>
        </Box>
    );
}
 
export default RankingPage;