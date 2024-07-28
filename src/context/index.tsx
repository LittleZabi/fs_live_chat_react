import { createContext, useState } from "react";
import { Cookies } from "../utils/globals";

let user = Cookies.get('live-user')
interface valuesInter {
  user: { [key: string]: string } | null;
  message: { message: string; variant: string } | null;
  chatMessage: string
}
const storeData: valuesInter = {
  user: user ? JSON.parse(user) : null,
  message:null ,
  chatMessage: ''
};

export const Store: any = createContext(storeData);

export const StoreProvider = ({ children }: any) => {
  const [storeValues, setStoreData] = useState<valuesInter>(storeData);
  return (
    <Store.Provider value={{ ...storeValues, setValue: setStoreData }}>
      {children}
    </Store.Provider>
  );
};
