import React from 'react';
import TextImage from './TextImage';
import bomb from '../assets/dashboard_pics/summary/bomb.svg';
import bshares from '../assets/dashboard_pics/summary/bshares.svg';
import arrowUp from '../assets/dashboard_pics/icons/arrow-up-circle.svg';
import arrowDown from '../assets/dashboard_pics/icons/arrow-down-circle.svg';
function BoardRoom() {
  return (
    <div className="w-[646px] h-[202px]  bg-[#202543] bg-opacity-50 rounded-md pl-[16px]">
      {/* upper */}
      {/* mx-auto flex flex-col bg-[#202543] bg-opacity-50 space-y-1 justify-center items-start rounded-md py-[10px] */}
      <div className="flex pt-[20px]">
        <div className="flex justify-start items-center space-x-4">
          <img className="w-[33px] h-[33px] " src={bshares} alt="img" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <div className="flex justify-between w-[542px]">
              <div className=" flex space-x-4">
                <p className="text-22 font-bold">BOMB-BTCB </p>
                {/* button or div */}
                <div className="bg-[#00E8A2] bg-opacity-50 rounded-md px-2">Recommended</div>
              </div>
              <p className="flex items-end">
                TVL: <span className="text-[16px] font-semibold ">$1,008,430</span>
              </p>
            </div>
            {/* horizontal line */}
            <hr className="border border-b-[0.5px] text-[#C3C5CB] w-[542px]" />
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="flex justify-end items-center pr-[35px] pt-[10px]">
        Total Staked:{' '}
        <span>
          <img src={bshares} alt="" />
        </span>{' '}
        7232
      </div>
      {/* lower */}
      <div className="flex justify-between pt-[10px] w-[605px] ">
        {/* left */}
        <div className="flex space-x-10 pt-2">
          <div className="flex flex-col space-y-1">
            <p>Daily Returns:</p>
            <p>2%</p>
          </div>
          {/* stake */}
          <div className="flex flex-col space-y-1">
            <p>Your Stake</p>
            <div className="flex space-x-1">
              <img src={bshares} alt="" />
              <p>124.21</p>
            </div>
            <p>≈ $1171.62</p>
          </div>
          {/* earned */}
          <div className="flex flex-col space-y-1">
            <p>Earned</p>
            <div className="flex space-x-1">
              <img src={bomb} alt="" />
              <p> 6.4413 </p>
            </div>
            <p>≈ $298.88</p>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col space-y-2 items-center justify-center w-[230px] ">
          {/* 3 same elements should be made as a component */}
          <div className="flex space-x-2">
            <TextImage pic={arrowUp} t="Deposit" />
            <TextImage pic={arrowDown} t="Withdraw" />
          </div>
          <div className="border border-white rounded-full flex items-center justify-center space-x-2 px-3 w-[217px]">
            <p>Claim Rewards</p>
            <img className="w-[18px] h-[18px] " src={bshares} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardRoom;
