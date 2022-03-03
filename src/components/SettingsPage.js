import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { getTranslatorForLanguage } from "../translations";

import LanguagesContext from "../contexts/LanguagesContext";

const SettingsPage = () => {
    const {currentLanguage, setCurrentLanguage} = useContext(LanguagesContext)

    const t = getTranslatorForLanguage(currentLanguage);

    console.log(t('go_back'))

  return (
    <>
      <Link to="/">{t("go_back")}</Link>
      <h1>{t("settings")}</h1>
      <label htmlFor="language">{t("app_lang")} : </label>
      <select
        id="language"
        name="language"
        defaultValue={currentLanguage} 
        onChange={e => setCurrentLanguage(e.target.value)}
      >
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </>
  );
};

export default SettingsPage;
