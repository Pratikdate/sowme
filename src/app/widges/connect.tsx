import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

export default function Connect() {
  return(
    <>
    <Typography variant='h4'  className=' font-bold' color={'white'} component="a" sx={{ flexGrow: 2 }}>Make an Impact</Typography>
    <div className='grid grid-cols-2 gap-4 my-10 '>
    <Button clssName="grid-cols-1 " variant="outlined"  >
  Partner With Us   <ArrowForwardSharpIcon className="ml-4"/>
</Button>
    <Button clssName="grid-cols-2" variant="outlined" >
  Join Our Team <ArrowForwardSharpIcon className="ml-4"/>
</Button>

    </div>
    
                   
    </>
  );
}
