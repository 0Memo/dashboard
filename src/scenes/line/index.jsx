import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box
            m='20px'
        >
            <Header
                title='Graphique Ligne'
                subtitle='Simple Graphique Ligne'
            />
            <Box
                sx={{
                    height: { xs: '60vh', md: '75vh' },
                    width: { xs: '116%', md: 'auto' },
                    margin: { xs: '-30px', md: '0px'}
                }}
            >
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line;