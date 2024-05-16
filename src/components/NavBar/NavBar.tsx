import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contexts/langContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";
import './style.scss';
import logo from '../../assets/logo.png';
import LangBtn from "../LangBtn";

const NavBar = () => {
    const { lang } = useContext(langContext);
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    const { toggle, theme } = useContext(ThemeContext);

    return (
        <>
            <Link to={'/'} className=" lg:size-14 lg:col-start-1 lg:col-end-2 self-end place-self-center bg-slate-200 rounded-full p-1">
                <img className="w-14 m-auto" src={logo} alt="" />
            </Link>

            <ul className='lg:col-start-2 lg:col-end-3 flex flex-col lg:flex-row gap-4 lg:gap-0 text-primary lg:text-oposite justify-between items-center lg:items-end *:text-xl font-normal' dir={i18n.dir(lang)} >
                <li>
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>{t('header.nav1')}</NavLink>
                </li>
                <li>
                    <NavLink to='/fundpage' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }>{t('header.nav2')}</NavLink>
                </li>
                <li><NavLink to="/erechladerech" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>{t('header.nav3')}</NavLink></li>
                <li><NavLink to="/consoult" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>{t('header.nav4')}</NavLink></li>
            </ul >

            <div className="lg:flex hidden gap-2 lg:col-start-3 lg:col-end-4 justify-end items-center lg:items-end pr-3">
                <LangBtn />
                <button className="hover:bg-textColor/30 text-oposite p-2 rounded text-2xl" onClick={() => toggle()}>{theme == 'light' ? <BiSun /> : <BiMoon />}</button>
            </div>
        </>
    )
}
export default NavBar