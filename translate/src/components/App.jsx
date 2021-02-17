import { useState } from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

const App = () => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange("english")} />
        <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value={"primary"}>
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
