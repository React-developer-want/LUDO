import React from 'react';
import {VertLadder, CylinLadder} from '../containers/Ladder.js';

const Ludo = () => {

  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>

    <div className='grid grid-cols-3 grid-rows-3 w-[390px] h-[390px] md:w-[640px] md:h-[640px]'>  
      <div className=' bg-red-500 p-[20%] grid grid-cols-2 grid-rows-2 gap-2'>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
      </div>

      <CylinLadder parent={{num : [5,6,8,11,14,17],value : ' bg-green-500'}} child={{num : [7],value : ' bg-red-500'}}/>

      <div className=' bg-green-500 p-[20%] grid grid-cols-2 grid-rows-2 gap-2'>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
      </div>

      <VertLadder/>

      <div className='bg-gray-600 grid grid-rows-2 grid-cols-2 relative'>
        <div className='bg-white md:w-40 md:h-40 w-20 h-20 rounded-full absolute md:top-[13%] md:left-[13%] top-[18%] left-[18%] flex justify-center items-center uppercase md:font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm md:text-2xl'>winner</div>
        <div className='bg-red-500'></div>
        <div className='bg-green-500'></div>
        <div className='bg-blue-600'></div>        
        <div className='bg-yellow-600'></div>
      </div>
      <VertLadder/>

      <div className=' bg-blue-600 p-[20%] grid grid-cols-2 grid-rows-2 gap-2'>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
      </div>
      <CylinLadder/>
      <div className=' bg-yellow-600 p-[20%] grid grid-cols-2 grid-rows-2 gap-2'>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
        <div className="bg-white text-center rounded-full"></div>
      </div>
    </div>
    </div>
  )
}

export default Ludo
