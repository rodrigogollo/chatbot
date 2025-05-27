import { Textarea } from "../ui/textarea"

const Chat = () => {
  return (
    <div className="flex-col w-[60%] justify-between mx-auto">
      <h1 className="font-bold text-4xl uppercase text-center p-8 bg-amber-200">Chat RG</h1>
      <div className="min-p-8 min-h-[70%] max-h-[20%] p-8">
        <p>lorem1000</p>
      </div>
      <Textarea className="mx-auto h-32 leftl10 w-full resize-none" />
    </div>
  )
}

export default Chat
