import { useCallback, useState } from 'react';

import { toastSuccess } from 'core-ui';

function UseCallback() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  const callbackFunction = useCallback(() => toastSuccess(`Count ${count}`), [age]);
  const basicFunction = () => toastSuccess(`Count ${count}`);

  return (
    <div>
      <div>
        Function is built and only change when dependency is triggered, count display only update
        when changes in age is made
      </div>
      <div className="my-4 flex space-x-3">
        <button onClick={() => setCount((currCount) => currCount - 1)}>-</button>
        <div>Count {count}</div>
        <button onClick={() => setCount((currCount) => currCount + 1)}>+</button>
      </div>
      <div className="mb-4 flex space-x-3">
        <button onClick={() => setAge((currAge) => currAge - 1)}>-</button>
        <div>Age {age}</div>
        <button onClick={() => setAge((currAge) => currAge + 1)}>+</button>
      </div>
      <div className="mb-4 flex space-x-3">
        <button onClick={callbackFunction}>Callback Function</button>
        <button onClick={basicFunction}>Basic Function</button>
      </div>
    </div>
  );
}

export default UseCallback;
