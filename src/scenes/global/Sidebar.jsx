import { useState } from 'react';
import { Drawer, Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box
        onClick={() => setSelected(title)}
        component={Link} to={to}
        sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            textDecoration: 'none',
            color: colors.grey[100],
            cursor: 'pointer',
            '&:hover': { backgroundColor: colors.primary[500] }
        }}
        >
        {icon}
        <Typography sx={{ ml: 2 }}>{title}</Typography>
        </Box>
    );
};

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            <Box
                sx={{
                width: 250,
                height: '100vh',
                backgroundColor: colors.primary[400],
                color: colors.grey[100],
                p: 1,
                }}
            >
                <Box
                mb='10px'
                >
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <img
                            alt='profile-user'
                            width='50px'
                            height='50px'
                            src={`../../assets/user.png`}
                            style={{ cursor: 'pointer', borderRadius: '50%'}}
                        />
                    </Box>

                    <Box textAlign='center'>
                        <Typography
                        variant='h4'
                        color={colors.grey[100]}
                        fontWeight='bold'
                        sx={{ m: '5px 0 0 0' }}
                        >
                        Guillermo
                        </Typography>
                        <Typography
                        variant='h5'
                        color={colors.greenAccent[500]}
                        fontWeight='bold'
                        sx={{ m: '5px 0 0 0' }}
                        >
                        Admin
                        </Typography>
                    </Box>
                </Box>
                <Item title="Tableau de bord" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="L'équipe" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Information Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Factures" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Formulaire profil" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Calendrier" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="FAQ" to="/faq" icon={<HelpOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Graph barre" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Graph camembert" to="/pie" icon={<PieChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Graph ligne" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                <Item title="Graph géo" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Box>
        </Drawer>
    );
};

export default Sidebar;