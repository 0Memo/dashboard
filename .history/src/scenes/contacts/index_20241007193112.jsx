import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from '../../data/mockData';
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 0.5
        },
        {
            field: 'registrarId',
            headerName: 'officier ID'
        },
        {
            field: 'name',
            headerName: 'Nom',
            flex: 1,
            cellClassName: 'name-column--cell'
        },
        {
            field: 'age',
            headerName: 'Âge',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'phone',
            headerName: 'Téléphone',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'E-mail',
            flex: 1,
        },
        {
            field: 'address',
            headerName: 'Adresse',
            flex: 1,
        },
        {
            field: 'city',
            headerName: 'Ville',
            flex: 1,
        },
        {
            field: 'zipCode',
            headerName: 'Code Postal',
            flex: 1,
        },
    ];

    return (
        <Box
            m='20px'
        >
            <Header
                title='CONTACTS'
                subtitle="Liste des Contacts pour Référence Ultérieure"
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
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                        color: `${colors.grey[100]} !important`
                    }
                }}
            >
                <DataGrid
                    rows={ mockDataContacts }
                    columns={ columns }
                />
            </Box>
        </Box>
    )
}

export default Contacts