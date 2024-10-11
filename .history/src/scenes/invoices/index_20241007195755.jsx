import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: 'id',
            headerName: 'ID'
        },
        {
            field: 'name',
            headerName: 'Nom',
            flex: 1,
            cellClassName: 'name-column--cell'
        },
        {
            field: 'email',
            headerName: 'E-mail',
            flex: 1,
        },
        {
            field: 'cost',
            headerName: 'Coût',
            flex: 1,
            renderCell: (params) => (
                <Typography
                    color={colors.greenAccent[500]}
                >
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: 'phone',
            headerName: 'Téléphone',
            flex: 1,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
    ];

    return (
        <Box
            m='20px'
        >
            <Header
                title='FACTURES'
                subtitle="Gérer l'équipe"
            />
            <Box
                m='40px 0 0 0'
                height='75vh'
                sx={{
                    '& .MuiDataGrid-root': {
                        border: 'none',
                    },
                    '& .MuiDataGrid-cell': {
                        border: 'none',
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: 'none'
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-footerContainer': {
                        borderTop: 'none',
                        backgroundColor: colors.blueAccent[700]
                    }
                }}
            >
                <DataGrid
                    rows={ mockDataTeam }
                    columns={ columns }
                />
            </Box>
        </Box>
    )
}

export default Invoices