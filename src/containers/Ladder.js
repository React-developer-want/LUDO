import React from 'react';



export const CylinLadder = ({parent,child}) => {
  const divStyle = 'border-1 border-gray-500';

  return (
    <div className='grid grid-cols-3 grid-rows-6'>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>

      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>

      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>

      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>

      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
      <div className="border-[1px] border-gray-500"></div>
    </div>
  )
}

export const VertLadder = ()=>{
    return (
        <div className='grid grid-cols-6 grid-rows-3'>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>

            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
            <div className="border-[1px] border-gray-500"></div>
        </div>
    )
}
