import { useState } from "react";

export const useActive = () => {
  const [ active, setActive ] = useState(null);

  return { active, setActive };
};
