"use client"


// Import EventEmitter module
const EventEmitter = require('events');

// Set max listeners for all EventEmitter instances
EventEmitter.defaultMaxListeners = 15;


import ResponsiveAppBar from './widges/nav'
import { Blob }  from './widges/blob'
import TextArea from './widges/textarea'
import Typography from '@mui/material/Typography';

import Connect from './widges/connect'
import Form from './widges/footer'



function Home() {

  return (
    <>

    
    <ResponsiveAppBar/>
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* Circular plat blob svg start */}
      <section className='md:grid grid-cols-2 gap-4'>
        <div  className=' md:grid-cols-2' >
        <Blob url="name"/>
        </div>
        {/* textarea component from widges */}
        <div className='mt-20 md:grid-cols-1'>
          <TextArea/>
        </div>
      </section>
      {/*End of Circular plat blob svg start */}
       

       {/* make an impact and contact section */}
      <section className='mt-10 w-full flex flex-col items-center py-6 ' style={{background:'#120029'}}>
        <Connect/>
      </section>
      
      <section className=' w-full flex flex-col items-center  ' style={{background:'#120029'}}>
      <Typography variant='h4'  className=' font-bold pb-4' color={'white'} component="a" sx={{ flexGrow: 2 }}>Contact</Typography>
    
      <Form/>
      </section>
      {/*end of make an impact and contact section */}

    </main>
    </>
   
  )
}

export default Home;