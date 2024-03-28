import { ReactNode, createContext, useContext, useState } from "react";
import { IData } from "../types/IData";

export interface BagContextType {
  items: IData[];
  setItems: React.Dispatch<React.SetStateAction<IData[]>>;
}

const BagContext = createContext<BagContextType>({} as BagContextType);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<IData[]>([] as IData[]);

  return (
    <BagContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBagContext() {
  return useContext(BagContext);
}
