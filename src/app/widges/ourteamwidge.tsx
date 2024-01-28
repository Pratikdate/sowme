import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';




export default function OurTeamMember(params: any) {
  return (
    <Card sx={{ maxWidth: 345 ,border:'none', boxShadow:'none', bgcolor:"transparent"}} >
      <CardActionArea className='flex flex-col min-w-10 items-center'>
        
        <Avatar 
        

        sx={{ width: 140, height: 140,bgcolor: 'gray' }}
        variant='circular'
        src={params.src}
      
         >
          </Avatar>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='flex justify-center' >
            {params.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='flex justify-center'>
            {params.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}