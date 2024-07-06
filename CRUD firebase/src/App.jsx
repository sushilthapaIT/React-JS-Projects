import React from 'react'
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai"
import Nav from './components/Nav';

const App = () => {
  return (
    <>
    <div className='max-w-[370px] mx-auto px-4'>
      <Nav />
    <div className='flex gap-2'>
      <div className='relative flex-grow flex items-center ml-1'>
          <FiSearch className='absolute text-3xl text-white'/>
          <input type='text' className='flex-grow border bg-transparent border-white rounded-md h-10 text-white pl-9'/>
      </div>
      <AiFillPlusCircle className='text-5xl cursor-pointer text-white'/>
    </div>
    </div>
    </>
  )
}

export default App
