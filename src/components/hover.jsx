import React, { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        marginTop: 20,
        background: isHovering ? "blue" : "orange",
      }}
    >
      <button onClick={() => console.log(ref.current)}>Click</button>
    </div>
  );
};

export default Hover;
