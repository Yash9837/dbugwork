import React from 'react'
// import Card3Presentation from './Components/Card'
import Pcard from './Components/pcard';

function App() {
  return (
    <div className=''>
      <div className='flex items-center justify-center sm:flex sm:justify-center sm:pl-5'>
      <h1 className=' text-white font-Poppins text-6xl font-bold p-2'>Our </h1>
      <h1 className='   text-[#CDCDCD] bg-gradient-to-b from-[#CDCDCD] via-[#CDCDCD] to-[rgba(205, 205, 205, 0.00)] bg-clip-text text-transparent font-Poppins text-6xl font-bold'>Domains</h1>
      </div>
      <Pcard/>
    </div>
  )
}

export default App;

