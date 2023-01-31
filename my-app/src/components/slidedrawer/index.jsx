import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import { Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './style.css'
<<<<<<< HEAD
=======
import Searchfield from '../searchBar';
import { display } from '@mui/system';
import { Link } from 'react-router-dom';
>>>>>>> 955c40edb37bfe3325b02c80702601eb14615658
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
     
    }),
  }),
}));
const myAppBarstyle = {
  backgroundColor: "#fff",
   
   
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  backgroundColor: '#fff',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const data = [
    
    { name: "Clothing", icon: <CheckroomIcon /> },
    { name: "Footwear", icon: <CheckroomIcon /> },
    { name: "Accessories", icon: <EarbudsIcon /> },
    { name: "Others", icon: <EarbudsIcon/> },
    
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={myAppBarstyle} >
        <Toolbar>
<<<<<<< HEAD
          <IconButton
            color="#000"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
            <IconButton color="#000" aria-label="add to shopping cart">
              Cart{0}
          <AddShoppingCartIcon />
               </IconButton>
          </Typography>
=======
          <Grid container spacing={2} style={{alignItems:"center"}}>
            <Grid item xs={2}>
            
              <IconButton
                color="#000"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                style={{float: 'left'}}
              >
              <MenuIcon />
              </IconButton>
             
            </Grid>
            <Grid item xs={6} md={8}>
             <Searchfield />
            </Grid>
            <Grid item xs={2} md={2}>
             
              <IconButton color="#000" aria-label="add to shopping cart" style={{fontSize:'16px'}} >
                    Cart{0}
               <AddShoppingCartIcon />
              </IconButton>
              <Link to='/Login' style={{textDecoration:'none'}}>
                 <IconButton style={{fontSize:'16px'}}>
                  Login
                  <LoginIcon />
                 </IconButton>
              </Link>
             
            </Grid>
          </Grid>
          
            
          
            
>>>>>>> 955c40edb37bfe3325b02c80702601eb14615658
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
<<<<<<< HEAD
          {['Clothing', 'FootWear', 'Aceessories', 'Others'].map((text, index) => (
            <ListItem key={text} disablePadding>
=======
          {data.map((item,  index) => (
            <ListItem  disablePadding>
>>>>>>> 955c40edb37bfe3325b02c80702601eb14615658
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText   >
                {item.name}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
    </Box>
  );
}