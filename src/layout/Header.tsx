import { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
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
import LangBtn from "../components/LangBtn";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const { width } = useWindowSize()
    const { toggle, theme } = useContext(ThemeContext);
    //desktop
    if (width >= 1024) {
        return (
            <header className="bg-complimantry grid grid-flow-col h-20 sticky pb-3 top-0 w-screen z-10">
                <NavBar />
            </header>
        )
    } else {
        //mobile
        return (
            <header className="bg-complimantry sticky top-0 translate-y-0 py-4 pl-4 pr-10 flex justify-between items-center">
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
                <LangBtn />
            </header>
        )
    }
}

export default Header