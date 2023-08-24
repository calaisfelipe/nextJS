import React from 'react'
import {motion, useCycle} from 'framer-motion'
import { Quicksand } from "next/font/google";


const quicksand = Quicksand({ subsets: ["latin"]});

const loaderVariants = {
    animationOne:{
       x:[-20,20],
       y:[0, -30], 

       transition:{
        x:{repeat:Infinity, repeatType:'mirror', duration:0.5, },
        y:{repeat:Infinity, repeatType:'mirror', duration:0.25,  }
       }    
    },
    animationTwo:{
       x:[0],
       y:[0,40], 

       transition:{
        x:{repeat:Infinity, repeatType:'mirror'},
        y:{repeat:Infinity, repeatType:'mirror', duration:0.25, ease:"easeOut"  }
       }    
    },
}


const Loading = () => {

    const [animation, setAnimation] = useCycle('animationOne', 'animationTwo')

  return (
   <>
   <div className='w-full h-30 p-10 flex flex-center justify-center items-center flex-col'>
    <motion.div className='bg-white w-[10px] h-[10px] rounded-full mx-auto mb-[50px] ' variants={loaderVariants} animate={animation}>
    

    </motion.div>
    <p className={`text-white text-xs font-extralight tracking-widest ${quicksand.className}`}><button onClick={() => setAnimation()}>Cycle Loader</button></p>
    </div>  
   </>
  )
}

export default Loading