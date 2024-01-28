"use client"


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Card } from '@nextui-org/react';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Login(params:any){

    const HandalSubmit=()=>{}

    return(
    <>
    <Card className='p-10 border-2 my-20  rounded-md'>
    <Typography variant='h4'  className='flex justify-center font-bold pb-4 ' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>Login</Typography>
    
    
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='flex flex-col h-80 w-full items-center justify-between  ' 
    >
    
        
                <TextField id="outlined-basic" label="Name" variant="outlined"  />
                <TextField id="outlined-basic" label="Email" variant="outlined"  />
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
                <Button  variant="contained"  className='w-10 ml-40  bg-blue-700 ' size='small' type='submit' >Login</Button>
      
        </Box>
        <Link
            component="button"
            variant="body2"
            onClick={() => {
                console.info("I'm a button.");
            }}
            >
            Not yet registered? signup!
            </Link>
            <div className='flex flex-row justify-between px-20'>
                <IconButton ><GoogleIcon/></IconButton>
                <IconButton ><LinkedInIcon/></IconButton>
                <IconButton ><InstagramIcon/></IconButton>

            </div>
    
        </Card>
    </>
    );
  
}
