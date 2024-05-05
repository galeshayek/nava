import { useTranslation } from "react-i18next"
import nava3 from '../../assets/nava3.webp'
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn"
import i18next from "i18next"

const Hero = () => {
    const { t } = useTranslation()
    return (
        <section className="flex border-b-8 border-primary">
            <div className="w-6/12 bg-pop text-oposite flex items-center justify-center">
                <div className="space-y-3" dir={i18next.dir()}>
                    <h1 className="text-5xl">{t('homePage.hero.title')}</h1>
                    <PrimaryBtn>
                        <span className="text-3xl">
                            {t('homePage.hero.btnText')}
                        </span>
                    </PrimaryBtn>
                </div>
            </div>
            <div className="w-6/12">
                <img src={nava3} alt={t('homePage.hero.imgAlt')} />
            </div>
        </section>
    )
}

export default Hero