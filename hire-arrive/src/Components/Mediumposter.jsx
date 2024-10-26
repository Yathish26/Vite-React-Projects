import React from 'react'

export default function Mediumposter({img}) {
  return (
    <>
    <div className='w-[500px] h-[400px] mo:w-fit mo:h-fit m-8'>
        <img className='rounded-3xl' src={img} alt="Image" />
    </div>
    </>
  )
}
