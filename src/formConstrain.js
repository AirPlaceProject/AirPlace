import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 1000,
    color: theme.palette.text.primary,
    border: '2px solid lightGrey',
    borderRadius: '1vw',
    margin: 'auto',
    width: '50vw'
}));

export default function AutoGridNoWrap() {
    const [RS, setRs] = useState(30)
    const [LS, setLS] = useState(30)
    const [W, setW] = useState(30)
    const [L, setL] = useState(30)
    const [A, setA] = useState(30)
    useEffect(() => {
        //if (((A == L ||A == RS || A == LS || A == W)&&A!=0 || (L == W || L == RS || L == LS )&&L!=0|| (RS == LS || RS == W )&&RS!=0|| LS == W)&&W!=0)
        if ((((A == L || A == RS || A == LS || A == W) && A != 0) || ((L == W || L == RS || L == LS) && L != 0) || ((RS == LS || RS == W) && RS != 0) || (LS == W) && W != 0))
            setErr(true)
        else
            setErr(false)
    }, [L, LS, W, RS, A]);
    const [MyConstrain, setMyConstrain] = useState({
        "RS": 0,
        "LS": 0,
        "W": 0,
        "L": 0,
        "A": 0,
        "pay": false,
        "cabin": "Economy"
    })
    const [err, setErr] = useState(false)
    const changeState = (e, newValue) => {
        setMyConstrain({
            ...MyConstrain,
            [e.target.name]: e.target.value
        })
        console.log(A + "A")
        console.log(W + "W")
        console.log(L + "L")
        console.log(LS + "LS")
        console.log(RS + "RS")
        if ((((A == L || A == RS || A == LS || A == W) && A != 0) || ((L == W || L == RS || L == LS) && L != 0) || ((RS == LS || RS == W) && RS != 0) || (LS == W) && W != 0))
            setErr(true)
        else
            setErr(false)
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
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
                                {/* <Button variant="outlined">לשיבוץ מקום בטיסה</Button> */}
                            </Grid>
                            <Grid item xs>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Economy"
                                        name="radio-buttons-group"
                                    >
                                        <FormLabel sx={{
                                            fontSize: '20px',
                                            color: '#1976d2',

                                        }} id="demo-radio-buttons-group-label">מחלקה</FormLabel>
                                        <FormControlLabel value="first" control={<Radio />} label="מחלקה ראשונה" onChange={changeState} />
                                        <FormControlLabel value="business" control={<Radio />} label="מחלקת עסקים" onChange={changeState} />
                                        <FormControlLabel value="Economy" control={<Radio />} label="מחלקת תירים" onChange={changeState} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            <FormControl>
                                <FormLabel sx={{
                                    fontSize: '20px',
                                    color: '#1976d2',
                                }} id="demo-row-radio-buttons-group-label">תשלם עבור מושב יותר טוב?</FormLabel>
                                <RadioGroup
                                    sx={{
                                        fontSize: '20px',
                                        color: '#1976d2',
                                        marginLeft: "4vw",
                                    }}
                                    defaultValue="false"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="כן" onChange={changeState} />
                                    <FormControlLabel value="false" control={<Radio />} label="לא" onChange={changeState} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>

                        <Grid item xs>
                            <FormLabel sx={{
                                fontSize: '20px',
                                color: '#1976d2',
                                margin: "8px"
                            }} id="demo-row-radio-buttons-group-label">צד ימין</FormLabel>
                            <Box sx={{ width: 300, marginLeft: "15vw" }}>
                                <Slider
                                    name="RS"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={0}
                                    max={50}
                                    onChangeCommitted={(_, newValue) => setRs(newValue)}
                                    onChange={changeState}

                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>

                        <Grid item xs>
                            <FormLabel sx={{
                                fontSize: '20px',
                                color: '#1976d2',
                                margin: "8px"
                            }} id="demo-row-radio-buttons-group-label">צד שמאל</FormLabel>
                            <Box sx={{ width: 300, marginLeft: "15vw" }}>
                                <Slider
                                    name="LS"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={0}
                                    max={50}
                                    onChange={changeState}
                                    onChangeCommitted={(_, newValue) => setLS(newValue)}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>

                        <Grid item xs>
                            <FormLabel sx={{
                                fontSize: '20px',
                                color: '#1976d2',
                                margin: "8px"
                            }} id="demo-row-radio-buttons-group-label">מושב ליד חלון</FormLabel>
                            <Box sx={{ width: 300, marginLeft: "15vw" }}>
                                <Slider
                                    name="W"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={0}
                                    max={50}
                                    onChange={changeState}
                                    onChangeCommitted={(_, newValue) => setW(newValue)}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>

                        <Grid item xs>
                            <FormLabel sx={{
                                fontSize: '20px',
                                color: '#1976d2',
                                margin: "8px"
                            }} id="demo-row-radio-buttons-group-label">מושב מעבר </FormLabel>
                            <Box sx={{ width: 300, marginLeft: "15vw" }}>
                                <Slider
                                    name="A"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={0}
                                    max={50}
                                    onChange={changeState}
                                    onChangeCommitted={(_, newValue) => setA(newValue)}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container wrap="nowrap" spacing={2}>

                        <Grid item xs>
                            <FormLabel sx={{
                                fontSize: '20px',
                                color: '#1976d2',
                                margin: "8px"
                            }} id="demo-row-radio-buttons-group-label">מושב מרווח רגליים </FormLabel>
                            <Box sx={{ width: 300, marginLeft: "15vw" }}>
                                <Slider
                                    name="L"
                                    aria-label="Temperature"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={0}
                                    max={50}
                                    onChange={(_, newValue) => {

                                        setL(newValue)
                                        changeState(_)
                                    }}
                                    onChangeCommitted={(_, newValue) => {

                                        setL(newValue)
                                    }}
                                />
                            </Box>
                            {err && <div style={{ color: "red" }}>אין אפשרות לדרג באותו ניקוד יותר מאילוץ אחד!</div>}
                        </Grid>
                    </Grid>
                </StyledPaper>
            </Box>
        </>
    );
}