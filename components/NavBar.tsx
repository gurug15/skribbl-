import React from 'react'
import { Card } from './ui/card'

export default function NavBar() {
  return (
    <Card className='w-full min-h-10 flex justify-between px-5 py-3'>
        <div>timer</div>
        <div>Guess</div>
        <div>logo</div>
    </Card>
  )
}
