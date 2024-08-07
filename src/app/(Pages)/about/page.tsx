import { Collaboration, GrowTogether, MakeImpact } from "@/app/widges/collaboration";

import Typography from '@mui/material/Typography';



export default function AboutPage(params:any){
    
    return(
    <>
      <section className="w-full md:px-60 ">

      {/* top about organizations and its foundation text  */}
        <div className='my-20'>
          <Typography variant="h5" className='font-bold ml-4 flex  mt-20 justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
            The Nature Conservancy is a global environmental nonprofit working to create a world where people and nature can thrive.
          </Typography>
            <br/>
         
          <Typography  className=' font-sans ml-4 w-14' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
            Founded in the U.S. through grassroots action in 1951, The Nature Conservancy (TNC) has grown to become one of the most effective and wide-reaching environmental organizations in the world. Thanks to more than a million members and the dedicated efforts of our diverse staff and over 400 scientists, we impact conservation in 79 countries and territories: 37 by direct conservation impact and 42 through partners.
          </Typography>
        </div>
        {/*end top about organizations and its foundation text  */}


        {/* Organisation Mission and Vision statments */}
        <div className=" md:grid md:grid-cols-2 flex flex-col-reverse gap-6 ">
          <div className='mt-auto md:mt-20 justify-center'>

            <Typography variant="h4" className='font-bold ml-4 flex justify-center items-center' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
                 Our Mission
            </Typography>
            <br/>
         
            <Typography className=' font-sans ml-4 w-14' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
              To preserve native plant species by sowing and cultivating them locally.
            </Typography>

          </div>
          <div  className='w-full px-10 md:px-0' >
            <img src="/About-Us_Our-Mission.jpg" />
          </div>
        
        </div> 
         
        <div className="px-10 md:mt-6 md:grid grid-cols-2 gap-6">

          <div  className='w-full px-10  md:px-0' >
            <img src="/About-Us_Our-Vision.jpg" />
          </div>

          <div className='mt-10 md:px-10 justify-center'>
            <Typography variant="h4" className=' font-bold ml-4 flex  justify-center items-center ' color={'black'}  component="a" sx={{ flexGrow: 2 }}>
                 Our Vision
            </Typography>
            <br/>
            
            <Typography className=' font-sans mx-4 w-14' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
              To envision a flourishing environment where native plant species thrive, contributing to a sustainable and vibrant ecosystem.
            </Typography>
          </div>
        </div> 
        {/*End of Organisation Mission and Vision statments */}
      </section>

       


    <section className='w-auto  px-20 my-10'>
      <Typography variant="h6" className='  font-thin mx-4' color={'GrayText'} component="a" sx={{ flexGrow: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur mollitia, aliquam id accusamus distinctio quaerat quas nam sequi nulla aliquid. Doloremque, libero iusto dicta accusantium obcaecati sequi dolorum?
      </Typography>
    </section>

    
    <section className='md:grid grid-cols-3 gap-4 px-24 mb-10'>
        <Collaboration  className='mt-2 md:grid-cols-1'/>
        <MakeImpact  className='mt-2 md:grid-cols-2'/>
        <GrowTogether  className='mt-2 md:grid-cols-3'/>
    </section>
    </>
    );
  
}