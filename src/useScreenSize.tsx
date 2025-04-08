import { useState, useEffect } from "react";

const BREAKPOINTS = {
  mobile: 768,
  smallDesktop: 1024,
};

export type ScreenSize = "mobile" | "smallDesktop" | "normalDesktop";

const useScreenType = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("mobile");
  const [isLoading, setIsLoading] = useState(true);

  const updateScreenType = () => {
    const width = window.innerWidth;
    if (width <= BREAKPOINTS.mobile) {
      setScreenSize("mobile");
    } else if (width <= BREAKPOINTS.smallDesktop) {
      setScreenSize("smallDesktop");
    } else {
      setScreenSize("normalDesktop");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    updateScreenType();

    window.addEventListener("resize", updateScreenType);

    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  return { screenSize, isLoading };
};

export default useScreenType;
