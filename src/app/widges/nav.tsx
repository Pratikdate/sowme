
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar  from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar as Avatar_} from "@nextui-org/react";

import MenuIcon from '@mui/icons-material/Menu';

    
    const pages = [
      {
        href:'about',
        key: "1",
        label: 'About',
      },
      {
        href:'plant&offset',
        key: "3",
        label: 'Plant & offset',
      },
      {
        href:'career',
        key: "2",
        label: 'Career',
      },
     
      
      {
        href:'myTrees',
        key: "5",
        label:"My Trees",
      },
      {
        href:'login',
        key: "5",
        label:"Login",
      },
      
    ];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    
    export default function ResponsiveAppBar() {
      
    
      return (
        <AppBar position="static"  color="transparent"  className='justify-between z-10'  sx={{ boxShadow: 0 }}>
          
          <Container maxWidth="xl"  >
          
            <Toolbar className=' justify-end' >
            <Typography
            className=' justify-start'
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'success.dark',
                  
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography> 
            
              <div className=' justify-between ml-auto'>
              <Nav/>

              </div>
             
              
               
            </Toolbar>
          </Container>
        </AppBar>
      );
    }

   

    function Nav(){

      const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
      const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    
      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };


      return (
        <>
            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}
              
              >
                {pages.map((page) => (
                  <Button
                   edge="end"
                    key={page.key}
                    href={page.href}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2 , color: 'black', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>


              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'  } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="success"
                  edge='end'
                >
                  <MenuIcon/>
      
                </IconButton>
                <Menu
                  
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    color: "success.dark",
                    
                    display: { xs: 'block', md: 'none' },
                  }}
                 
                
                >
                  {pages.map((page) => (
                    <MenuItem key={page.key} href={page.href} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              
              
        </>
      )
    }
    
