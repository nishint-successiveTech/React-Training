import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const getValue = () => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  const setItem = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setItem, removeItem];
};

export default useLocalStorage;

