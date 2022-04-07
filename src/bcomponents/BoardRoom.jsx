import React, { useMemo } from 'react';
import TextImage from './TextImage';
import bomb from '../assets/dashboard_pics/summary/bomb.svg';
import bshares from '../assets/dashboard_pics/summary/bshares.svg';
import arrowUp from '../assets/dashboard_pics/icons/arrow-up-circle.svg';
import arrowDown from '../assets/dashboard_pics/icons/arrow-down-circle.svg';
import useTotalStakedOnBoardroom from '../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../utils/formatBalance';
import useBank from '../hooks/useBank';
import useStatsForPool from '../hooks/useStatsForPool';
// import useEarnings from '../hooks/useEarnings';
import useBombStats from '../hooks/useBombStats';
import useShareStats from '../hooks/usebShareStats';
// import useTokenBalance from '../hooks/useTokenBalance';
// import useStakedBalance from '../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../hooks/useStakedTokenPriceInDollars';
// import useHarvest from '../hooks/useHarvest';
// import useRedeem from '../hooks/useRedeem';
import useModal from '../hooks/useModal';
// import useStake from '../hooks/useStake';
import DepositModal from '../views/Boardroom/components/DepositModal';
import useTokenBalance from '../hooks/useTokenBalance';
import WithdrawModal from '../views/Boardroom/components/WithdrawModal';
// /home/yaadava_kishore/Documents/dyeus/bomb-frontend/src/views/Boardroom/components/DepositModal.tsx
// import useWithdraw from '../hooks/useWithdraw';
import useHarvestFromBoardroom from '../hooks/useHarvestFromBoardroom';
import useEarningsOnBoardroom from '../hooks/useEarningsOnBoardroom';
import useBombFinance from '../hooks/useBombFinance';
import useWithdrawFromBoardroom from '../hooks/useWithdrawFromBoardroom';
// import useWithdrawCheck from '../hooks/boardroom/useWithdrawCheck';
import useStakeToBoardroom from '../hooks/useStakeToBoardroom';
// import useApprove from '../hooks/useApprove';
import useStakedBalanceOnBoardroom from '../hooks/useStakedBalanceOnBoardroom';
import useBoardroomTVL from '../hooks/useBoardroomTVL';
// import useUnstakeTimerBoardroom from '../hooks/boardroom/useUnstakeTimerBoardroom';

