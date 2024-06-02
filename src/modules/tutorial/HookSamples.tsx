import { useCallback, useEffect, useMemo, useState } from 'react';

function HookSamples() {
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);

  const memoizedAge = useMemo(() => age, [age]);

  const expensiveCalculation = (num: number) => {
    console.log('Calculating...');
    return num * 2;
  };

  // Using useMemo to memoize the result of expensiveCalculation
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  const smapcall = useCallback(() => {
    console.log('age: ', age);
  }, []);

  const handleSetSame = () => {
    setAge(age - age + age);
  };

  const handleSetWrong = () => {
    setAge(age + 1);
    setAge(age + 1);
    setAge(age + 1);
  };

  const handleSetCorrect = () => {
    setAge((currAge) => currAge + 1);
    setAge((currAge) => currAge + 1);
    setAge((currAge) => currAge + 1);
  };

  useEffect(() => {
    console.log('age: ', age);
  }, [age]);

  useEffect(() => {
    console.log('memoizedAge: ', memoizedAge);
  }, [memoizedAge]);

  return (
    <div>
      {age}
      <button onClick={handleSetSame}>trigger same</button>
      <button onClick={handleSetWrong}>trigger wrong</button>
      <button onClick={handleSetCorrect}>trigger correct</button>
      <button onClick={smapcall}>Log</button>

      <div className="h-20 w-10 bg-primary xs:w-20 md:w-16 lg:w-60">asd</div>
    </div>
  );
}

export default HookSamples;
