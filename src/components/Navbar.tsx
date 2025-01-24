import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='h-16  '>
        <div className='flex  justify-between  items-center'>
            <h1 className='text-3xl pl-6 font-semibold'>ChatApp</h1>
            <ul className='flex gap-10 justify-around text-xl items-center px-10 '>
                <li className='text-lg'>Home</li>
                <li className='text-lg bg-red-600 px-3 py-2 rounded-lg font-bold hover:bg-red-700 '>SignOut</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar