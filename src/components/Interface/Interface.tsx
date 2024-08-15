import { useState } from "react";

const getCheckBoxes = (arr: any, handleSelected:any) => {
    return <ul className="border-2  shadow-lg border-gray-400 rounded-lg p-3 flex flex-wrap w-full gap-3 text-black ">
        {arr.map((item: any, index: number) => {
            return <li key={index} className="w-fit"> 
                <input type="checkbox" name={item.name} onClick={handleSelected} id={item.name} value={item.price} className="hidden peer" required={true} />
                <label htmlFor={item.name} className="inline-flex shadow-sm items-center justify-between w-full py-3 px-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:!bg-blue-200 hover:text-gray-600  hover:bg-gray-50 ">
                    <div className="block">
                        <div className="w-full text-lg font-semibold">{item.name}</div>
                        <div className="w-full text-gray-500 text-sm">Price: &#8377;{item.price}</div>
                    </div>
                </label>
            </li>

        })
        }

    </ul>
}
export const Interface = (props:any) => {
   
    const arr=[
        [{name:"10/1000Mbps Ethernet", price: 1000}, {name:"1000 Mbps Ethernet", price: 1000}, {name:"10G Ethernet", price: 1000}, {name:"25G Ethernet", price: 1000}, {name:"40G Ethernet", price: 1000}, {name:"100G Ethernet", price: 1000}, {name:"USB 2.0/3.0", price: 1000}, {name:"UART : USB", price: 1000}, {name:"UART : RS232", price: 1000}, {name:"RS232", price: 1000}, {name:"RS422", price: 1000}, {name:"RS485", price: 1000}],
  [{name:"LVDS/MLVDS IN", price: 1000}, {name:"LVDS/MLVDS OUT", price: 1000}, {name:"TTL IN", price: 1000}, {name:"TTL OUT", price: 1000}, {name:"TTL IN/OUT", price: 1000}, {name:"LVTTL IN", price: 1000}, {name:"LVTTL OUT", price: 1000}, {name:"LVTTL IN/OUT", price: 1000}, {name:"ADC <500 MSPS", price: 1000}, {name:"ADC >500 MSPS", price: 1000}, {name:"DAC <500 MSPS", price: 1000}, {name:"DAC >500 MSPS", price: 1000}],
  [{name:"Display Port", price: 1000}, {name:"VGA", price: 1000}, {name:"HDMI", price: 1000}, {name:"MIL 1553", price: 1000}, {name:"ARNIC", price: 1000}, {name:"Audio Codec", price: 1000}, {name:"DDR2/DDR3/DDR4", price: 1000}]
    ]
    return <div className="p-4 flex flex-col gap-8">

        <h3 className="text-xl font-bold text-black">Choose technology:</h3>
        {getCheckBoxes(arr[0], props.handleSelected)}
        {getCheckBoxes(arr[1], props.handleSelected)}
        {getCheckBoxes(arr[2], props.handleSelected)}

    </div>
}