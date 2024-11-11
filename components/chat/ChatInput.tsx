import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BiSend } from "react-icons/bi"

export function ChatInputWithBtn() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit"><BiSend/></Button>
    </div>
  )
}

