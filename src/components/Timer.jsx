import { useDispatch, useSelector} from "react-redux";
import { startTimer, refresh } from "../store/clockSlice";
import { useCallback } from "react";
import useCountdownTimer from "../hooks/useCountdownTimer";
import getFormattedTime from "../utils/getFormattedTime";
import Button from "./Button";
function Timer() {
  const timer = useSelector((state) => state.clock.currentTimer);
  const dispatch = useDispatch();
  const startSound = useCountdownTimer(timer);

  const handleStartTimer = useCallback(() => {
      dispatch(startTimer(!timer.started));
  }, [dispatch, timer.started]);

  const handleRefresh = useCallback(() => {
      dispatch(refresh());
  }, [dispatch]);

  return (
    <div className="timer">
      <h1 className={timer.time < 60 ? "ending" : ""}>{timer.label}</h1>
      <span className={"time " + (timer.time < 60 ? "ending" : "")}>{getFormattedTime(timer.time)}</span>
      <div className="timer-interface">
        <Button icon={timer.started ? "pause" : "play_arrow"} size={35} click={handleStartTimer}/>
        <Button icon="refresh" size={35} click={handleRefresh}/>
      </div>
      {startSound && 
        <audio 
          preload="auto"
          autoPlay 
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
        }
    </div>
  );
}

export default Timer;