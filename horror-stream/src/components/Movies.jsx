import React from "react";
import { useOptions } from "../Hooks";

function Movies() {
  const { options, setOptions } = useOptions();
  return <div>{`${options}`}</div>;
}

export default Movies;
