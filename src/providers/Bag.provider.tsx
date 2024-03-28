import { ReactNode, createContext, useContext, useState } from "react";
import { IData } from "../types/IData";

export interface BagContextType {
  items: IData[];
  setItems: React.Dispatch<React.SetStateAction<IData[]>>;

  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const BagContext = createContext<BagContextType>({} as BagContextType);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<IData[]>([] as IData[]);
  const [show, setShow] = useState(false);

  return (
    <BagContext.Provider
      value={{
        items,
        setItems,
        show,
        setShow,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBagContext() {
  return useContext(BagContext);
}
