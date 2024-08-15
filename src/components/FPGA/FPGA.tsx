
import { useState } from "react";
import {RadioComp } from "@/src/components/RadioComp";

const arr = [
    [{name:"FPGA", price:1000}],
    [{name: "AMD/Xilinx", price:1000}, {name:"Intel/Altera", price:1000}, {name: "Microsemi/Microchip/Actel", price:1000}, {name:"Others", price:0}],
    [{name:"Artix", price:1000}, {name:"Artix Ultrascale", price:1000}, {name:"Kintex", price:1000}, {name:"Kintex Ultrascale", price:1000}, {name:"Vertex", price:1000}, {name:"Vertex Ultrascale", price:1000},       {name:"Zynq 7000", price:1000}, {name:"Zynq Ultrascale + MPSoc", price:1000}, {name:"Zynq Ultrascale + RFSoc", price:1000}, {name:"Versal", price:1000}],
    [{name:"Agilex", price:1000}, {name:"Stratix", price:1000}, {name:"Arria", price:1000}, {name:"Cyclone", price:1000}, {name:"Max", price:1000}, {name:"eAsic", price:1000}],
    [{name:"PolarFire", price:1000}, {name:"Igloo", price:1000},{name:"Igloo 2", price:1000}, {name:"SmartFusion", price:1000},{name:"SmartFusion 2", price:1000}, {name:"ProAsic", price:1000}],
  ]

  export const FPGA=(props:any)=>{
    const [selected, setSelected] = useState<{ name: string, price:number } | null>(null)
   

    const handleSelected=(value:any, idx:number)=>{
        if(idx===1)setSelected(value);
        props.handleFpga(value, idx);
    }
    return (
      <div className="w-full px-4">
        <RadioComp radios = {arr[0]} select={arr[0][0]} />
        <RadioComp idx={1} radios = {arr[1]} select={selected} change={handleSelected}  />
        {selected && selected?.name=="AMD/Xilinx" && <RadioComp idx={2} radios = {arr[2]}  change={handleSelected}    />}
        {selected && selected?.name=="Intel/Altera" && <RadioComp idx={3} radios = {arr[3]}  change={handleSelected}   />}
        {selected && selected?.name=="Microsemi/Microchip/Actel" && <RadioComp idx={4} radios = {arr[4]}  change={handleSelected}   />}
        {selected && selected?.name=="Others" && 
        <div className='m-auto'>
<label htmlFor="message" className="block mb-2 text-2xl font-medium text-gray">Enter your requirements</label>
<textarea id="message" className="h-40 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea></div>
}
      </div>
    )
}
