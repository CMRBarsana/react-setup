import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount((currCount) => currCount + 1);
  };

  const handleMinus = () => {
    setCount((currCount) => currCount - 1);
  };

  const handleSetIncorrectly = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleSetCorrect = () => {
    setCount((currCount) => currCount + 1);
    setCount((currCount) => currCount + 1);
    setCount((currCount) => currCount + 1);
  };

  return (
    <div>
      <div className="flex space-x-3">
        <button onClick={handleMinus}>-</button>
        <div>{count}</div>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="mt-4 flex space-x-3">
        <button onClick={handleSetIncorrectly}>trigger Incorrectly</button>
        <button onClick={handleSetCorrect}>trigger Correctly</button>
      </div>
    </div>
  );
}

export default UseState;
