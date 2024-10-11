import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: 'id',
            headerName: 'ID'
         },
         {
            field: 'name',
            headerName: 'Name'
         }
    ];

    return (
        <Box
        >
            <Header
                title='ÉQUIPE'
                subtitle="Gérer l'équipe"
            />
            <Box>
                <DataGrid
                    rows={ mockDataTeam }
                    columns={ columns }
                >

                </DataGrid>
            </Box>
        </Box>
    )
}

export default Team