import { Link } from "react-router-dom"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"
import { useTranslation } from "react-i18next"

const ErrorEelement = () => {
    const { t } = useTranslation()
    return (
        <div className="h-screen flex flex-col justify-start items-center">
            <p className="text-pop text-[25vw] font">404</p>
            <h1 className="text-5xl text-pop">{t('error.title')}</h1>
            <p className="text-xl pb-3">{t('error.text')}</p>
            <Link to={'/'}>
                <PrimaryBtn>{t('error.btn')}</PrimaryBtn>
            </Link>
        </div>
    )
}

export default ErrorEelement