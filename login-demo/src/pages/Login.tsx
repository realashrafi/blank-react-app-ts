import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Validation Schema
const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
});

const defaultValues = {
    email: '',
    password: '',
};

export default function JwtLoginView() {
    const [errorMsg, setErrorMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const onSubmit = async (data:any) => {
        try {
            // Replace this with your login logic
            console.log(data);
            // Example: await login(data.email, data.password);
            // Redirect or show success message here
        } catch (error) {
            console.error(error);
            setErrorMsg('Login failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} sx={{ mb: 5 }}>
                <Typography variant="h4">Sign in to Your App</Typography>
                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body2">New user?</Typography>
                    <Link href="/register" variant="subtitle2">
                        Create an account
                    </Link>
                </Stack>
            </Stack>

            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

            <Stack spacing={2.5}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email address"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />

                <Link href="/forgot-password" variant="body2" color="inherit" underline="always" sx={{ alignSelf: 'flex-end' }}>
                    Forgot password?
                </Link>

                <LoadingButton
                    fullWidth
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    onClick={()=>window.location.href ='/main'}
                >
                    Login
                </LoadingButton>
            </Stack>
        </form>
    );
}
