import React from 'react';
import {Box, Typography} from "@mui/material";

function Main() {
    return (
        <div>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Main Page
                </Typography>
                <Typography variant="body1" gutterBottom>
                    This is the main content of your application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et sem posuere, quis scelerisque magna hendrerit. Fusce vitae eros nec justo semper cursus.
                </Typography>
            </Box>
        </div>
    );
}

export default Main;