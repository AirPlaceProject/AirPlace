
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 1000,
    color: theme.palette.text.primary,
}));

export default function AutoGridNoWrap() {
    const [myFlights, setMyFlights] = useState([
        {
            codeFlight: 1,
            pathFlight: "טיסה פריז-ישראל"
        },
        {
            codeFlight: 2,
            pathFlight: "טיסה פריז -הודו"
        },
        {
            codeFlight: 3,
            pathFlight: "טיסה פריז -הודו"
        },
        {
            codeFlight: 4,
            pathFlight: "טיסה פריז -הודו"
        },
    ])
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
             {myFlights.map((item) => (
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 'auto',
                    p: 2,
                }}
            >
           <Grid container wrap="nowrap" spacing={2}>
                   <>
                     <Grid item>
                     <Button variant="outlined">לשיבוץ מקום בטיסה</Button>
                 </Grid>
                 <Grid item xs>
                    <Typography>{item.codeFlight} קוד טיסה</Typography>
                    <Typography>יעד {item.pathFlight} </Typography>
                     </Grid>
                       </>
                </Grid> 
            </StyledPaper>))}
        </Box>
    );
}