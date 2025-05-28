'use client'
import { useState } from "react"
import { Textarea } from "../ui/textarea"

const messages = [
  {
    "id": 1,
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "id": 2,
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
  {
    "id": 3,
    "type": "user",
    "text": "Teste 2222"
  },
  {
    "id": 4,
    "type": "assistent",
    "text": "Resposta aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  {
    "id": 5,
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "id": 6,
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
  {
    "id": 7,
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "id": 8,
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
  {
    "id": 9,
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "id": 10,
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
  {
    "id": 11,
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "id": 12,
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
  {
    "id": 13,
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "id": 14,
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
]

const Chat = () => {
  const [title, setTitle] = useState("Title");

  return (
    <main className="flex flex-col w-full overflow-hidden h-screen">
      <div className="w-full bg-zinc-200 p-2 flex justify-center align-middle mb-4">
        <input className="w-[20%] font-bold text-xl text-center" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="flex-col w-[100%] px-[20%] max-h-[80%] justify-between mx-auto h-screen overflow-y-scroll ">
        <div className="min-p-8 wrap-break-word">
          {
            messages.map((item) => (
              <Message key={item.id} type={item.type} message={item.text} />
            ))
          }
        </div>
      </div>
      <Textarea className="w-[50%] mx-auto my-4 h-32 bg-zinc-200 p-8 resize-none" placeholder="Type your message here..." />
    </main>
  )
}

interface MessageProps {
  type: string;
  message: string;
}

const Message = ({ type, message }: MessageProps) => {
  const classStyle = type == "user" ? "bg-blue-400 ml-auto" : "bg-green-400 mr-auto"

  return (
    <div className="flex my-2">
      <span className={`${classStyle} p-8 inline-block rounded-xl max-w-[100%]`}>{message}</span>
    </div>
  )
}

export default Chat
