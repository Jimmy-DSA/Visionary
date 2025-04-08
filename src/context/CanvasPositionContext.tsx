import React, { createContext, useContext, useState } from "react";

type CanvasPosition = "fixed" | "absolute";

interface CanvasPositionContextType {
  position: CanvasPosition;
  setPosition: (pos: CanvasPosition) => void;
  topDistance: number,
  setTopDistance: React.Dispatch<React.SetStateAction<number>>
}

const CanvasPositionContext = createContext<
  CanvasPositionContextType | undefined
>(undefined);

export const CanvasPositionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [position, setPosition] = useState<CanvasPosition>("fixed");
  const [topDistance, setTopDistance] = useState<number>(0)

  return (
    <CanvasPositionContext.Provider value={{ position, setPosition, topDistance, setTopDistance }}>
      {children}
    </CanvasPositionContext.Provider>
  );
};

export const useCanvasPosition = () => {
  const context = useContext(CanvasPositionContext);
  if (!context) {
    throw new Error(
      "useCanvasPosition deve ser usado dentro de um CanvasPositionProvider"
    );
  }
  return context;
};
