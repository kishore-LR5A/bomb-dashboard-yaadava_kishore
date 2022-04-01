import React from "react";

function TextImage(props) {
  return (
    <div className="border border-white rounded-full flex items-center justify-center space-x-2 px-3">
      <p className="text-[15px]">{props.t}</p>
      <img className="w-[18px] h-[18px] " src={props?.pic} alt="" />
    </div>
  );
}

export default TextImage;
