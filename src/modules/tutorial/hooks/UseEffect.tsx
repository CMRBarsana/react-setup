import { useEffect, useState } from 'react';

import { toastSuccess } from 'core-ui';

function UseEffect() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((currCount) => currCount + 1);
  };

  const handleMinus = () => {
    setCount((currCount) => currCount - 1);
  };

  useEffect(() => {
    toastSuccess('Effect changes detected');
  }, [count]);

  return (
    <div>
      <div className="flex space-x-3">
        <button onClick={handleMinus}>-</button>
        <div>{count}</div>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}

export default UseEffect;
