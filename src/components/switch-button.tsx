"use client"
import React, { useState } from 'react';

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer"
      >
        <div className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${isChecked ? 'bg-green-400' : 'bg-gray-400'}`}>
          <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-5' : ''}`}></div>
        </div>
        <span className="ml-3 text-gray-700">Toggle</span>
      </label>
    </div>
  );
};

export default SwitchButton;
