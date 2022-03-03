import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { getTranslatorForLanguage } from "../translations";

import ProverbsContext from "../contexts/ProverbsContext";
import LanguagesContext from "../contexts/LanguagesContext";

const ProverbsPage = () => {
    const {proverbs, setProverbs} = useContext(ProverbsContext)
    const {currentLanguage, setCurrentLanguage} = useContext(LanguagesContext)

  const t = getTranslatorForLanguage(currentLanguage);

  function fetchProverbs(language){
    console.log(`fetching "${language}" proverbs`);
    fetch(`/pretend-api/results-${language}.json`)
      .then((res) => res.json())
      .then((data) => setProverbs(data.results));
  }

    useEffect( async ()=>{  
      fetchProverbs(currentLanguage)
      }, [])



  return (
    <>
      <Link to="/settings">{t("settings")}</Link>
      <h1>{t("proverbs")}</h1>
      <ul>
        {proverbs.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </>
  );
};

export default ProverbsPage;
