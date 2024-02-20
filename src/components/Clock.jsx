import { useSelector } from "react-redux";
import LengthsInterface from "./LengthsInterface";
import Timer from "./Timer";

function Clock() {
  const lengths = useSelector((state) => state.clock.lengths);
  return (
    <div className="clock">
      <h1>Clock 25+5</h1>
      <div className="lengths">
        {Object.values(lengths).map((length) => (
          <LengthsInterface key={length.label} length={length} />
        ))}
      </div>
      <Timer />
    </div>
  );
}

export default Clock;