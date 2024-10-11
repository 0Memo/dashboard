import { Box } from '@mui/material';
import Header from "../../components/Header";
import PieChart from '../../components/BarChart';

const Pie = () => {
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
                    <PieChart />
                </Box>
        </Box>
    )
}

export default Pie;