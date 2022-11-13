import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Starter = () => {
    const [players, setPlayers] = useState(0);
    const [invisibleBtn, setInvisible] = useState('invisible');
    useEffect(()=>{
      if(players > 0){
        setInvisible('');
      }
    },[players])
    const navigate = useNavigate();
    function handleClick(){
      navigate('/ludo');
    }
    
  return (
    <div className='h-[100vh] flex flex-col justify-around items-center bg-green-600'>  

      <h1 className='text-5xl font-bold text-white uppercase tracking-wider'>A few steps to go -{'>'}</h1>

      <div className='flex md:flex-row flex-col justify-around items-center gap-5'>

        <h1 className='text-2xl font-bold text-white uppercase tracking-wider'>Choose Players -{'>'} </h1>

        <div className='flex gap-5 text-2xl'>

            <button className='flex justify-center items-center bg-purple-700 text-white font-bold cursor-pointer w-[50px] h-[50px] rounded-full hover:bg-yellow-700 active:bg-yellow-700'  onClick={()=> setPlayers(1)}>1</button>
            <button className='flex justify-center items-center bg-purple-700 text-white font-bold cursor-pointer w-[50px] h-[50px] rounded-full hover:bg-yellow-700 active:bg-yellow-700'  onClick={()=> setPlayers(2)}>2</button>
            <button className='flex justify-center items-center bg-purple-700 text-white font-bold cursor-pointer w-[50px] h-[50px] rounded-full hover:bg-yellow-700 active:bg-yellow-700'  onClick={()=> setPlayers(3)}>3</button>
            <button className='flex justify-center items-center bg-purple-700 text-white font-bold cursor-pointer w-[50px] h-[50px] rounded-full hover:bg-yellow-700 active:bg-yellow-700'  onClick={()=> setPlayers(4)}>4</button>

        </div>

      </div>

      <button className={'p-3 bg-purple-700 text-center font-bold text-white rounded-lg cursor-pointer text-5xl uppercase hover:bg-yellow-700 active:bg-yellow-700 ' + invisibleBtn} onClick={handleClick}>
        Let's Play -{'>'}
      </button>

    </div>
  )
}

export default Starter
