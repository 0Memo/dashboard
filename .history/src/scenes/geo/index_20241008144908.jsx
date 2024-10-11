import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/LineChart";

const Geo = () => {
    return (
        <Box
            m='20px'
        >
            <Header
                title='Graphique Camembert'
                subtitle='Simple Graphique Camembert'
            />
            <Box
                height='75vh'
            >
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geo;