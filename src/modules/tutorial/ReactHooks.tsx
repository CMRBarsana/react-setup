import { useState } from 'react';

function ReactHooks() {
  var sampCount = 0;
  const [count, setCount] = useState(0);
  // useState
  // useRef
  // useMemo
  // useEffect
  // useCallback
  // useContext
  const handle = () => {
    sampCount = 1;
  };

  return (
    <div>
      <div>Var {sampCount}</div>
      <div>State {count}</div>
      <button onClick={handle}>Set Var</button>
      <button onClick={() => setCount(1)}>Set State</button>
    </div>
  );
}

export default ReactHooks;
