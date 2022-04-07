import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useBoardroomTVL = () => {
  const [boardroomTVL, setboardroomTVL] = useState<Number>(0);
  const {slowRefresh} = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchTVL() {
      try {
        setboardroomTVL(await bombFinance.getBoardroomTVL());
      } catch (err) {
        console.error(err);
      }
    }
    fetchTVL();
  }, [setboardroomTVL, bombFinance, slowRefresh]);

  return boardroomTVL;
};

export default useBoardroomTVL;
