"use client";
import React, { useState, useRef, useEffect } from "react";
import { FullMessageType } from "@/app/types";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import axios from "axios";

type BodyConversationType = {
  initialMessages: FullMessageType[];
};

const BodyConversation = ({ initialMessages }: BodyConversationType) => {
  const [messages, setMessages] = useState(initialMessages);

  const bottomRef = useRef<HTMLDivElement>(null);
  const { conversationId } = useConversation();

  useEffect(() => {
      axios.post(`/api/conversations/${conversationId}/seen`)
  }, [conversationId])

  return <div className="flex-1 overflow-y-auto">
    {messages.map((message, i) => <MessageBox isLast={i === messages.length - 1} data={message} key={message.id} /> )}

    <div ref={bottomRef} className="pt-24"/>
  </div>;
};

export default BodyConversation;
