import React from "react";

function PicText(props) {
  return (
    <div className="flex justify-start items-center">
      <div className="rounded-full w-[25px] h-[25px] bg-[#373747] flex justify-center items-center">
        <img className="w-[20px] h-[20px]" src={props?.pic} alt="" />
      </div>
      <p className="text-[14px]">${props?.t}</p>
    </div>
  );
}

export default PicText;
