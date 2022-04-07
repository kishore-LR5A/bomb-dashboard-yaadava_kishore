import React, { useMemo } from 'react';
import Page from './components/Page';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import './tailcss/main.css';

import HomeImage from './assets/img/background.jpg';

// summary folder
import bbond from './assets/dashboard_pics/summary/bbond.svg';
import bomb from './assets/dashboard_pics/summary/bomb.svg';
import bshares from './assets/dashboard_pics/summary/bshares.svg';

// pic text num
import bombbitLP from './assets/dashboard_pics/pictextnum/bomb-bitcoin-LP.svg';
import bsharebnbLP from './assets/dashboard_pics/pictextnum/bshare-bnb-LP.svg';

import PicTextNum from './bcomponents/PicTextNum';
import Table from './bcomponents/Table';
import Investment from './bcomponents/sections/Investment';
import BombFarms from './bcomponents/sections/BombFarms';
import Bonds from './bcomponents/sections/Bonds';
import useTotalValueLocked from './hooks/useTotalValueLocked';
import useCurrentEpoch from './hooks/useCurrentEpoch';
import ProgressCountdown from './views/Boardroom/components/ProgressCountdown';
import useTreasuryAllocationTimes from './hooks/useTreasuryAllocationTimes';
// import CountUp from 'react-countup';
import useCashPriceInEstimatedTWAP from './hooks/useCashPriceInEstimatedTWAP';
import useWallet from 'use-wallet';

import UnlockWallet from './components/UnlockWallet';


const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

function Dashboard() {
  const { account } = useWallet();
  const cashStat = useCashPriceInEstimatedTWAP();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  // Tvl value
  const TVL = useTotalValueLocked();
  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  return (
    <div>
      <Page>
        <Helmet>
          {/* <title>Dashboard</title> */}
          <title>bomb.money | Dashboard</title>
        </Helmet>
        <BackgroundImage />
        {!!account ? (
        <>
        <div>
          <div className='bg-[url("/background.jpg")] flex flex-col justify-start items-center text-white'>
            {/* section 1: Bomb Finance Summary */}
            <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[295px] justify-start items-center rounded-md">
              <div className="text-2xl mt-2 text-white">Bomb Finance Summary</div>
              <hr className="border-b-[0.5px] text-[#C3C5CB] w-[970px]" />
              <div className="grid grid-cols-5 gap-5 grid-rows-1">
                {/* left */}
                <div className="col-span-2 text-white ">
                  {/* 
            v12 - value at row 1 col 2
            */}
                  <Table
                  // v11="8.6M"
                  // v12="60.9K"
                  // v131="$0.24"
                  // v132="1.05 BTCB"
                  // v21="11.43M"
                  // v22="8.49m"
                  // v231="$300"
                  // v232="13000 BTCB"
                  // v31="20.00M"
                  // v32="175K"
                  // v331="$0.28"
                  // v332="1.15 BTCB"
                  />
                </div>
                {/* center */}
                <div className="col-span-1 flex flex-col justify-center items-center">
                  {/* upper */}
                  <div className="flex flex-col justify-start items-center p-0 ">
                    <p className="text-[20px]">Current Epoch</p>
                    <p className="text-[34px]">{Number(currentEpoch)}</p>
                    <hr className="border-b-[0.5px] text-[#C3C5CB] w-[185px]" />
                  </div>
                  {/* middle */}
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-[34px]">
                      {' '}
                      <ProgressCountdown
                        base={moment().toDate()}
                        hideBar={true}
                        deadline={to}
                        description="Next Epoch"
                      />
                    </p>
                    <p className="text-[20px]">Next Epoch in</p>
                    <hr className="border-b-[0.5px] text-[#C3C5CB] w-[128px]" />
                  </div>
                  {/* lower */}
                  <div className="flex flex-col justify-start items-center py-2">
                    <p className="text-[14px]">
                      Live TWAP: <span className="text-green-500 font-semibold text-[14px]">1.17</span>
                    </p>
                    <p className="text-[14px]">
                      TVL:{' '}
                      <span className="text-green-500 font-semibold text-[14px]">
                        {/* <CountUp style={{ fontSize: '25px' }} end={TVL} separator="," prefix="$" /> */}
                        ${TVL}
                      </span>
                    </p>
                    <p className="text-[14px]">
                      Last Epoch TWAP: <span className="text-green-500 font-semibold text-[14px]">{scalingFactor}</span>
                    </p>
                  </div>
                </div>
                {/* right */}
                <div className="col-span-2 flex flex-col justify-center items-center">
                  <div className="h-3/5 flex items-center justify-center">
                    <div className="rounded-full w-[140px] h-[140px] bg-[#16192A] flex flex-col items-center justify-center">
                      <div className="rounded-full w-[102px] h-[102px] bg-[#23284B] flex flex-col items-center justify-center">
                        <p className="text-[20px]">$10,451</p>
                        <p className="text-[16px]">+22%</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-2/5 flex justify-start space-x-10">
                    <div className="flex flex-col space-y-1">
                      <PicTextNum pic={bomb} t="Bomb" n="17" />
                      <PicTextNum pic={bshares} t="BShare" n="12" />
                      <PicTextNum pic={bbond} t="BBomb" n="20" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <PicTextNum pic={bombbitLP} t="Bomb-BTCB" n="17" />
                      <PicTextNum pic={bsharebnbLP} t="Bshare-BNB" n="17" />
                      <PicTextNum pic="" t="Others:" n="17" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section 2 */}
            <Investment />

            {/* section 3 */}
            <BombFarms />

            {/* section 4: Bonds */}
            <Bonds />
          </div>
        </div>
        </>
      ) : (
        <UnlockWallet />
      )}
      </Page>
    </div>
  );
}

export default Dashboard;

// section 4:
// current price bond^2
// {Number(bondStat?.tokenInFtm).toFixed(4) || '-'}
