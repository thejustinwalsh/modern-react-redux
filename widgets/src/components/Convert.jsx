import React, { useState, useEffect } from "react";
import axios from "axios";

//! BAD PATTERN: React will bundle this keu into the application exposing it to the world.
//!              Secrets should be stored and requested outside of the app itself
const TRANSLATE_API_KEY = process.env.REACT_APP_TRANSLATE_API_KEY;

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data: res } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: TRANSLATE_API_KEY,
          },
        }
      );

      setTranslated(res.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
