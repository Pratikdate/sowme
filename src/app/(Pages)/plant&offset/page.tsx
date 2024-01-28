import OurTeamMember from "@/app/widges/ourteamwidge";
import TextArea from "@/app/widges/textarea";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function Donations(params:any){
    return(
    <>
    <section className="py-20 flex items-center flex-col justify-between">
        <div className="flex items-center flex-col justify-between">
        <Typography variant="h4" className='font-bold flex   justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
   
        Select a planting option
       </Typography>
       <Typography className=' flex mt-20  justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
   
       Choose the tool that best suits your environmental commitment
       </Typography>
       <div  className="flex flex-row p-4 bg-slate-200 w-60 rounded-xl mt-4">
       <Button variant="outlined">Outlined</Button>
       <Button variant="outlined">Outlined</Button>

       </div>
        </div>
        <div className=" justify-between md:grid grid-cols-2 gap-4 mt-10">
            <Card  sx={{ maxWidth: 400 ,  bgcolor:"transparent"}} className=' grid-cols-1 shadow-md'>
            <CardActionArea className='flex flex-col min-w-10 items-center p-4'>
            <Typography variant="h6" className='font-bold flex   justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
   
            Plant & Offer
Trees
  </Typography>
  <Typography className=' font-thin flex justify-center items-center px-8' color={'TextGray'}   sx={{ flexGrow: 2 }}>

  Plant & offer trees around the world in a few clicks 
  </Typography>
  <div className='grid grid-cols-2 gap-4'>
        
      
        <div  className=' grid-cols-1' >
        <img src="/plant.jpg" className="w-20 h-20 ml-10 mt-10"/>
        </div>
        <div className='  mt-10 md:grid-cols-2'>
        
   <Typography  className='font-thin ' sx={{ flexGrow: 2 }}>
   <CurrencyRupeeIcon style={{height:"20"}}/> From 10/tree
            </Typography>
        
         
            <Typography  className=' font-thin mt-4'  sx={{ flexGrow: 2 }}>
            onetime/monthly/yearly
            </Typography>
        
        </div>
       
      
      </div>
  

  </CardActionArea>

            </Card>


            <Card sx={{ maxWidth: 400 , bgcolor:"transparent"}}  className=' grid-cols-2 shadow-md' >
            <CardActionArea className='flex flex-col min-w-10 items-center p-4'>
            <Typography variant="h6" className='font-bold flex   justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
   
            Net Zero
Citizen
  </Typography>
  <Typography className=' font-thin flex justify-center items-center px-8' color={'black'}   sx={{ flexGrow: 2 }}>
  Get a monthly plan and offset your CO2 emissions in the easiest way
  </Typography>


  <div className='grid grid-cols-2 gap-4'>
        
      
        <div  className=' grid-cols-1' >
        <img src="/offset-family.jpg" className="w-20 h-20 ml-10 mt-10"/>
        </div>
        <div className=' mt-10 md:grid-cols-2'>
        
        <Typography  className='font-thin ' sx={{ flexGrow: 2 }}>
   <CurrencyRupeeIcon style={{height:"20"}}/> From 100/month
            </Typography>
        
         
            <Typography  className=' font-thin mt-4'  sx={{ flexGrow: 2, }}>
            Automatic
            
            </Typography>
        
        </div>
       
      
      </div>
  </CardActionArea>

            </Card>

        </div>
    </section>
    </>
    );
  
}
