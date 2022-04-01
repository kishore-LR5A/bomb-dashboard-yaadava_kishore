import React from "react";
import { useEffect } from "react";

function PicTextNum(props) {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className="flex justify-start items-center space-x-2">
      <div className="rounded-full w-[18px] h-[18px] bg-[#373747] flex justify-center items-center">
        <img className="w-[14px] h-[14px]" src={props?.pic} alt="" />
      </div>
      <p className="text-[12px]">{props?.t}:</p>
      <p className="text-[16px]">{props?.n}%</p>
    </div>
  );
}

export default PicTextNum;
