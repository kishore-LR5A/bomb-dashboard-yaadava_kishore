import React, { useMemo } from 'react';
import TextImage from './TextImage';
// import bomb from '../assets/dashboard_pics/summary/bomb.svg';
// import bombbitLP from '../assets/dashboard_pics/pictextnum/bomb-bitcoin-LP.svg';
import bshares from '../assets/dashboard_pics/summary/bshares.svg';
import arrowUp from '../assets/dashboard_pics/icons/arrow-up-circle.svg';
import arrowDown from '../assets/dashboard_pics/icons/arrow-down-circle.svg';
// import useTotalStakedOnBoardroom from '../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../utils/formatBalance';
import useBank from '../hooks/useBank';
import useStatsForPool from '../hooks/useStatsForPool';
import useEarnings from '../hooks/useEarnings';
import useBombStats from '../hooks/useBombStats';
import useShareStats from '../hooks/usebShareStats';
// import useTokenBalance from '../hooks/useTokenBalance';
import useStakedBalance from '../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../hooks/useStakedTokenPriceInDollars';
import useHarvest from '../hooks/useHarvest';
import useRedeem from '../hooks/useRedeem';
// import bombbitLP from './assets/dashboard_pics/pictextnum/bomb-bitcoin-LP.svg';
// import bsharebnbLP from './assets/dashboard_pics/pictextnum/bshare-bnb-LP.svg';

function BombFarmsComponent(props) {
  // const bankContract = 'BombBtcbLPBShareRewardPool'; // for BOMB-BTCB
  const bankContract = props.bankContract;
  const bank = useBank(bankContract);
  const { onReward } = useHarvest(bank); //claim
  const { onRedeem } = useRedeem(bank); //withdraw

  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const bombStats = useBombStats();
  const tShareStats = useShareStats();

  // const tokenName = bank.earnTokenName === 'BSHARE' ? 'BSHARE' : 'BOMB';
  const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );

  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  // const { account } = useWallet();
  // const { onRedeem } = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);

  // const totalStaked = useTotalStakedOnBoardroom();

  // const tokenBalance = useTokenBalance(bank.depositToken);
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const tokenPriceInDollarsStake = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollarsStake = (
    Number(tokenPriceInDollarsStake) * Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
  ).toFixed(2);
  return (
    <div>
      {/* upper */}
      <div className="flex pt-[20px]">
        <div className="flex justify-start items-center space-x-4">
          <img className="w-[33px] h-[33px] " src={props.pic1} alt="" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <div className="flex justify-between w-[950px]">
              <div className=" flex space-x-4">
                <p className="text-22 font-bold">{props.title}</p>
                {/* button or div */}
                <div className="bg-[#00E8A2] bg-opacity-50 rounded-md px-2">Recommended</div>
              </div>
              <p className="flex items-end">
                TVL: <span className="text-[16px] font-semibold ">${statsOnPool?.TVL}</span>
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
            <p>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</p>
          </div>
          {/* stake */}
          <div className="flex flex-col space-y-1">
            <p>Your Stake</p>
            <div className="flex space-x-1">
              <img src={props.pic1} alt="" />
              <p>{getDisplayBalance(stakedBalance, bank.depositToken.decimal)}</p>
            </div>
            <p>≈ ${earnedInDollarsStake}</p>
          </div>
          {/* earned */}
          <div className="flex flex-col space-y-1">
            <p>Earned</p>
            <div className="flex space-x-1">
              <img src={props.pic2} alt="" />
              <p> {getDisplayBalance(earnings)} </p>
            </div>
            <p>≈ ${earnedInDollars}</p>
          </div>
        </div>
        {/* right */}
        <div className="flex items-end justify-center">
          {/* 3 same elements should be made as a component */}
          <div className="flex space-x-2">
            <TextImage pic={arrowUp} t="Deposit" />
            <button onClick={onRedeem}>
              <TextImage pic={arrowDown} t="Withdraw" />
            </button>
            <button onClick={onReward} disabled={earnings.eq(0)} className="disabled:opacity-70">
              <TextImage pic={bshares} t="Claim Rewards" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BombFarmsComponent;
