import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Users() {
  return (
     <Card className="mt-6 mr-5 w-1/6 h-[430px] bg-gray-100  dark:bg-slate-900 dark:text-white">
        <CardTitle className="text-center m-3">Players</CardTitle>
        <CardContent>
            <User/>
            <User/>
            <User/>
            <User/>
        </CardContent>
     </Card>
  )
}



function User(){
    return <Card className="flex justify-start gap-x-2 py-3 pl-3 my-1 dark:bg-slate-800 dark:text-white">
             <CardTitle>1</CardTitle>
             <CardTitle>Player1</CardTitle>
           </Card>
}