import React, { useCallback, useMemo } from 'react';
import bbond from '../../assets/dashboard_pics/summary/bbond.svg';
import arrowdown from '../../assets/dashboard_pics/icons/arrow-down-circle.svg';
import shoppingCart from '../../assets/dashboard_pics/icons/shopping-cart.svg';
import useBondStats from '../../hooks/useBondStats';
import { getDisplayBalance } from '../../utils/formatBalance';
import useBombFinance from '../../hooks/useBombFinance';
import useTokenBalance from '../../hooks/useTokenBalance';
import TextImage from '../TextImage';
import useModal from '../../hooks/useModal';
import ExchangeModal from '../../views/Bond/components/ExchangeModal';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
// import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from '../../bomb-finance/constants';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import { addTransaction } from '../../state/transactions/actions';
function Bonds() {
  const bondStat = useBondStats();
  const bombFinance = useBombFinance();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);
  // const bbondAvailable = useBondsPurchasable();
  const handleBuyBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
      });
    },
    [bombFinance],
  );

  const handleRedeemBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, { summary: `Redeem ${amount} BBOND` });
    },
    [bombFinance],
  );
  const bbondAvailable = useBondsPurchasable();

  // const onExchange = handleBuyBonds;
  const cashPrice = useCashPriceInLastTWAP();
  // const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  // const balance = useTokenBalance(bombFinance.BOMB);
  const [onPresent, onDismiss] = useModal(
    <ExchangeModal
      title="Purchase"
      description={
        !isBondPurchasable ? 'BOMB is over peg' : getDisplayBalance(bbondAvailable) + ' BBOND available for purchase'
      }
      // description={
      //   !isBondPurchasable
      //     ? 'BOMB is over peg'
      //     : getDisplayBalance(useBondsPurchasable) + ' BBOND available for purchase'
      // }
      // max={balance}

      max={bondBalance}
      onConfirm={(value) => {
        handleBuyBonds(value);
        onDismiss();
      }}
      action="Purchase"
      tokenName="BOMB"
    />,
  );
  const [onPresentR, onDismissR] = useModal(
    <ExchangeModal
      title="Redeem"
      description={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
      // max={balance}
      max={bondBalance}
      onConfirm={(value) => {
        handleRedeemBonds(value);
        onDismiss();
      }}
      action="Redeem"
      tokenName="BBOND"
    />,
  );

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
                <p className="font-bold text-[22px]">BBond = {Number(bondStat?.tokenInFtm).toFixed(4) || '-'}BTCB</p>
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
              <button onClick={onPresent}>
                <TextImage pic={shoppingCart} t="Purchase" />
              </button>
            </div>
            <hr className="border-b-[0.5px] text-[#C3C5CB] w-[417px]" />
            {/* lower */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[16px] font-bold">Redeem Bomb</p>
                <p className="text-[16px] invisible">Bomb is over peg</p>
              </div>
              {/* div or button */}
              <button onClick={onPresentR}>
                <TextImage pic={arrowdown} t="Redeem" />
              </button>
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

// purchase
// const [onPresent, onDismiss] = useModal(
//   <ExchangeModal
//     title={action}
//     description={priceDesc}
//     max={balance}
//     onConfirm={(value) => {
//       onExchange(value);
//       onDismiss();
//     }}
//     action={action}
//     tokenName={fromTokenName}
//   />,
// );

// <ExchangeCard
//   action="Purchase"
//   fromToken={bombFinance.BOMB}
//   fromTokenName="BOMB"
//   toToken={bombFinance.BBOND}
//   toTokenName="BBOND"
//   priceDesc={
//     !isBondPurchasable
//       ? 'BOMB is over peg'
//       : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'
//   }
//   onExchange={handleBuyBonds}
//   disabled={!bondStat || isBondRedeemable}
// />;

// redeem
// const [onPresentR, onDismissR] = useModal(
//   <ExchangeModal
//     title="Redeem"
//     description={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
//     // max={balance}
//     max={bondBalance}
//     onConfirm={(value) => {
//       handleRedeemBonds(value);
//       onDismiss();
//     }}
//     action="Redeem"
//     tokenName="BBOND"
//   />,
// );

/* <ExchangeCard
action="Redeem"
fromToken={bombFinance.BBOND}
fromTokenName="BBOND"
toToken={bombFinance.BOMB}
toTokenName="BOMB"
priceDesc={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
onExchange={handleRedeemBonds}
disabled={!bondStat || bondBalance.eq(0) || !isBondRedeemable}
disabledDescription={!isBondRedeemable ? `Enabled when 10,000 BOMB > ${BOND_REDEEM_PRICE}BTC` : null}
/> */
