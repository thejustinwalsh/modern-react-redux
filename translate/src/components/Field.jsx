import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language === "english" ? "Name" : "Naam";

  return (
    <div className="ui field">
      <label>{language}</label>
      <input type="text" />
    </div>
  );
};

export default Field;
