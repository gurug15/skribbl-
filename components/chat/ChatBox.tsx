import React from 'react'
import { Card } from '../ui/card'
import { ChatInputWithBtn } from './ChatInput'
import ChatMessage from './ChatMessage'

export default function ChatBox() {
  return (
    <Card className='h-[430px] w-1/6 ml-5 mt-6 bg-gray-100 dark:bg-slate-900 dark:text-white'>
       <div className='flex flex-col justify-between w-full h-full p-2'>
        <div>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        </div>
        <ChatInputWithBtn/>
       </div>
    </Card>
  )
}
