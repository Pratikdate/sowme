'use client';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';



export default function DonateSeeds() {
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
       <div  className="flex flex-row  bg-slate-200 w-70 rounded-xl mt-4 justify-between p-2">
       <a  href="/plant&offset"  type="button" className="m-1 text-white bg-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Offer Plant</a>
       <a  href="/donateSeeds"  type="button" className="m-1 text-white  ring-4 ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 bg-blue-700 outline-none dark:ring-blue-800"  >Donate Seeds</a>

       </div>
        </div>

       
            <OfferCard/>
        
       
        
        
    </section>
    </>
    );
  
}




function OfferCard(){
    return (
        <div className=" justify-between md:grid grid-cols-2 gap-4 mt-10">
            <Card  sx={{ maxWidth: 400 ,  bgcolor:"transparent"}} className=' grid-cols-1 shadow-md'>
            <CardActionArea className='flex flex-col min-w-10 items-center p-4'>
            <Typography variant="h6" className='font-bold flex   justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
   
            Donate Seeds
  </Typography>
  <Typography className=' font-thin flex justify-center items-center px-8' color={'TextGray'}   sx={{ flexGrow: 2 }}>

  Donate Seeds around the world in a few clicks 
  </Typography>
        
  <div className='grid grid-cols-2 gap-4'>
      
        <div  className=' grid-cols-1' >
        <img src="/plant.jpg" className="w-20 h-20 ml-10 mt-10"/>
        </div>
        <div  className=' grid-cols-1 mt-10' >
    
        <a  href="/netZeroCitizen" type="button" className="mt-2 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 pb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Donate Seeds</a>

        </div>
      </div>
  

  </CardActionArea>

            </Card>


            

            

        </div>
    );
}
     