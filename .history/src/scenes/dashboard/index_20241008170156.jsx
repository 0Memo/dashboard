import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

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

            <Box>
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        fontWeight: 'bold',
                        padding: '10px 20px'
                    }}
                >
                    <DownloadOutlinedIcon
                        sx={{
                            mr: '10px'
                        }}
                    />
                    Télécharger rapports
                </Button>
            </Box>

            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
            >
                {/* ROW 1 */}
                <Box
                    gridColumn='span 3'
                    backgroundColor={ colors.primary[400] }
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='12 361'
                        subtitle='E-mail envoyés'
                        progress='0.75'
                        increase='+14%'
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    ></StatBox>
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={ colors.primary[400] }
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='431 225'
                        subtitle='Ventes'
                        progress='0.5'
                        increase='+21%'
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    ></StatBox>
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={ colors.primary[400] }
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='32 441'
                        subtitle='Nouveaux clients'
                        progress='0.30'
                        increase='+5%'
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    ></StatBox>
                </Box>
                <Box
                    gridColumn='span 3'
                    backgroundColor={ colors.primary[400] }
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox
                        title='1 325 134'
                        subtitle='Visites'
                        progress='0.80'
                        increase='+43%'
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: '26px'
                                }}
                            />
                        }
                    ></StatBox>
                </Box>

                {/* ROW 1 */}
                
            </Box>
        </Box>
    )
}

export default Dashboard;