"use client"
import React, {useState} from 'react'
import { FullConversationType } from '@/app/types'
import { useRouter } from 'next/navigation'
import useConversation from '@/app/hooks/useConversation'


type ConversationListProps = {
    initialItems: FullConversationType[]
}

const ConversationList = ({initialItems}: ConversationListProps) => {

const [items, setItems] = useState(initialItems)
const router = useRouter()

const {isOpen, conversationId} = useConversation()


  return (
    <div>ConversationList</div>
  )
}

export default ConversationList