import { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BiArrowFromBottom, BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import { lngs } from "../translation/lngs";
import { langContext } from "../contexts/langContext";
import useWindowSize from "../hooks/useWindowSize";
import {
    Button,
    Drawer,
    DrawerBody, DrawerHeader,
    DrawerOverlay,
    DrawerContent, useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useBoolean
} from '@chakra-ui/react';
import PrimaryBtn from "../components/PrimaryBtn/PrimaryBtn";
import NavBar from "../components/NavBar/NavBar";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [flag, setFlag] = useBoolean()
    const btnRef = useRef<HTMLButtonElement>(null)
    const { width } = useWindowSize()
    const { updateLang } = useContext(langContext);
    const { i18n } = useTranslation();
    const { toggle, theme } = useContext(ThemeContext);

    if (width >= 1024) {
        return (
            <header className="bg-complimantry grid grid-flow-col h-20 sticky pb-3 top-0 w-screen z-10">
                <NavBar />
            </header>
        )
    } else {
        return (
            <header className="bg-complimantry sticky top-0 translate-y-0 py-4 pl-4 pr-10 flex  justify-between">
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
                            <div className="bg-oposite z-20 p-4">
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
                <Menu placement="bottom" onClose={() => setFlag.off()}>
                    <MenuButton className={'px-3 bg-oposite rounded'} onClick={() => setFlag.toggle()}>
                        Language
                    </MenuButton>
                    <MenuList className="text-textColor bg-oposite  p-2 rounded-md space-y-2">
                        {Object.keys(lngs).map((lng) => (
                            <MenuItem>
                                <button className="p-1" key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng), updateLang(lng), setFlag.off() }}>
                                    {lngs[lng].nativeName}
                                </button>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </header>
        )
    }
}

export default Header