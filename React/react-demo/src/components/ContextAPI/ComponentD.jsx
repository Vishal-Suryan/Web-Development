import { createContext } from "react";
import ComponentE from "./ComponentE";

export const Data = createContext();

const ComponentD = () => {
    const name = "Lalaaaa";
  return (
    <div>
        <Data.Provider value={name}>
          <ComponentE />
        </Data.Provider>

    </div>
  )
}

export default ComponentD;