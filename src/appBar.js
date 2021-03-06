import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountCircle from '@mui/icons-material/AccountCircle';
const pages = ['my flights', 'Pricing', 'Blog'];
const settings = [ 'Logout'];

const ResponsiveAppBar = (props) => {
  let navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logOut=()=>{
    localStorage.removeItem("currentUser");
    handleCloseUserMenu()
    navigate("../signIn")
}
  return (
    <AppBar position="static" style={{marginBottom:"3%"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           {
         
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">my Flights</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         {  localStorage.getItem("currentUser")!=null&& 
         <>
         <Button
               // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                about
              </Button> 
              <Button
               // key={page}
                onClick={handleCloseNavMenu,()=>navigate("../myFlights")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                myFlights
              </Button> 
              <Button
               // key={page}
                onClick={handleCloseNavMenu,()=>navigate("../cards")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                friend
              </Button> </>}
          
          </Box> 

          <Box sx={{ flexGrow: 0 }}>
            {  localStorage.getItem("currentUser")!=null&&
            <Tooltip title="Open settings">
              {/* <IconButton o sx={{ p: 0 }}  size="large"> */}
              <IconButton
              onClick={handleOpenUserMenu}
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
           //    onClick={handleMenu}
               color="inherit"
              >
                <AccountCircle />
              </IconButton>
                {/* <AccountCircle /> */}
              {/* </IconButton> */}
           
            </Tooltip>}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
              style={{backgroundColor:"red"}}
               onClick={
               logOut
              
              }
              >
                  <Typography textAlign="center" >logOut</Typography>
                </MenuItem>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
        
    </AppBar>
  );
};
export default ResponsiveAppBar;
