import { useContext } from 'react';

import ThemeContext from './ThemeContext';

const ThemedLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-white' : 'bg-black text-white'}>
      <div className="p-5">
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default ThemedLayout;
