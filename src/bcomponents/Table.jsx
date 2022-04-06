import React, { useMemo } from 'react';
import PicText from './PicText';
import wMetaMask from '../assets/dashboard_pics/summary/wMetaMask.svg';

import bbond from '../assets/dashboard_pics/summary/bbond.svg';
import bomb from '../assets/dashboard_pics/summary/bomb.svg';
import bshares from '../assets/dashboard_pics/summary/bshares.svg';
import useBombStats from '../hooks/useBombStats';
import { roundAndFormatNumber } from '../0x';
// import useBShareSwapperStats from '../hooks/BShareSwapper/useBShareSwapperStats';
import useBondStats from '../hooks/useBondStats';
import usebShareStats from '../hooks/usebShareStats';
// import useBondStats from "../hooks/useBondStats";

function Table(props) {
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
  
  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

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
        <p className="text-[10px] w-[70px]">{roundAndFormatNumber(bombCirculatingSupply, 2)}</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">{roundAndFormatNumber(bombTotalSupply, 2)}</p>
        {/* col4 */}
        <div className="w-[70px] flex flex-col justify-center items-center">
          <p className="text-[10px]">${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}</p>
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
        <p className="text-[10px] w-[70px]">{roundAndFormatNumber(bShareCirculatingSupply, 2)}</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">{roundAndFormatNumber(bShareTotalSupply, 2)}</p>
        {/* col4 */}
        <div className="w-[70px] flex flex-col justify-center items-center">
          <p className="text-[10px]">${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}</p>
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
        <p className="text-[10px] w-[70px]">{roundAndFormatNumber(tBondCirculatingSupply, 2)}</p>
        {/* col3 */}
        <p className="text-[10px] w-[70px]">{roundAndFormatNumber(tBondTotalSupply, 2)}</p>
        {/* col4 */}
        <div className="w-[70px] flex flex-col justify-center items-center">
          <p className="text-[10px]">${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</p>
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

// bomb //
// const bombStats = useBombStats();
// price
// const bombPriceInDollars = useMemo(
//   () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
//   [bombStats],
// );
// {bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}
// c supply
// const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
// {roundAndFormatNumber(bombCirculatingSupply, 2)}
// t supplly
// const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

// roundAndFormatNumber(bombTotalSupply, 2)

// bshare //
// const bShareStats = useBShareSwapperStats();

// const bSharePriceInDollars = useMemo(
//   () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
//   [bShareStats],
// );
// {bSharePriceInDollars ? bSharePriceInDollars : '-.--'}
// c supply
// const bShareCirculatingSupply = useMemo(
//   () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
//   [bShareStats],
// );
// {roundAndFormatNumber(bShareCirculatingSupply, 2)}
// t supply
// const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
// {roundAndFormatNumber(bShareTotalSupply, 2)}

// bond //
// const tBondStats = useBondStats();
// const tBondPriceInDollars = useMemo(
//   () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
//   [tBondStats],
// );
// const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
// const tBondCirculatingSupply = useMemo(
//   () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
//   [tBondStats],
// );
// const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

// {tBondPriceInDollars ? tBondPriceInDollars : '-.--'}
// c supply
// {roundAndFormatNumber(tBondCirculatingSupply, 2)}
// t supply
// {roundAndFormatNumber(tBondTotalSupply, 2)}
