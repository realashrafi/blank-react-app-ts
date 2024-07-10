import React from 'react';
import { AppBar, Container, CssBaseline, Toolbar, Typography, Button, IconButton, Stack, Box, Avatar, Badge } from '@mui/material';
import { Notifications, Menu as MenuIcon } from '@mui/icons-material';

const MainLayout = ({ children }:any) => {
    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Main Page
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <Button color="inherit">Login</Button>
                        <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* Padding for the fixed AppBar */}
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                {children}
            </Container>
        </div>
    );
};

export default MainLayout;
