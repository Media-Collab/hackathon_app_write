import { useEffect, useRef, useState } from "react"
import { 
  AddOutline,
  ArrowRedoOutline, 
  ArrowUndoOutline, 
  ArrowUpOutline, 
  BrushOutline, 
  ColorPaletteOutline, 
  EllipseOutline, 
  ExitOutline, 
  Pause, 
  PencilOutline, 
  Play, 
  PlayBack, 
  PlayForward, 
  ReorderTwoOutline, 
  SquareOutline, 
  Stop, 
  TrashOutline,
  TriangleOutline} from "react-ionicons"

const index = () => {

  const [nameProject, setNameProject] = useState("Nombre del proyecto")
  const [nameLayer, setNameLayer] = useState("")
  const [dimensions, setDimensions] = ("1280*720")

  const nombre = () => {
    setNameLayer(nameLayer)
  }

  return (
    <div className="bg-blue-200 h-screen grid grid-cols-12">
        <article className="w-full px-8 py-10 bg-blue-300 rounded-tr-lg rounded-br-lg col-span-1">
          <div className="h-full p-4 bg-white rounded-lg shadow-xl flex flex-col justify-around">
            <PencilOutline/>
            <BrushOutline/>
            <ColorPaletteOutline/>
            <ArrowUpOutline/>
            <SquareOutline/>
            <EllipseOutline/>
            <TriangleOutline/>
            <ArrowUndoOutline/>
            <ArrowRedoOutline/>
            <ExitOutline/>
          </div>
        </article>
        <article className="flex flex-col items-center px-16 col-span-9">
          <div className="flex mt-10 shadow-xl rounded-lg p-4 bg-blue-400">
            <p className="border-r border-white mr-2 pr-2 text-white font-bold text-xl">Keronote</p>
            <p className="text-white text-xl">{nameProject}</p>
          </div>
          <canvas id="keronote" width="1000" height="450" className="shadow-xl my-10 rounded-lg bg-white"></canvas>
          <div className="w-96 bg-blue-400 shadow-xl p-2 rounded-lg"></div>
          <div className="flex mt-5">
            <PlayBack/>
            <Stop className="mx-2"/>
            <Play className="mr-1"/>
            <Pause className="mr-2"/>
            <PlayForward/>
          </div>
        </article>
        <article className="flex flex-col w-full px-10 py-10 bg-blue-300 rounded-tl-lg rounded-bl-lg justify-between col-span-2">
          <p className="text-center shadow-xl rounded-lg p-4 bg-white text-blue-400">Layers</p>
          <div>
            <div className="p-2 bg-blue-400 rounded-lg shadow-xl">
              <canvas className="bg-white w-full h-24 rounded-lg"/>
              <div className="flex mt-2">
                <input value={nameLayer === "" ? "Capa 1" : ""} onChange={nombre} className="pl-2 w-full rounded-lg outline-none text-blue-400 mr-1"/>
                <button className="shadow-xl rounded-lg p-1 bg-white text-blue-400">
                  <ReorderTwoOutline/>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="shadow-xl rounded-lg p-2 bg-white text-blue-400"><AddOutline/></button>
            <button className="shadow-xl rounded-lg p-2 bg-white text-blue-400"><TrashOutline/></button>
          </div>
        </article>
    </div>
  )
}

export default index