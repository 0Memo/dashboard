import { Box,Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import ProgressCircle from './ProgressCircle';

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width='100%'
            m='0 30px'
        >
            <Box
                display='flex'
                justifyContent='space-between'
            >
                {icon}
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    sx={{ color: colors.grey[100]}}
                >
                    { title }
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox