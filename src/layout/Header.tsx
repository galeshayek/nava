import { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { lngs } from "../translation/lngs";
import { langContext } from "../contexts/langContext";
import './style.scss';
import useWindowSize from "../hooks/useWindowSize";
import {
    Button,
    Drawer,
    DrawerBody, DrawerHeader,
    DrawerOverlay,
    DrawerContent, useDisclosure
} from '@chakra-ui/react';
import PrimaryBtn from "../components/PrimaryBtn/PrimaryBtn";
import NavBar from "../components/NavBar/NavBar";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const { width } = useWindowSize()
    const { updateLang } = useContext(langContext);
    const { i18n } = useTranslation();
    const { toggle, theme } = useContext(ThemeContext);

    if (width >= 1100) {
        return (
            <header className="bg-complimantry grid grid-flow-col h-20 sticky pb-3 top-0 w-screen z-10">
                <NavBar />
            </header>
        )
    } else {
        return (
            <header className="bg-complimantry sticky top-0 translate-y-0 py-4 pl-4 ">
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                    <PrimaryBtn>
                        <BiMenu className="text-3xl text-oposite" />

                    </PrimaryBtn>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    blockScrollOnMount={false}
                >
                    <DrawerOverlay onClick={onClose} />
                    <DrawerContent>
                        <DrawerHeader>
                            <div className="bg-oposite flex gap-5 z-20">
                                <div className="space-x-1 *:border-2 *:rounded *:border-primary *:px-2">
                                    {Object.keys(lngs).map((lng) => (
                                        <button className="text-2xl" key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng), updateLang(lng) }}>
                                            {lngs[lng].flag}
                                        </button>
                                    ))}
                                </div>
                                <button className="hover:bg-oposite/30 p-2 rounded text-2xl ml-auto mr-2" onClick={() => toggle()}>{theme == 'light' ? <BiSun /> : <BiMoon />}</button>
                            </div>
                        </DrawerHeader>

                        <DrawerBody>
                            <div className="bg-oposite border-b-4 border-pop pb-3 z-20">
                                <NavBar />
                            </div>
                        </DrawerBody>

                    </DrawerContent>
                </Drawer>
            </header>
        )
    }
}

export default Header