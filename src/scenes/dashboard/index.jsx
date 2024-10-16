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
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = ({ isDashboard = true }) => {
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

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: { xs: '2px 10px', md: '10px 20px'},
                            display: { xs: 'block', md: 'flex' },
                            marginTop: { xs: '8px', md: '0' }
                        }}
                    >
                        <DownloadOutlinedIcon
                            sx={{
                                mr: '8px'
                            }}
                        />
                        Télécharger rapports
                    </Button>
                </Box>
            </Box>

            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
            >
                    {/* ROW 1 */}
                <Box
                    sx={{
                        gridColumn: { xs: 'span 12', md: 'span 3'}
                    }}
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
                    sx={{
                        gridColumn: { xs: 'span 12', md: 'span 3'}
                    }}
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
                    sx={{
                        gridColumn: { xs: 'span 12', md: 'span 3'}
                    }}
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
                    sx={{
                        gridColumn: { xs: 'span 12', md: 'span 3'}
                    }}
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

                    {/* ROW 2 */}
                <Box
                    sx={{
                        gridColumn: { xs: 'span 12', md: 'span 8'}
                    }}
                    gridRow='span 2'
                    backgroundColor={ colors.primary[400]}
                >
                    <Box
                        mt='25px'
                        p='0 30px'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Box>
                            <Typography
                                variant='h5'
                                fontWeight='600'
                                color={ colors.grey[100]}
                                
                            >
                                CA généré
                            </Typography>
                            <Typography
                                variant='h3'
                                fontWeight='bold'
                                color={ colors.greenAccent[500]}
                                
                            >
                                59 342 032 €
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: '26px',
                                        color: colors.greenAccent[500]
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box
                        height='250px'
                        mt='-20px'
                    >
                        <LineChart
                            isDashboard={ true }
                        />
                    </Box>
                </Box>
                    {/* Transactions */}
                <Box
                    sx={{
                        gridColumn: { xs: 'span 12', md: 'span 4'}
                    }}
                    gridRow='span 2'
                    backgroundColor={ colors.primary[400]}
                    overflow='auto'
                >
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom={ `4px solid ${colors.primary[500]}` }
                        colors={ colors.grey[100] }
                        p='15px'
                    >
                        <Typography
                            color={ colors.grey[100]}
                            variant='h5'
                            fontWeight='600'
                        >
                            Transactions récentes
                        </Typography>
                    </Box>
                    { mockTransactions.map((transaction, i) => (
                        <Box
                            key={ `${transaction.txId}-${i}` }
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            borderBottom={ `4px solid ${colors.primary[500]}` }
                        >
                            <Box>
                                <Typography
                                    color={ colors.greenAccent[500]}
                                    variant='h5'
                                    fontWeight='600'
                                >
                                    { transaction.txId }
                                </Typography>
                                <Typography
                                    color={ colors.grey[100]}
                                >
                                    { transaction.user }
                                </Typography>
                            </Box>
                            <Box
                                color={ colors.grey[100]}
                            >
                                { transaction.date }
                            </Box>
                            <Box
                                backgroundColor={ colors.greenAccent[500]}
                                p='5px 10px'
                                borderRadius='4px'
                            >
                                {transaction.cost} €
                            </Box>
                        </Box>
                    ))}
                </Box>

                    {/* Row 3 */}
                <Box
                    gridRow='span 2'
                    backgroundColor={ colors.primary[400] }
                    sx={{
                        height: '270px',
                        gridColumn: { xs: 'span 12', md: 'span 4'}
                    }}
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        p= '20px'
                    >
                        Campagne
                    </Typography>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        mt='15px'
                    >
                        <ProgressCircle
                            size='125'
                        />
                        <Typography
                            variant='h5'
                            color={ colors.greenAccent[500] }
                            sx={{
                                mt: '15px'
                            }}
                        >
                            CA de 48 352 € généré
                        </Typography>
                        <Typography
                        >
                            Divers dépenses et coûts inclus
                        </Typography>
                    </Box>
                </Box>
                <Box
                    gridRow='span 2'
                    backgroundColor={ colors.primary[400] }
                    sx={{
                        height: '270px',
                        gridColumn: { xs: 'span 12', md: 'span 4'}
                    }}
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        p= '20px'
                    >
                        Ventes - quantités
                    </Typography>
                    <Box
                        height='250px'
                        mt='-20px'
                    >
                        <BarChart
                            isDashboard={ true }
                        />
                    </Box>
                </Box>
                <Box
                    gridRow='span 2'
                    backgroundColor={ colors.primary[400] }
                    sx={{
                        height: '270px',
                        gridColumn: { xs: 'span 12', md: 'span 4'}
                    }}
                >
                    <Typography
                        variant='h5'
                        fontWeight='600'
                        p= '20px'
                        sx={{
                            mb: '15px'
                        }}
                    >
                        Géolocalisation des visites
                    </Typography>
                    <Box
                        height='200px'
                        p= '8px'
                    >
                        <GeographyChart
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;