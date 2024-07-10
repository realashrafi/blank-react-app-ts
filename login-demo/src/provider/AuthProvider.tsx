import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from "../components/Logo";


// ----------------------------------------------------------------------

const METHODS = [
    {
        id: 'jwt',
        label: 'Jwt',
        path: '/login/jwt',
        icon: '/assets/icons/auth/ic_jwt.svg',
    },
    {
        id: 'firebase',
        label: 'Firebase',
        path: '/login/firebase',
        icon: '/assets/icons/auth/ic_firebase.svg',
    },
    {
        id: 'amplify',
        label: 'Amplify',
        path: '/login/amplify',
        icon: '/assets/icons/auth/ic_amplify.svg',
    },
    {
        id: 'auth0',
        label: 'Auth0',
        path: '/login/auth0',
        icon: '/assets/icons/auth/ic_auth0.svg',
    },
];

type Props = {
    title?: string;
    image?: string;
    children: React.ReactNode;
};

export default function AuthClassicLayout({ children, image, title }: Props) {
    const theme = useTheme();
    const [method, setMethod] = useState('jwt');

    const bgGradient = ({ color, imgUrl }:any) => ({
        background: `linear-gradient(to bottom, ${color}, ${color}), url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    });

    const renderLogo = (
        <Logo
            sx={{
                zIndex: 9,
                position: 'absolute',
                m: { xs: 2, md: 5 },
            }}
        />
    );

    const renderContent = (
        <Stack
            sx={{
                width: 1,
                mx: 'auto',
                maxWidth: 480,
                px: { xs: 2, md: 8 },
                py: { xs: 15, md: 30 },
            }}
        >
            {children}
        </Stack>
    );

    const renderSection = (
        <Stack
            flexGrow={1}
            alignItems="center"
            justifyContent="center"
            spacing={10}
            sx={{
                ...bgGradient({
                    color: alpha(
                        theme.palette.background.default,
                        theme.palette.mode === 'light' ? 0.88 : 0.94
                    ),
                    imgUrl: '/assets/background/overlay_2.jpg',
                }),
            }}
        >
            <Typography variant="h3" sx={{ maxWidth: 480, textAlign: 'center' }}>
                {title || 'Hi, Welcome back'}
            </Typography>

            <Box
                component="img"
                alt="auth"
                src={image || '/assets/illustrations/illustration_dashboard.png'}
                sx={{ maxWidth: 720 }}
            />

            <Stack direction="row" spacing={2}>
                {METHODS.map((option) => (
                    <Tooltip key={option.label} title={option.label}>
                        <Link component={RouterLink} to={option.path} onClick={() => setMethod(option.id)}>
                            <Box
                                component="img"
                                alt={option.label}
                                src={option.icon}
                                sx={{
                                    width: 32,
                                    height: 32,
                                    ...(method !== option.id && {
                                        filter: 'grayscale(100%)',
                                    }),
                                }}
                            />
                        </Link>
                    </Tooltip>
                ))}
            </Stack>
        </Stack>
    );

    return (
        <Stack
            component="main"
            direction={{ xs: 'column', md: 'row' }}
            sx={{
                minHeight: '100vh',
            }}
        >
            {renderLogo}

            {renderSection}

            {renderContent}
        </Stack>
    );
}
