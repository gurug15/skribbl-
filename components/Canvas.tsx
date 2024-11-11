'use client'
import { useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Button } from "./ui/button";
import { Eraser, PenIcon, Redo, RotateCcw, Save, Undo } from "lucide-react";




export default function Canvas() {
    const canvasRef = useRef<ReactSketchCanvasRef>(null)
    const colorInputRef = useRef<HTMLInputElement>(null)
    const [strokeColor, setStrokeColor] = useState("#000")
    const [eraserMode, setEraserMode] = useState(false)
    const handleChange = ()=>{
        canvasRef.current?.exportPaths().then(d=>{
            console.log(d)
        })
    }
    
    function HandleEraserClick(){
      setEraserMode(true);
      canvasRef.current?.eraseMode(true)
    }

    function HandlePenClick(){
      setEraserMode(false)
      canvasRef.current?.eraseMode(false)
    }
   
    function HandleUndoClick(){
      canvasRef.current?.undo()
    }
    function HandleRedoClick(){
      canvasRef.current?.redo()
    }
    function HandleRefreshClick(){
      canvasRef.current?.resetCanvas();
    }
    async function HandleSaveClick(){
     const dataURL =  await canvasRef.current?.exportImage('png')
     console.log(dataURL)
     const link =  Object.assign(document.createElement('a'),{
      href:dataURL,
      style: { display: 'none' },
      download: 'sketch.png'
     })

     document.body.appendChild(link)
     link.click()
     link.remove()
    }


  return (
    <div className="mt-6 flex max-w-2xl gap-4 w-1/2">
        <ReactSketchCanvas
        ref={canvasRef}
        width="100%"
        height="440px"
        strokeWidth={4}
        strokeColor={strokeColor}
        onChange={handleChange}
        canvasColor="transparent"
        className="!rounded-2xl !border-purple-500 dark:!border-purple-800 !bg-white !opacity-90 dark:!bg-slate-800"
    />
    <div className="flex flex-col items-center gap-y-6 divide-y divide-purple-200 py-4 dark:divide-purple-900">
       <Button 
          size="icon"
          type="button"
          disabled={eraserMode}
          onClick={()=> colorInputRef.current?.click()}
          style={{background: strokeColor}}>
        <input type="color" ref={colorInputRef} onChange={e=>setStrokeColor(e.target.value)} className="sr-only" />
       </Button>
       <div className="flex flex-col gap-3 pt-6">
       <Button size="icon" className="bg-white text-black" type="button" variant='outline' onClick={HandlePenClick} ><PenIcon/></Button>
       <Button disabled={eraserMode} size="icon" className="bg-white text-black" type="button" variant='outline' onClick={HandleEraserClick}><Eraser/></Button>
       </div>
       <div className="flex flex-col gap-3 pt-6">
       <Button size="icon" className="bg-white text-black" type="button" variant='outline' onClick={HandleUndoClick}><Undo/></Button>
       <Button size="icon" className="bg-white text-black" type="button" variant='outline' onClick={HandleRedoClick}><Redo/></Button>
       <Button size="icon" className="bg-white text-black" type="button" variant='outline' onClick={HandleRefreshClick}><RotateCcw/></Button>
       <Button size="icon" className="bg-white text-black" type="button" variant='outline' onClick={HandleSaveClick}><Save/></Button>
       </div>
    </div>
    </div>
  )
}
