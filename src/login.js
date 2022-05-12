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
import { FormLabel, Alert } from "@mui/material";
import Swal from "sweetalert2";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from 'axios';


const validationSchema = Yup.object({
  email: Yup.string().email('נא התאם לתבנית אימייל').required('אימייל זהו שדה חובה'),
  password: Yup.string().required('סיסמא זהו שדה חובה'),
})
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

const theme = createTheme();

export default function SignIn(props) {
  let navigate = useNavigate()

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, dirty, isValid } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.password == 1234 && (values.email == "zipi100100@gmail.com" || values.email == "naama0556772275@gmail.com" || values.email == "654321riki@gmail.com"))
        navigate("../manager")
      else {
      console.log("kkkkkkkkk")
      console.log("kkkkkkkkk")
      console.log("kkkkkkkkk")
      console.log("kkkkkkkkk")
      axios.get(`https://localhost:44323/api/Passenger`).then(res => {
         // if (res) {
console.log("jjjjjj")
            // localStorage.setItem("currentUser", JSON.stringify(res.data));
            // swal({
            //   title: values.firstName + " אנו שמחים שהתחברת בהצלחה",
            //   icon: "success",
            //   button: "Aww yiss!",
            // });
            // navigate("../myFlights")
       //   }

        }).catch(error1=>
          console.log("jjjjjjuuuuuuuuuuuu"+error1)
        )
        ;
    }
  },
   }
  )
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errors.email && touched.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}

            />
            {errors.email && touched.email && <Alert variant="outlined" style={{ borderColor: "white" }} severity="error">{errors.email}</Alert>}
            <TextField

              error={errors.password && touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            {errors.password && touched.password && <Alert variant="outlined" style={{ borderColor: "white" }} severity="error">{errors.password}</Alert>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!dirty || !isValid}

              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={() => navigate("../signUp")} style={{ cursor: "pointer" }} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}