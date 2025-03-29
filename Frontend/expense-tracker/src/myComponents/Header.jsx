import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <div className='p-5 flex justify-between items-center bg-gray-100 shadow-lg'>
      <img src={'logoipsum-261.svg'} alt="logo" className="logo" width={160} height={100}/>  
      <Button className='shadow-sm bg-primary'>Login</Button>
    </div>
  )
}

export default Header
