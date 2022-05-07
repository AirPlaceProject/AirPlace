import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import * as Yup from "yup"
import { Alert } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import swal from 'sweetalert';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Input = styled('input')({
    display: 'none',
});
function Copyright(props) {


    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const validationSchema = Yup.object({
    firstName: Yup.string().required('שדה חובה'),
    lastName: Yup.string().required('שדה חובה'),
    email: Yup.string().email('נא התאם לתבנית אימייל').required('אימייל זהו שדה חובה'),
    password: Yup.string().required('סיסמא זהו שדה חובה'),
})

const theme = createTheme();

export default function SignUp() {
    let navigate = useNavigate()
    const { handleSubmit, handleChange, handleBlur, values, errors, touched, dirty, isValid } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        },
        validationSchema,
        onSubmit: (values) => {

            localStorage.setItem("currentUser",JSON.stringify(values));
            swal({
                title: values.firstName + " אנו שמחים שהתחברת בהצלחה",
                icon: "success",
                button: "Aww yiss!",
            });
            navigate("../myFlights")
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="family-name"
                                    error={errors.firstName && touched.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}

                                />
                                {errors.firstName && touched.firstName && <Alert variant="outlined" style={{ borderColor: "white" }} severity="error">
                                    {errors.firstName}
                                </Alert>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    error={errors.lastName && touched.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}

                                />
                                {errors.lastName && touched.lastName && <Alert variant="outlined" style={{ borderColor: "white" }} severity="error">
                                    {errors.lastName}
                                </Alert>}
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="email"
                                    name="email"
                                    autoComplete="family-name"
                                    error={errors.email && touched.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && <Alert variant="outlined" style={{ borderColor: "white" }} severity="error">
                                    {errors.email}
                                </Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"

                                    error={errors.password && touched.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && <Alert variant="outlined" style={{ borderColor: "white" }} severity="error">
                                    {errors.password}
                                </Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                {/* <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                /> */}
                               
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!dirty || !isValid}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={() => navigate("../signIn")} style={{ cursor: "pointer" }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}