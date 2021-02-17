import { useState } from "react";

import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

const App = () => {
  return (
    <div className="ui container">
      <LanguageStore>
        <LanguageSelector />
        <ColorContext.Provider value={"primary"}>
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
    </div>
  );
};

export default App;
