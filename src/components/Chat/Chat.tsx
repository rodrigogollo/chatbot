import { Textarea } from "../ui/textarea"

const messages = [
  {
    "type": "user",
    "text": "Teste 1234"
  },
  {
    "type": "assistent",
    "text": "Resposta aaaaaaaa"
  },
  {
    "type": "user",
    "text": "Teste 2222"
  },
  {
    "type": "assistent",
    "text": "Resposta aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
]

const Chat = () => {
  return (
    <div className="flex-col w-[60%] justify-between mx-auto h-screen">
      <h1 className="font-bold text-xl mb-4 text-center p-2 bg-zinc-200">Testando chat</h1>
      <div className="min-p-8 min-h-[70%] max-h-[20%] p-8 wrap-break-word overflow-y-scroll overflow-x-hidden">
        {
          messages.map((item) => (
            <Message type={item.type} message={item.text} />
          ))
        }
      </div>
      <Textarea className="mx-auto h-32 leftl10 w-full resize-none my-8" />
    </div>
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
