import { useContext } from "react";
import OptionsContext from "../Context/OptionsContext";

const useOptions = () => {
  const { options, setOptions } = useContext(OptionsContext);

  return {
    options,
    setOptions,
  };
};

export default useOptions;
