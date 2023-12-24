/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to='/'>Task Management</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const defaultTheme = createTheme();
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, signInGoogle } = useContext(AuthContext);
    const onSubmit = async (data) => {
        const userInfo = { email: data?.email }
        signIn(data?.email, data?.password)

        try {
            Swal.fire({
                title: 'Logging in...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const res = await signIn(data?.email, data?.password);
            console.log("after");
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
                text: `${res?.user?.displayName}`,
            });
            navigate(location.state ? location.state : '/dashboard/createTask')

        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login failed. Please check your credentials.',
            });
        }
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(res => {
                console.log(res);
                const userInfo = {
                    email: res.user?.email, name: res.user?.displayName, image: res.user?.photoURL
                }
                axios.post('https://task-management-server-five-kohl.vercel.app/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            icon: 'success',
                            title: 'Login successful',

                        });
                        navigate('/dashboard/createTask')

                    })
            })
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" mx='xs' >
                <CssBaseline />
                <Box
                    sx={{
                        fontFamily: 'Syne',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" style={{ fontFamily: 'Syne' }} variant="h2">
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>

                        <TextField
                            {...register('email', { required: true })}
                            margin="normal"
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                            fontFamily="Syne"
                            autoComplete="current-email"
                            placeholder="Your Email.." />
                        {/* {errors.email && <span className="text-red-600">Email is required</span>} */}
                        {errors.email && <span style={{ color: ' red' }}>Name is required</span>}
                        <TextField
                            {...register('password', { required: true })}
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {errors.password && <span style={{ color: ' red' }} > password is required</span>}

                        <div>

                            <button onClick={handleGoogleSignIn} className=' btn bg-white shadow-xl'>
                                <FcGoogle size={40} />
                            </button>
                        </div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 1 }}
                        >
                            <Typography style={{ fontFamily: 'Syne' }}>Sign In</Typography>
                        </Button>
                        <Grid container>
                            <Grid item>
                                <h1 className=' font-Syne'>Don't Have an Account ?  <Link to='/register' className=' font-bold'>Sign Up</Link></h1>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider >
    );
};
export default Login;

