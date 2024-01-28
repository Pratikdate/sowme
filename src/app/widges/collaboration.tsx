
import Image from 'next/image'
import {Card, CardFooter} from "@nextui-org/react"
import Typography from '@mui/material/Typography';




export  function Collaboration(params:any) {
  return(
    <>
    <Card
      isFooterBlurred
      radius="md"
      className=" items-center  justify-center p-2  rounded-md  "
    >
       <Image
        alt="Woman listing to music"
        className='rounded-md'
        height={160}
        src="/earth.jpg"
        width={160}

      />
      
      <CardFooter className="w-full flex-col">
      <Typography variant='h6'  className=' font-bold' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>Make an Impact</Typography>
     <br/>
       <Typography  className=' font-thin ' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
       
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem saepe modi mollitia veniam quae quam nulla similique? Minima ratione rem ab dignissimos temporibus, molestiae neque placeat omnis velit magni.
      
      </Typography>
      </CardFooter>
    </Card>



    </>
  )
  ;
}



export  function MakeImpact(params:any) {
    return(
      <>
      <Card
      isFooterBlurred
      radius="md"
      className="items-center  justify-center p-2 rounded-md  "
    >
       <Image
        alt="Woman listing to music"
        className='rounded-md'
        height={160}
        src="/collaboration.jpg"
        width={160}

      />
      
      <CardFooter className="w-full flex-col">
      <Typography variant='h6'  className=' font-bold' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>Grow Together</Typography>
     <br/>
      <Typography  className=' font-thin ' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem saepe modi mollitia veniam quae quam nulla similique? Minima ratione rem ab dignissimos temporibus, molestiae neque placeat omnis velit magni.
      
      </Typography>
      </CardFooter>
    </Card>
  
  
  
  
      </>
    )
    ;
  }

  
  
export  function GrowTogether(params:any) {
    return(
      <>
      <Card
      isFooterBlurred
      radius="md"
      className=" items-center  justify-center p-2   rounded-md  "
    >
       <Image
        alt="Woman listing to music"
        className='rounded-md'
        height={160}
        src="/growtogethwe.jpg"
        width={160}

      />
      
      <CardFooter className="w-full flex-col">
      <Typography variant='h6'  className=' font-bold' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>Collaboration</Typography>
     <br/>
      <Typography  className=' font-thin ' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem saepe modi mollitia veniam quae quam nulla similique? Minima ratione rem ab dignissimos temporibus, molestiae neque placeat omnis velit magni.
      
      </Typography>
      </CardFooter>
    </Card>
  
  
  
  
      </>
    )
    ;
  }
  