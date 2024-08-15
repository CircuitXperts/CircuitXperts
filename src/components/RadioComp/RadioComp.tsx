import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const RadioComp =(props:any)=>{
    const [selected, setSelected] = useState(props.select||{})
    const handleChange=(value:any)=>{
        setSelected(value);
        if(props.change)props.change(value, props.idx);
    }
    return <div className="w-full border-2 shadow-lg border-gray-400 rounded-lg p-3  my-6">
        {props.radios.length>1 && <div className='mb-2 text-2xl font-bold'>Select one : </div>}
        <RadioGroup by="name" value={selected} onChange={(value) => handleChange(value)} aria-label="Server size" className=" flex flex-wrap gap-3">
            {props.radios.map((radio:any) => (
              <Radio
                key={radio.name}
                value={radio??""}
                className="group w-fit relative  flex cursor-pointer rounded-lg bg-blue-500 py-3 px-4 text-white shadow-sm shadow-gray-700 transition focus:outline-none  data-[checked]:bg-blue-700"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm/6">
                    <p className="font-semibold text-lg text-white">{radio.name}</p>
                    <div className="flex gap-2 text-white/70">
                      <div aria-hidden="true">Price :</div>
                      {radio.price?<div>&#8377;{radio.price}</div>:<div>Depends upon requirements</div>}
                    </div>
                  </div>
                  <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
    </div>
}
