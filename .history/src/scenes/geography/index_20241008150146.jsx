import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geography = () => {
    return (
        <Box
            m='20px'
        >
            <Header
                title='Graphique Géo'
                subtitle='Simple Graphique Géo'
            />
            <Box
                height='75vh'
            >
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geography;