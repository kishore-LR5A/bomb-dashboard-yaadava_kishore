import React from 'react';
import bshares from '../../assets/dashboard_pics/summary/bshares.svg';
import BombFarmsComponent from '../BombFarmsComponent';
// import BombFarmsBnb from '../BombFarmsBnb';
import bombbitLP from '../../assets/dashboard_pics/pictextnum/bomb-bitcoin-LP.svg';
import bsharebnbLP from '../../assets/dashboard_pics/pictextnum/bshare-bnb-LP.svg';
import useHarvestFromBoardroom from '../../hooks/useHarvestFromBoardroom';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';

function BombFarms() {
  const { onReward } = useHarvestFromBoardroom();
  const earnings = useEarningsOnBoardroom();
  return (
    <div className="mx-auto mt-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[400px] justify-center items-start rounded-md p-[22px]">
      {/* upper */}
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-[22px]">Bomb Farms</p>
          <p className="text-[14px]">Stake your LP tokens in our farms to start earning $BSHARE</p>
        </div>
        <button
          onClick={onReward}
          disabled={earnings.eq(0)}
          className="border border-white rounded-full flex items-center justify-center space-x-1 px-3 disabled:opacity-70"
        >
          Claim All
          <img src={bshares} alt="" />
        </button>
      </div>
      {/* lower */}
      <div className="flex flex-col">
        {/* upper */}
        <BombFarmsComponent
          title="BOMB-BTCB"
          pic1={bombbitLP}
          pic2={bshares}
          bankContract="BombBtcbLPBShareRewardPool"
        />
        <hr className="border border-b-[0.5px] text-[#C3C5CB] w-[1000px] mt-2" />
        {/* lower */}
        <BombFarmsComponent
          title="BSHARE-BNB"
          pic1={bsharebnbLP}
          pic2={bshares}
          bankContract="BshareBnbLPBShareRewardPool"
        />
        {/* <BombFarmsBnb /> */}
      </div>
    </div>
  );
}

export default BombFarms;
