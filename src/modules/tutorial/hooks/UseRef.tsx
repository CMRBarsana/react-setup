import { useEffect, useRef, useState } from 'react';

function UseRef() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // creates an object with current value of 0
  const refCount = useRef(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    refCount.current = refCount.current + 1;
  }, [refCount.current]);

  return (
    <div className="">
      <div>Changes in ref does not cause rerenders</div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div className="flex space-x-3">render count {count}</div>
      <div className="flex space-x-3">REF render count {refCount.current}</div>

      <div className="pt-10">
        <div>Common use is for focusing forms, like when issues are found upon submitting</div>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        {/* <div className="mt-[2000px]"> */}
        <div>
          <button className="mr-2" onClick={handleFocus}>
            Focus
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
