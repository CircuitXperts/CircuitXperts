import { useEffect, useState } from "react";

export const PriceDetails = (props: any) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cgst, setCgst] = useState(0);
  useEffect(() => {
    let total = 0;
    Object.keys(props.fpga).map((key) => {
      if (props.fpga[key].price) total += parseInt(props.fpga[key].price);
    });
    props.interfaces.map((item: any) => (total += parseInt(item.price)));
    setCgst(total * 0.09);
    setTotalPrice(total);
  }, [props.fpga, props.interfaces]);
  return (
    <div className="sticky lg:overflow-y-scroll lg:h-[75vh] right-0 top-0 m-2 my-4 border-2 shadow-lg lg:w-[25%] w-[100%] border-gray-400 rounded-lg p-3">
      <div className="text-2xl mb-3 font-semibold">Price Details</div>
      {Object.keys(props.fpga).map(
        (key) =>
          props.fpga[key].name && (
            <div className="flex justify-between">
              <div className="text-lg font-medium">{props.fpga[key].name}</div>
              <div className="text-lg">&#8377;{props.fpga[key].price}</div>
            </div>
          )
      )}
      {props.interfaces.map((item: any) => (
        <div className="flex justify-between">
          <div className="text-lg font-medium">{item.name}</div>
          <div className="text-lg">&#8377;{item.price}</div>
        </div>
      ))}
      <hr className="my-2" />
      <div className="flex justify-between">
        <div className="text-lg font-medium">Total Sum</div>
        <div className="text-lg">&#8377;{totalPrice || 0}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-medium">CGST (9%)</div>
        <div className="text-lg">&#8377;{cgst || 0}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-medium">SGST (9%)</div>
        <div className="text-lg">&#8377;{cgst || 0}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-bold">Total Price</div>
        <div className="text-lg font-bold">
          &#8377;{totalPrice + cgst * 2 || 0}
        </div>
      </div>
    </div>
  );
};
