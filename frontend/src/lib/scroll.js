import { createContext, useContext } from "react";

export const ScrollContext = createContext(() => {});

export const useSmoothScroll = () => useContext(ScrollContext);
