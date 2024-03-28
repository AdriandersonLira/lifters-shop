import { ReactNode, createContext, useState } from "react";
import { IData } from "../types/IData";

export interface BagContextType {
  items: IData[] | null;
  setItems: React.Dispatch<React.SetStateAction<IData[] | null>>;
}

const BagContext = createContext<BagContextType | undefined>(undefined);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<IData[] | null>([]);

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
