import React from 'react'

function Hero() {
  return (
    <div className='w-full  h-[90ch]'>
        <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
             alt="Image"
             className='w-full h-full object-cover'
        />
    <div className='max-w-[1140px] m-auto'>
    <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='font-bold text-4xl'>Find Your  Special Trip</h1>
        <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
        <p>Deserunt consequat id ullamco minim. Pariatur nostrud nisi Lorem tempor deserunt nulla culpa adipisicing est. Ex sit dolore incididunt ullamco et culpa sunt eu id. Et excepteur aliqua adipisicing id dolore esse reprehenderit deserunt occaecat eu proident tempor laborum aute. Id cupidatat minim laborum elit nisi proident in proident est. Nisi elit anim do culpa sit nostrud elit commodo dolore sint commodo anim nostrud excepteur. Proident commodo qui enim nostrud dolor consequat enim pariatur duis.</p>
    </div>
    </div>
    </div>
  )
}

export default Hero