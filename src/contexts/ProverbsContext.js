import React, {useState, createContext, useEffect, useContext} from 'react'

import LanguagesContext from './LanguagesContext';

 const ProverbsContext = createContext()

 export default ProverbsContext

export function ProverbsContextProvider({children}){
  const [proverbs, setProverbs] = useState([]);

  const {currentLanguage, setCurrentLanguage} = useContext(LanguagesContext)


    return (
        <ProverbsContext.Provider value={{proverbs, setProverbs}}>
            {children}
        </ProverbsContext.Provider>
    )
}