function BoardRoom() {
  // boardroom TVL
  const boardroomTVL = useBoardroomTVL();
  // const bankContract = 'BombBshareLPBShareRewardPool'; // for BOMB-BSHARE
  const bankContract = 'BombBShareRewardPool'; // for BOMB-BSHARE
  const bank = useBank(bankContract);
  // const tokenBalance = useTokenBalance(bank.depositToken);
  // const stakedBalance = useStakedBalance(bank.contract, bank.poolId);

  // deposit
  // const { onStake } = useStake(bank);
  const bombFinance = useBombFinance();
  // const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);

  const tokenBalance = useTokenBalance(bombFinance.BSHARE);
  const stakedBalance = useStakedBalanceOnBoardroom();
  // const {from, to} = useUnstakeTimerBoardroom();

  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
  const tokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );
  // const isOldBoardroomMember = boardroomVersion !== 'latest';

  const { onStake } = useStakeToBoardroom();
  const { onWithdraw } = useWithdrawFromBoardroom();
  // const canWithdrawFromBoardroom = useWithdrawCheck();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'BShare'}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'BShare'}
    />,
  );
  // const [onPresentDeposit, onDismissDeposit] = useModal(
  //   <DepositModal
  //     max={tokenBalance}
  //     decimals={bank.depositToken.decimal}
  //     onConfirm={(amount) => {
  //       if (Number(amount) <= 0 || isNaN(Number(amount))) return;
  //       onStake(amount);
  //       onDismissDeposit();
  //     }}
  //     tokenName={bank.depositTokenName}
  //   />,
  // );
  // // withdraw
  // const { onWithdraw } = useWithdraw(bank);
  // const [onPresentWithdraw, onDismissWithdraw] = useModal(
  //   <WithdrawModal
  //     max={stakedBalance}
  //     decimals={bank.depositToken.decimal}
  //     onConfirm={(amount) => {
  //       if (Number(amount) <= 0 || isNaN(Number(amount))) return;
  //       onWithdraw(amount);
  //       onDismissWithdraw();
  //     }}
  //     tokenName={bank.depositTokenName}
  //   />,
  // );
  // const { onReward } = useHarvest(bank); //claim
  // const { onRedeem } = useRedeem(bank); // withdraw
  const { onReward } = useHarvestFromBoardroom(); //claim rewards
  const earnings = useEarningsOnBoardroom();

  // const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const bombStats = useBombStats();
  const tShareStats = useShareStats();

  // const tokenName = bank.earnTokenName === 'BSHARE' ? 'BSHARE' : 'BOMB';
  // const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  // const tokenPriceInDollars = useMemo(
  //   () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
  //   [tokenStats],
  // );

  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  // const { account } = useWallet();
  // const { onRedeem } = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);

  const totalStaked = useTotalStakedOnBoardroom();

  // const tokenBalance = useTokenBalance(bank.depositToken);
  // const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const tokenPriceInDollarsStake = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollarsStake = (
    Number(tokenPriceInDollarsStake) * Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
  ).toFixed(2);
  return (
    <div className="w-[646px] h-[212px]  bg-[#202543] bg-opacity-50 rounded-md pl-[16px]">
      {/* upper */}
      {/* mx-auto flex flex-col bg-[#202543] bg-opacity-50 space-y-1 justify-center items-start rounded-md py-[10px] */}
      <div className="flex pt-[20px]">
        <div className="flex justify-start items-center space-x-4">
          <img className="w-[33px] h-[33px] " src={bshares} alt="img" />
          <div className="flex flex-col justify-center items-center space-y-1">
            <div className="flex justify-between w-[542px]">
              <div className="flex flex-col">
                <div className=" flex space-x-4">
                  <p className="text-22 font-bold">Boardroom</p>
                  {/* button or div */}
                  <div className="bg-[#00E8A2] bg-opacity-50 rounded-md px-2">Recommended</div>
                </div>
                <p>Stake BSHARE and earn BOMB every epoch</p>
              </div>
              <p className="flex items-end">
                {/* TVL: <span className="text-[16px] font-semibold ">${statsOnPool?.TVL}</span> */}
                TVL: <span className="text-[16px] font-semibold ">${boardroomTVL}</span>
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
        {getDisplayBalance(totalStaked)}
      </div>
      {/* lower */}
      <div className="flex justify-between pt-[7px] w-[605px] ">
        {/* left */}
        <div className="flex space-x-10 pt-2">
          <div className="flex flex-col space-y-1">
            <p>Daily Returns:</p>
            <p>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</p>
          </div>
          {/* stake */}
          <div className="flex flex-col space-y-1">
            <p>Your Stake</p>
            <div className="flex space-x-1">
              <img src={bshares} alt="" />
              <p>{getDisplayBalance(stakedBalance, bank.depositToken.decimal)}</p>
            </div>
            <p>≈ ${earnedInDollarsStake}</p>
          </div>
          {/* earned */}
          <div className="flex flex-col space-y-1">
            <p>Earned</p>
            <div className="flex space-x-1">
              <img src={bomb} alt="" />
              <p> {getDisplayBalance(earnings)} </p>
            </div>
            <p>≈ ${earnedInDollars}</p>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col space-y-2 items-center justify-center w-[230px] ">
          {/* 3 same elements should be made as a component */}
          <div className="flex space-x-2">
            <button onClick={() => (bank.closedForStaking ? null : onPresentDeposit())}>
              <TextImage pic={arrowUp} t="Deposit" />
            </button>
            {/* <button onClick={onRedeem}> */}
            <button onClick={onPresentWithdraw}>
              <TextImage pic={arrowDown} t="Withdraw" />
            </button>
          </div>
          <button
            onClick={onReward}
            disabled={earnings.eq(0)}
            className="border border-white rounded-full flex items-center justify-center space-x-2 px-3 w-[217px] disabled:opacity-70"
          >
            <p>Claim Rewards</p>
            <img className="w-[18px] h-[18px] " src={bshares} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardRoom;
