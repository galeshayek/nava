import { createContext, useEffect, useState } from "react"
import { FCC } from "../@types/types"

export const ThemeContext = createContext({
    toggle: () => { },
    theme: ""
})
const ThemeProvider: FCC = ({ children }) => {
    useEffect(() => {
        let t = localStorage.getItem("theme") ?? "light";
        setTheme(t);
        if (t === "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");

        }
    }, []);

    const [theme, setTheme] = useState("light");
    const toggle = () => {
        const newValue = theme == "light" ? "dark" : "light";

        localStorage.setItem("theme", newValue);

        if (newValue === "dark") {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
        setTheme(newValue);
    };
    return (
        <ThemeContext.Provider value={{ toggle, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider