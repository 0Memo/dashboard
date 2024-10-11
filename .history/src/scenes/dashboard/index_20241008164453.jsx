import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PointofSaleIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddIcon from "@mui/icons-material/DownloadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Header
                    title='TABLEAU DE BORD'
                    subtitle='Bienvenue sur votre tableau de bord'
                />
            </Box>
        </Box>
    )
}

export default Dashboard;