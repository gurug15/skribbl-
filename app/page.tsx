
import Canvas from "@/components/Canvas";
import ChatBox from "@/components/chat/ChatBox";
import NavBar from "@/components/NavBar";
import Users from "@/components/Users";


export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div className="flex justify-center w-4/5">
        <NavBar/>
      </div>
      <div className="flex justify-center items-center w-full">
      <Users/>
      <Canvas/>
      <ChatBox/>
    </div>
    </div>
  );
}
