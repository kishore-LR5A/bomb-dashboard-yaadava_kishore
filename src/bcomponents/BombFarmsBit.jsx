import React from 'react';
import TextImage from './TextImage';

import bombbitLP from '../assets/dashboard_pics/pictextnum/bomb-bitcoin-LP.svg';
import bshares from '../assets/dashboard_pics/summary/bshares.svg';
import arrowUp from '../assets/dashboard_pics/icons/arrow-up-circle.svg';
import arrowDown from '../assets/dashboard_pics/icons/arrow-down-circle.svg';

function BombFarms(props) {
  return (
    <div>
      {/* upper */}
      <div className="flex pt-[20px]">
        <div className="flex justify-start items-center space-x-4">
          <img className="w-[33px] h-[33px] " src={bombbitLP} alt="" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <div className="flex justify-between w-[950px]">
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
            <hr className="border border-b-[0.5px] text-[#C3C5CB] w-[950px]" />
          </div>
        </div>
      </div>

      {/* lower */}
      <div className="flex justify-between pt-[10px]">
        {/* left */}
        <div className="flex space-x-20 pt-2">
          <div className="flex flex-col space-y-1">
            <p>Daily Returns:</p>
            <p>2%</p>
          </div>
          {/* stake */}
          <div className="flex flex-col space-y-1">
            <p>Your Stake</p>
            <div className="flex space-x-1">
              <img src="pictextnum/bomb-bitcoin-LP.svg" alt="" />
              <p>124.21</p>
            </div>
            <p>≈ $1171.62</p>
          </div>
          {/* earned */}
          <div className="flex flex-col space-y-1">
            <p>Earned</p>
            <div className="flex space-x-1">
              <img src="summary/bshares.svg" alt="" />
              <p> 6.4413 </p>
            </div>
            <p>≈ $298.88</p>
          </div>
        </div>
        {/* right */}
        <div className="flex items-end justify-center">
          {/* 3 same elements should be made as a component */}
          <div className="flex space-x-2">
            <TextImage pic={arrowUp} t="Deposit" />
            <TextImage pic={arrowDown} t="Withdraw" />
            <TextImage pic={bshares} t="Claim Rewards" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BombFarms;
