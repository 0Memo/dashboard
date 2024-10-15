import { Box } from '@mui/material';
import Header from "../../components/Header";
import PieChart from '../../components/PieChart';

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
                sx={{
                    height: { xs: '60vh', md: '75vh' },
                    width: { xs: '100%', md: 'auto' }
                }}
            >
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;