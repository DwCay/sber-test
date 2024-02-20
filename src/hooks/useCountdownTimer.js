import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTimer, toNextTimer } from "../store/clockSlice";

function useCountdownTimer(timer) {
  const [startSound, setStartSound] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (timer.started) {
      const interval = setInterval(() => {
        dispatch(setTimer(timer.time - 1));
      }, 1000);
      if (timer.time === 0) {
        dispatch(toNextTimer());
        setStartSound(true);
        setTimeout(() => setStartSound(false), 4000);
      }
      return () => clearInterval(interval);
    }
  }, [dispatch,timer]);
  return startSound;
}

export default useCountdownTimer