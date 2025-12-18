import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

export const ThemeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button
      className="p-2 text-gray-900 border border-gray-100 rounded-md cursor-pointer hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-200"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
    </button>
  );
};
