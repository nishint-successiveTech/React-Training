import { useState } from "react";

const withLogger = (Component) => (props) => {
  const [showLogger, setShowLogger] = useState(true);

  return (
    <div>
      <button onClick={() => setShowLogger((prev) => !prev)}>
        {showLogger ? "Unmount LoggerComponent" : "Mount LoggerComponent"}
      </button>

      {showLogger && <Component />}
    </div>
  );
};

export default withLogger;
