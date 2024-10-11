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

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0,9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup
                .string()
                .required('obligatoire'),
    lastName: yup
                .string()
                .required('obligatoire'),
    email: yup
                .string()
                .email('e-mail invalide')
                .required('obligatoire'),
    contact: yup
                .string()
                .matches(phoneRegExp, "le numéro n'est pas valide")
                .required('obligatoire'),
    address1: yup
                .string()
                .required('obligatoire'),
    address2: yup
                .string()
                .required('obligatoire'),
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
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => 
                <form
                    onSubmit={handleSubmit}
                >
                    <Box
                        display='grid'
                        gap='30px'
                        gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                        sx={{
                            '& > div': {
                                gridColumn: isNonMobile ? undefined : 'span 4'
                            }
                        }}
                    >
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Prénom'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name='firstName'
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: 'span 2'}}
                        >

                        </TextField>
                    </Box>
                </form>}
            </Formik>
        </Box>
    )
}

export default Form