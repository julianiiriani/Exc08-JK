import Generations from "./Generations";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";

const CardInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Generations />
      <Evolution />
      <TypeEffect />
    </div>
  );
};

export default CardInfo;