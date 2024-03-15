'use client'
import { useTheme } from "next-themes"

const SwitchButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer"
      >
        <div className={`w-12 h-6 flex items-center bg-gray-50 rounded-full p-1 duration-300 ease-in-out dark:bg-green-400`}>
          <div className={`dark:bg-white bg-green-500 w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out translate-x-0  dark:translate-x-5`}></div>
        </div>
        {/* <span className="ml-3 text-gray-700">{theme?.toUpperCase()}</span> */}
      </label>
    </div>
  );
};

export default SwitchButton;
