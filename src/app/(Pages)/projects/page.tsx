import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Divider } from '@mui/material';
import { AspectRatio, CardOverflow } from '@mui/joy';

import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';


export default function MyTree(params:any){
    return(
    <>
    <section className='h-40 w-full bg-green-600 align-middle flex'>
    <Typography variant="h4" className='font-bold flex justify-center items-center text-zinc-50 '   component="a" sx={{ flexGrow: 2 }}>
                 #PlantForSelf
    </Typography>
    </section>

    <section className='mt-10 mb-10 justify-center  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-2 '>

      <Project_Cards/>
      <Project_Cards/>
      <Project_Cards/>
      <Project_Cards/>
      </section>

    


    </>
    );
  
}


function Project_Cards(params:any){
  
  return (
    <>
    <Card  className="flex" sx={{ width: 320 }}>
    <CardActionArea className='h-full w-full ' >
  
      <CardContent>
        
          <img
            src="/exampleCard.png"
            loading="lazy"
            alt=""
          />
          
      </CardContent>
        
        
      <CardContent>
        <Typography>Yosemite National Park</Typography>
        <Typography sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
    }}
    variant="body1">
      this article I’ll share with you my own experience in migration from material UI 4 to 5, it is so easy, such as drinking a cup of coffee.</Typography>
      </CardContent>

      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal" className="h-20">
          <Typography level="body" fontWeight="md" textColor="text.secondary">
            6.3k view
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body" fontWeight="md" textColor="text.secondary">
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow>
      </CardActionArea>
    </Card>
    
    
    </>
  )
}