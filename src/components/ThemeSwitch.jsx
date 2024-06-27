'use client';

import { Switch } from './ui/switch';
import { useState } from 'react';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitch = () => {
    // isDarkMode
    //   ? document.documentElement.classList.remove('dark')
    //   : document.documentElement.classList.add('dark');

    // const mainElement = document.querySelector('.main');
    // if (mainElement) {
    //   if (isDarkMode) {
    //     mainElement.classList.remove('dark');
    //   } else {
    //     mainElement.classList.add('dark');
    //   }

    //   setIsDarkMode((prev) => !prev);
    // }

    isDarkMode
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch id="themeSwitch" onClick={handleSwitch} />
    </div>
  );
};

export default ThemeSwitch;
