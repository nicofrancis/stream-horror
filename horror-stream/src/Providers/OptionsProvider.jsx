import React, { useState, useEffect } from "react";
import { fetchOptions } from "../api/options";
import OptionsContext from "../Context/OptionsContext";

export default function OptionsProvider({ children }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      const result = await fetchOptions();
      setOptions(result);
    };
    getOptions();
  }, []);
  console.log(options);
  return (
    <OptionsContext.Provider
      value={{
        options,
        setOptions,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
}
