import { createContext, useState } from "react";
import { FCC } from "../@types/types";
import i18next from "i18next";

export const langContext = createContext({
    lang: "",
    updateLang: (lng: any) => { }
})
const LangProvider: FCC = ({ children }) => {

    const [lang, setLang] = useState(i18next.language);
    const updateLang = (lng: any) => {
        setLang(lng)
    }

    return (
        <langContext.Provider value={{ lang, updateLang }}>
            {children}
        </langContext.Provider>
    )
}

export default LangProvider