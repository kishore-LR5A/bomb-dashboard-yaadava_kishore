import React from 'react';
import bshares from "../../assets/dashboard_pics/summary/bshares.svg";
import BombFarmsBit from "../BombFarmsBit"
import BombFarmsBnb from "../BombFarmsBnb"

function BombFarms() {
  return (
    <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[380px] justify-center items-start rounded-md p-[22px]">
      {/* upper */}
      <div className="flex justify-between items-center w-full">
        <div>
          <p>Bomb Farms</p>
          <p>Stake your LP tokens in our farms to start earning $BSHARE</p>
        </div>
        <div className="border border-white rounded-full flex items-center justify-center space-x-1 px-3">
          Claim All
          <img src={bshares} alt="" />
        </div>
      </div>
      {/* middel */}
      <div className="flex flex-col">
        {/* upper */}

        {/* lower */}
        <BombFarmsBit />
        <hr className="border border-b-[0.5px] text-[#C3C5CB] w-[1000px] mt-2" />
        <BombFarmsBnb />
      </div>
      {/* lower */}
    </div>
  );
}

export default BombFarms;
