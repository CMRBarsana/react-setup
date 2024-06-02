import { useEffect, useRef, useState } from 'react';

function UseRef() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // creates an object with current value of 0
  const refCount = useRef(0);

  // useEffect(() => {
  //   setCount((currCount) => currCount + 1);
  // }, [count]);

  useEffect(() => {
    refCount.current = refCount.current + 1;
  }, [refCount.current]);

  return (
    <div>
      <div>Changes in ref does not cause rerenders</div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div className="flex space-x-3">render count {count}</div>
      <div className="flex space-x-3">REF render count {refCount.current}</div>
    </div>
  );
}

export default UseRef;
