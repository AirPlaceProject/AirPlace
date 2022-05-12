import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import BasicTable from './tablePlacement';

export default function PlacmentManager() {
    const timer = React.useRef();
    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
  const [load, setLoud]=React.useState(false)
  const [showButton, setShowButton]=React.useState(true)
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
const placeSeats=()=>{
    handleToggle()
    timer.current = window.setTimeout(() => {
   
        handleClose();
        setLoud(true)
        setShowButton(false);
      }, 2000);
    
    }
// const=()={

// }
  return (
    <div>
 { showButton &&   <Button onClick={placeSeats}>שבץ טיסה זאת</Button>}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      
      >
המתן...
        <CircularProgress color="inherit" />
      </Backdrop>
      {load&&<BasicTable/>}
    </div>
  );
}