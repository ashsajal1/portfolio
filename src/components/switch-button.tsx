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
        <div className={`w-12 h-6 flex items-center dark:bg-gray-300 rounded-full p-1 duration-300 ease-in-out bg-green-400`}>
          <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-0  translate-x-5`}></div>
        </div>
        <span className="ml-3 text-gray-700">Toggle</span>
      </label>
    </div>
  );
};

export default SwitchButton;
