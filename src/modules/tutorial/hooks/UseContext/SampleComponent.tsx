import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';

function SampleComponent() {
  const { theme } = useContext(ThemeContext);
  return <button className={theme === 'light' ? 'bg-white' : 'bg-black'}>Sample Button</button>;
}

export default SampleComponent;
