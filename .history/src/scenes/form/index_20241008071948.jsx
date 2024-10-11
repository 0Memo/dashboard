import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
}

const userSchema = yup.object().shape({
    firstName: yup.string().required('obligatoire'),
    lastName: yup.string().required('obligatoire'),
    email: yup.string().required('obligatoire'),
    contact: yup.string().required('obligatoire'),
    address1: yup.string().required('obligatoire'),
    address2: yup.string().required('obligatoire'),
})

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const handleFormSubmit = (values) => {
        console.log(values);
    }
    
    return (
        <Box
            m='20px'
        >
            <Header
                title='CRÉER UTILISATEUR'
                subtitle='Créer un Nouveau Profil Utilisateur'
            />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                e
            </Formik>
        </Box>
    )
}

export default Form