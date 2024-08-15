import { useState } from "react";
import { Interface } from "../Interface";
import { FPGA } from "../FPGA";
import { PriceDetails } from "../PriceDetails";

export const ProductCost = (props: any) => {
  const [interfaces, setInterfaces] = useState<
    { name: string; price: number }[]
  >([]);
  const obj = {
    0: { name: "FPGA", price: 1000 },
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  };
  const [fpga, setFpga] = useState(obj);
  const handleFpga = (value: any, idx: number) => {
    if (fpga[1]) setFpga({ ...obj, "1": fpga[1], [idx]: value });
    else setFpga({ ...obj, [idx]: value });
  };
  const handleInterfaces = (e: any) => {
    if (e.target.checked)
      setInterfaces([
        ...interfaces,
        { name: e.target.name, price: e.target.value },
      ]);
    else
      setInterfaces(interfaces.filter((item) => item.name !== e.target.name));
  };
  return (
    <div className=" flex flex-wrap gap-3">
      <div className="lg:w-[70%] w-[100%]">
        <FPGA handleFpga={handleFpga} />
        <Interface handleSelected={handleInterfaces} />
      </div>
      <PriceDetails fpga={fpga} interfaces={interfaces} />
    </div>
  );
};
