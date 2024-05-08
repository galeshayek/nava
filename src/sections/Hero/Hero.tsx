import { useTranslation } from "react-i18next"
import nava3 from '../../assets/nava3.webp'
import i18next from "i18next"

const Hero = () => {
    const { t } = useTranslation()
    return (
        <section className=" flex flex-col md:flex-row border-b-8 border-primary">
            <div className="md:w-6/12 w-screen bg-primary text-oposite flex items-center justify-center">
                <div className="flex flex-col  pb-4 px-3" dir={i18next.dir()}>
                    <h1 className="text-5xl">{t('homePage.hero.title')}</h1>
                </div>
            </div>
            <div className="md:w-6/12 w-screen">
                <img src={nava3} alt={t('homePage.hero.imgAlt')} />
            </div>
        </section>
    )
}

export default Hero