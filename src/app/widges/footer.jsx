

import Typography from '@mui/material/Typography';


import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import Button from '@mui/material/Button';
import { useState } from 'react';
//import {POST} from './supabaseServer';

import {  Input } from '@mui/material';

//max-md:hidden


export default function Form(){
    return(
      <>
      <div className='  w-full h-60 max-sm:h-auto   md:grid grid-cols-2 gap-4 px-24  items-center justify-center '>

      
        <div className=' max-sm:h-12    items-center justify-between  grid-cols-1 '>
          <div className='flex flex-col  w-full items-center md:h-60 max-md:hidden justify-between max-sm:overflow-y-scroll '>
          <Typography variant="h6"  noWrap component="div" sx={{ flexGrow: 2 ,mx:0}}>
            <AddIcCallIcon className='mr-2' fontSize='large' color='primary'/>
            Contact me
            <Typography className='ml-8' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>+91 9767451907</Typography>
          </Typography>
  
          <Typography variant="h6"  noWrap component="div" sx={{ flexGrow: 2 ,ml:8}}>
            <MailOutlineIcon className='mr-2' fontSize='large' color='primary'/>
            Email
            <Typography className='ml-8' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>pratikdate100@gmail.com</Typography>
          </Typography>
  
          <Typography variant="h6"  noWrap component="div" sx={{ flexGrow: 2 ,mr:4}}>
            <AddLocationAltIcon className='mr-2' fontSize='large' color='primary'/>
              Location
            <Typography className='ml-8' color={'gray'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>Pune,India</Typography>
          </Typography>

          </div>

          
          </div>
          <div className='md:grid-cols-2 max-sm:mt-10'>
          <MessFORM/>

          </div>
          
        
      </div>
      <Footer/>
      
      
      </>
    )
  }
  
  
  function Footer(){
    return(
      <>
      <Typography className='mb-6' color={'GrayText'} variant='body2' noWrap component="div" sx={{ flexGrow: 2 ,mx:1}}>Made with <FavoriteBorderIcon/> by Pratik</Typography>
          
      </>
    )
  }




  

function MessFORM(){
    const [Form, SetForm]=useState(
        {
            Name:'',
            Email:'',
            Message:''
        }

    )

    const HandalChange=(e)=>{
        SetForm({...Form,[e.target.name]:e.target.value})
    }

    const HandalSubmit=()=>{
        // //e.preventDefault()
        // if(!(Form.Name && Form.Email && Form.Message) ==""){
        //     POST(Form)
        // console.log('submit button clicked', Form)

        // }
            
        
    }

    return(
        <>
        <form className='flex flex-col h-60 w-full  max-md:items-center items-end justify-between lg:mr-40  ' onSubmit={HandalSubmit}>
            <Input autoFocus type={'text'} placeholder="Enter name" className='w-80  text-white' name={'Name'} onChange={HandalChange} value={Form.Name}/>
            <Input autoFocus type={'text'} placeholder="Enter email"  name={'Email'} className='w-80 text-white' onChange={HandalChange} value={Form.Email} />
            <Input autoFocus type={'text'} rows={'4'} margin='dense'  name={'Message'} placeholder="Enter message" className='w-80 text-white ' onChange={HandalChange} value={Form.Message} />
            <Button variant="contained" className='flex w-30 ' size='small'type='submit' ><p className='  text-blue-600 hover:text-white pe-1 pt-1'><TelegramIcon className='mr-1' />  Send</p></Button>
        </form >

        
        </>
    )
}
