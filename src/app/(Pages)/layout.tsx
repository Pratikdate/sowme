"use client"

import Typography from '@mui/material/Typography';
import AboutPage from './about/page';
import Form from '../widges/footer';
import Connect from '../widges/connect';
import TextArea from '../widges/textarea';
import { Blob }  from '../widges/blob'
import ResponsiveAppBar from '../widges/nav';



export default function RootLayout({  children,
}: {
  children: React.ReactNode
}) {
    return (
      <>
      <div>
      <ResponsiveAppBar />

      </div>
      
      <main className="flex min-h-screen flex-col items-center justify-between  ">
      
      
      {children}
      
      <section className=' w-full'>
      <div className=' w-full flex flex-col items-center py-6 ' style={{background:'#120029'}}>
        <Connect/>
       
        
      </div>
      
      
      <div className=' w-full flex flex-col items-center  ' style={{background:'#120029'}}>
      <Typography variant='h4'  className=' font-bold pb-4' color={'white'} component="a" sx={{ flexGrow: 2 }}>Contact</Typography>
    
      <Form/>
      </div>

      </section>
      
      </main>

      </>
    )
  }