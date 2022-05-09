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
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import axios from 'axios';

const Input = styled('input')({
    display: 'none',
});
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

export default function FormConstrain() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [open, setOpen] = useState(false);
    const [err, setErr] = useState(false)
    const [RS, setRs] = useState(0)
    const [LS, setLS] = useState(0)
    const [W, setW] = useState(0)
    const [L, setL] = useState(0)
    const [A, setA] = useState(0)
    let navigate = useNavigate()
    const [cardDet, setCardDet] = useState({
        phone: "",
        textP: "",
        pathPecture: ""

    });
    const [MyConstrain, setMyConstrain] = useState({
        "RS": 0,
        "LS": 0,
        "W": 0,
        "L": 0,
        "A": 0,
        "H": false,
        "pay": false,
        "cabin": "Economy"
    })
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   
    useEffect(() => {
        //if (((A == L ||A == RS || A == LS || A == W)&&A!=0 || (L == W || L == RS || L == LS )&&L!=0|| (RS == LS || RS == W )&&RS!=0|| LS == W)&&W!=0)
        if ((((A == L || A == RS || A == LS || A == W) && A != 0) || ((L == W || L == RS || L == LS) && L != 0) || ((RS == LS || RS == W) && RS != 0) || (LS == W) && W != 0))
            setErr(true)
        else
            setErr(false)
    }, [L, LS, W, RS, A]);
    const continueToCard = () => {
        //axios.put
        axios.post(`https://localhost:44323/api/cards`,cardDet)
    .then(res => {
     // const persons = res.data;
      console.log(res.data)
    //  setRow(res.data)
    })

     navigate("../cards")
     }
    const continueButton = () => {
        swal({
            title:  "השיבוץ אושר בהצלחה",
            text: "הודעה סופית על המושב המותאם לך תקבל לפני הטיסה",
            icon: "success",
            button: "OK",
        });
    }
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
    const form2Input = (event) => {
        if (event.target.name != "pathPecture") {
            setCardDet({
                ...cardDet,
                [event.target.name]: event.target.value
            })
        }
    }
    const form2ImgInput = (ev) => {
        setCardDet({
            ...cardDet,
            pathPecture: ev

        })
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
                                        <FormControlLabel value="first" name="cabin" control={<Radio />} label="מחלקה ראשונה" onChange={changeState} />
                                        <FormControlLabel value="business" name="cabin" control={<Radio />} label="מחלקת עסקים" onChange={changeState} />
                                        <FormControlLabel value="Economy" name="cabin" control={<Radio />} label="מחלקת תירים" onChange={changeState} />
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
                                }} id="demo-row-radio-buttons-group-label">?תשלם עבור מושב יותר טוב</FormLabel>
                                <RadioGroup
                                    sx={{
                                        fontSize: '20px',
                                        color: '#1976d2',
                                        marginLeft: "4vw",
                                    }}
                                    defaultValue="true"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="true" name="pay" control={<Radio />} label="כן" onChange={changeState} />
                                    <FormControlLabel value="false" name="pay" control={<Radio />} label="לא" onChange={changeState} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            <FormControl>
                                <FormLabel sx={{
                                    fontSize: '20px',
                                    color: '#1976d2',
                                }} id="demo-row-radio-buttons-group-label">?מושב מותאם נכה</FormLabel>
                                <RadioGroup
                                    sx={{
                                        fontSize: '20px',
                                        color: '#1976d2',
                                        marginLeft: "2vw",
                                    }}
                                    defaultValue="false"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="true" name="pay" control={<Radio />} label="כן" onChange={changeState} />
                                    <FormControlLabel value="false" name="pay" control={<Radio />} label="לא" onChange={changeState} />
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
                                    defaultValue={0}
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
                                    defaultValue={0}
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
                                    defaultValue={0}
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
                                    defaultValue={0}
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
                                    defaultValue={0}
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
                            {err && <div style={{ color: "red", margin: "15px" }}>אין אפשרות לדרג באותו ניקוד יותר מאילוץ אחד!</div>}
                        </Grid>
                    </Grid>

                    <Grid container wrap="nowrap" spacing={2}>

                        <Grid item xs>
                            <Button variant="outlined" disabled={err} onClick={continueButton}>לאישור שיבוץ</Button>
                        </Grid>
                        <Grid item xs>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                לבחירת חבר חדש לישיבה בטיסה
                            </Button>
                            {/* <Button variant="outlined" onClick={()=>setOpen(true),()=>navigate(`form2/${open}`)}>
                              לבחירת חבר חדש לישיבה בטיסה
                            </Button> */}
                        </Grid>
                    </Grid>

                </StyledPaper>
            </Box>
            <Outlet />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        שתף בכמה מילים על עצמך והוסף תמונה  על מנת לימצוא את החבר טיסה המתאים במיחוד לך
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="tell about yourself..."
                        type="text"
                        fullWidth
                        name="textP"
                        variant="standard"
                        onChange={form2Input}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="your phone number"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={form2Input}
                        name="phone"
                    />
                    <label htmlFor="icon-button-file">
                        upload image
                        <Input name="pathPecture" accept="image/*" id="icon-button-file" type="file" onChange={(event) => {
                            console.log(event.target.files[0]);
                            setSelectedImage(event.target.files[0]);
                            console.log(selectedImage);
                            form2ImgInput(event.target.files[0])
                        }} />
                        <IconButton color="primary" aria-label="upload picture" component="span" >
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    {selectedImage &&
                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={continueToCard} >Subscribe</Button>
                </DialogActions>i
            </Dialog>
        </>
    );
}