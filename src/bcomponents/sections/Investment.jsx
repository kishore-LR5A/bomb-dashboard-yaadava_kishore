import React from 'react';
import BoardRoom from "../BoardRoom";
import investmentStategy from "../../assets/dashboard_pics/investmentStategy.svg";
import discord from '../../assets/dashboard_pics/discord.svg';
import docs from '../../assets/dashboard_pics/docs.svg';
function Investment() {
  return (
    <div className="flex space-x-2">
      {/* right */}
      <div className="flex flex-col space-y-2">
        {/* link */}
        <div className="flex justify-end">
          <a href="/">
            <img src={investmentStategy} alt="img" />
          </a>
        </div>
        <div className="w-[646px] h-[40px] bg-[#00ADE8] border-[0.3px] border-[#E41A1A] flex justify-center items-center text-[24px] font-bold ">
          Invest Now
        </div>
        <div className="flex space-x-2">
          {/* discord */}
          <div className="flex space-x-1 w-[317px] h-[40px] items-center justify-center bg-gray-400 border-[0.3px] border-[#728CDF]">
            <div className="rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center">
              <img className="w-[28px] h-[28px] " src={discord} alt="" />
            </div>
            <p className="text-[18px] font-bold">Chat on Discord</p>
          </div>
          {/* read docs */}
          <div className="flex space-x-1 w-[317px] h-[40px] items-center justify-center bg-gray-400 border-[0.3px] border-[#728CDF]">
            <div className="rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center">
              <img className="w-[23px] h-[23px] " src={docs} alt="" />
            </div>
            <p className="text-[18px] font-bold">Read Docs</p>
          </div>
        </div>
        {/* BoardRoom */}
        <BoardRoom />
      </div>
      {/* left */}
      <div className="mx-auto flex bg-[#202543] bg-opacity-50 space-x-2 w-[382px] h-[330px] justify-start items-start rounded-md">
        <p className="text-[22px] pl-[19px] pt-[8px]">Latest News</p>
      </div>
    </div>
  );
}

export default Investment;
