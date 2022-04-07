import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import useRefresh from './useRefresh';

const useBoardroomAPR = () => {
  const [boardroomAPR, setboardroomAPR] = useState<Number>(0);
  const {slowRefresh} = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchTVL() {
      try {
        setboardroomAPR(await bombFinance.getBoardroomAPR());
      } catch (err) {
        console.error(err);
      }
    }
    fetchTVL();
  }, [setboardroomAPR, bombFinance, slowRefresh]);

  return boardroomAPR;
};

export default useBoardroomAPR;
