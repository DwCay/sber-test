import Button from "./Button";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeLength } from "../store/clockSlice";
function LengthsInterface(props) {
  const dispatch = useDispatch();

  const handleChangeLength = useCallback((type) => {
    dispatch(changeLength({ label: props.length.label, type }));
  }, [dispatch, props.length.label])

  return (
    <div className="length">
      <h1>{`${props.length.label} Length`}</h1>
      <div className="interface">
        <Button
          icon="arrow_upward"
          click={() => handleChangeLength("increment")}
        />
        <span>{props.length.value}</span>
        <Button
          icon="arrow_downward"
          click={() => handleChangeLength("decrement")}
        />
      </div>
    </div>
  );
}

export default LengthsInterface