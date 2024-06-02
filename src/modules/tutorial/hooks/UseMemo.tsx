import { useEffect, useMemo, useState } from 'react';

import { toastSuccess } from 'core-ui';

function UseMemo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  const processAge = (num: number) => {
    return num;
  };

  const memoizedValue = useMemo(() => processAge(count), [age]);
  const value = processAge(count);

  useEffect(() => {
    toastSuccess('Memo changes detected');
  }, [memoizedValue]);

  useEffect(() => {
    toastSuccess('Const changes detected');
  }, [value]);

  return (
    <div>
      <div>
        Only triggers when changes in dependency is triggered, memo count display only updates when
        age is updated
      </div>
      <div>Memo {memoizedValue}</div>
      <div>Non-memo{value}</div>
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
    </div>
  );
}

export default UseMemo;
