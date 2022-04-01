import React from "react";
import PicText from "./PicText";
import wMetaMask from "../assets/dashboard_pics/summary/wMetaMask.svg";

import bbond from "../assets/dashboard_pics/summary/bbond.svg";
import bomb from "../assets/dashboard_pics/summary/bomb.svg";
import bshares from "../assets/dashboard_pics/summary/bshares.svg";
// import useBondStats from "../hooks/useBondStats";

function Table(props) {
  // bomb -
  // const tBondStats = useBondStats();
  // const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  // bshare

  // bbond
  return (
    <div className="flex flex-col space-y-2 justify-center items-end w-[370px] text-center py-3">
      {/* ROW  0 */}
      <div className="flex justify-start items-center space-x-3 h-[20px]">
        {/* col1 */}
        <p className="text-[10px] w-[55px] invisible">Current Supply</p>
        {/* col2 */}
        <p className="text-[10px] w-[70px]">Current Supply</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">Total Supply</p>
        {/* col4 */}
        <p className="text-[10px] w-[70px]">price</p>
        {/* col5 */}
        <p className="text-[10px] w-[30px] invisible">Current Supply</p>
      </div>
      {/* horizontal line small */}
      <div className="flex justify-end items-end">
        <hr className="border-b-[0.5px] text-[#C3C5CB] w-[299px]" />
      </div>
      {/* ROW  1 */}
      <div className="flex justify-start items-center space-x-3 h-[40px]">
        {/* col1 */}
        <div className="w-[75px]">
          <PicText pic={bomb} t="BOMB" />
        </div>
        {/* col2 */}
        <p className="text-[10px] w-[70px]">{props.v11}</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">{props.v12}</p>
        {/* col4 */}
        <div className="w-[70px] flex flex-col justify-center items-center">
          <p className="text-[10px]">{props.v131}</p>
          <p className="text-[10px]">{props.v132}</p>
        </div>
        {/* col5 */}
        <div className="w-[30px]">
          <img src={wMetaMask} alt="" />
        </div>
      </div>
      {/* horizontal line big */}
      <div className="flex justify-end items-center">
        <hr className="border-b-[0.5px] text-[#C3C5CB] w-[352px]" />
      </div>
      {/* ROW  2 */}
      <div className="flex justify-start items-center space-x-3 h-[40px]">
        {/* col1 */}
        <div className="w-[75px]">
          <PicText pic={bshares} t="BSHARE" />
        </div>
        {/* col2 */}
        <p className="text-[10px] w-[70px]">{props.v21}</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">{props.v22}</p>
        {/* col4 */}
        <div className="w-[70px] flex flex-col justify-center items-center">
          <p className="text-[10px]">{props.v231}</p>
          <p className="text-[10px]">{props.v232}</p>
        </div>
        {/* col5 */}
        <div className="w-[30px]">
          <img src={wMetaMask} alt="" />
        </div>
      </div>
      {/* horizontal line big */}
      <div className="flex justify-end items-center">
        <hr className="border-b-[0.5px] text-[#C3C5CB] w-[352px]" />
      </div>
      {/* ROW  3 */}
      <div className="flex justify-start items-center space-x-3 h-[40px]">
        {/* col1 */}
        <div className="w-[75px]">
          <PicText pic={bbond} t="BBONB" />
        </div>
        {/* col2 */}
        <p className="text-[10px] w-[70px]">{props.v31}</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">{props.v32}</p>
        {/* col4 */}
        <div className="w-[70px] flex flex-col justify-center items-center">
          <p className="text-[10px]">{props.v331}</p>
          <p className="text-[10px]">{props.v332}</p>
        </div>
        {/* col5 */}
        <div className="w-[30px]">
          <img src={wMetaMask} alt="" />
        </div>
      </div>
      {/* horizontal line small */}
      <div className="flex justify-end items-end">
        <hr className="border-b-[0.5px] text-[#C3C5CB] w-[299px]" />
      </div>
    </div>
  );
}

export default Table;
