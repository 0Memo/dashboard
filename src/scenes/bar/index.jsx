import { Box } from '@mui/material';
import Header from "../../components/Header";
import BarChart from '../../components/BarChart';

const Bar = () => {
    return (
        <Box
            m='20px'
        >
            <Header
                title='Graphique Barre'
                subtitle='Simple Graphique Barre'
            />
                <Box
                    sx={{
                        height: { xs: '60vh', md: '75vh' },
                        width: { xs: '110%', md: 'auto' }
                    }}
                >
                    <BarChart />
                </Box>
        </Box>
    )
}

export default Bar;