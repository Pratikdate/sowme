'use client'



import OurTeamMember from "@/app/widges/ourteamwidge";
import TextArea from "@/app/widges/textarea";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Card } from '@nextui-org/react';







export default function Career(params:any){
    return(
    <>
    <section className='md:grid grid-cols-2 gap-4'>
        
      
        <div  className=' md:grid-cols-2' >
        <img src="/saveplant.jpg" className="w-50 h-50 ml-10 mt-10"/>
        </div>
        <div className='  mt-20 md:grid-cols-1'>
        
        <Typography variant="h4" className='font-bold ml-4 flex   justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
   
        Life at Think Bioscience
            </Typography>
            <br/>
         
            <Typography  className=' font-sans ml-4 w-14' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
            
            The Think Bioscience team is committed to creating environment where each individuals feels welcomed, engaged, and recognized for their contributions. We offer competitive compensation and benefits that support the needs of our employees. We are passionate about using innovative science to improve the lives of patients. Our success in achieving this mission is all about the team.
            </Typography>
        
        </div>
       
      
      </section>
      <Card className=' max-w-screen-md my-20'>
    <Typography variant='h4'  className='flex justify-center font-bold pb-4 ' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>Join Us</Typography>
    <Typography  className='flex justify-center font-bold pb-4 ' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>If interested in joining the Think Bioscience team but don’t see a fit with a current opening, please feel free to Contact Us.</Typography>
    
    
   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='flex flex-col h-80  w-full items-center justify-between ' 
    >
    
        
    <TextField  id="outlined-basic" label="Subject*" variant="outlined"  />
    <div className="flex flex-row  justify-between">
    <TextField id="outlined-basic" label="First Name*" variant="outlined" />
    <TextField id="outlined-basic" label="Last Name*" variant="outlined" />

    </div>
    <TextField id="outlined-basic" label="Email*" variant="outlined" />
    <TextField id="outlined-basic" label="Contact Number*" variant="outlined" />
    <TextField id="outlined-multiline-static" label="Message*" variant="outlined"  multiline
          maxRows={5} />
                <Button  variant="contained"  className='w-10 ml-40  bg-blue-700 ' size='small' type='submit' >Join</Button>
      
        </Box>
        
    
      </Card>
      <section className="mt-10 w-full bg-slate-100">
        
      <Typography gutterBottom variant="h4" component="div" className='flex justify-center font-bold text-slate-700 mt-10 ' >
            Our Team
        </Typography>
        <div className="flex flex-row justify-between w-auto px-80">
        <Button variant="outlined" size="small">All</Button>
        <Button variant="outlined" size="small">Advisors</Button>
        <Button variant="outlined" size="small">Volunteers</Button>
        <Button variant="outlined" size="small">Board</Button>
        <Button variant="outlined" size="small">R&D</Button>
        </div>


      <div className=" flex min-h-screen  flex-col  items-center justify-between mt-10  md:grid grid-cols-4 gap-4">
      
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
      <OurTeamMember title="Jane Belenky Smith" subtitle="Admin Assistant" src="https://thinkbioscience.com/wp-content/uploads/resized/2023/03/alexoval-480x516-c-default.png" />
     

      </div>
      </section>
    
    </>
    );
  
}
