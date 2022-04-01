import React from 'react';
import bbond from '../../assets/dashboard_pics/summary/bbond.svg';
import arrowdown from '../../assets/dashboard_pics/icons/arrow-down-circle.svg';
import shoppingCart from '../../assets/dashboard_pics/icons/shopping-cart.svg';
import useBondStats from '../../hooks/useBondStats';
import {getDisplayBalance} from '../../utils/formatBalance'
import useBombFinance from '../../hooks/useBombFinance';
import useTokenBalance from '../../hooks/useTokenBalance';
import TextImage from '../TextImage';
function Bonds() {
  const bondStat = useBondStats();
  const bombFinance = useBombFinance();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

  return (
    <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[186px] justify-start items-start rounded-md p-[22px]">
      <div className="flex flex-col justify-center items-start space-y-2">
        {/* upper */}
        <div className="flex items-center justify-start space-x-1">
          <img className="w-[48px] h-[48px] " src={bbond} alt="" />
          <div className="flex flex-col items-start justify-start">
            <p className="font-bold text-[22px]">Bonds</p>
            <p className="text-[14px]">
              BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
            </p>
          </div>
        </div>
        {/* lower */}
        <div className="flex justify-between items-center space-x-20 w-[950px]">
          {/* left */}
          <div className="flex justify-center items-center">
            <div className="flex space-x-10 justify-center items-center">
              <div className="flex flex-col space-y-1">
                <p className="text-[16px]">Current Price: (Bomb)^2</p>
                <p className="font-bold text-[22px]">BBond = {Number(bondStat?.tokenInFtm).toFixed(4) || '-'}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p>Available to redeem:</p>
                <div className="flex justify-center items-center">
                  <img className="w-[39px] h-[39px] " src={bbond} alt="" />
                  <p className="text-[36px]">{getDisplayBalance(bondBalance)}</p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className=" flex flex-col">
            {/* upper */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[16px] font-bold">Purchase BBond</p>
                <p className="text-[16px]">Bomb is over peg</p>
              </div>
              {/* div or button */}
              <TextImage pic={shoppingCart} t="Purchase" />
            </div>
            <hr className="border-b-[0.5px] text-[#C3C5CB] w-[417px]" />
            {/* lower */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[16px] font-bold">Redeem Bomb</p>
                <p className="text-[16px] invisible">Bomb is over peg</p>
              </div>
              {/* div or button */}
              <TextImage pic={arrowdown} t="Redeem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonds;

//   const bondStat = useBondStats();
//
//
// {Number(bondStat?.tokenInFtm).toFixed(4) || '-'}
