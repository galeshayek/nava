import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";
import { lngs } from "../translation/lngs";
import { useContext } from "react";
import { langContext } from "../contexts/langContext";
import { useTranslation } from "react-i18next";

const LangBtn = () => {
    const { updateLang } = useContext(langContext);
    const { i18n } = useTranslation();
    return (
        <Menu placement="bottom">
            <MenuButton className='p-2 h-fit text-xl bg-oposite rounded'>
                <FaGlobe />
            </MenuButton>
            <MenuList className="text-textColor bg-oposite  p-2 rounded-md space-y-2 shadow-2xl">
                {Object.keys(lngs).map((lng) => {
                    return (
                        <MenuItem>
                            <button className="p-1" key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng), updateLang(lng) }}>
                                {lngs[lng].nativeName}
                            </button>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

export default LangBtn