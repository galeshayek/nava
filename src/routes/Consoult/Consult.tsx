import i18next from "i18next"
import { useTranslation } from "react-i18next"
import nava4 from '../../assets/nava4.webp'
import nava5 from '../../assets/nava5.webp'

const Consoult = () => {
    const { t } = useTranslation()
    return (
        <section dir={i18next.dir()} className="consoultSection grid grid-flow-row md:grid-flow-cols">
            <h1 className="md:col-span-2 bg-primary text-center text-oposite text-5xl py-6 mb-3">{t('consoultPage.title')}</h1>
            <div className="mx-12 space-y-2 mb-4 ">
                <h1 className="text-xl font-medium">{t('consoultPage.text1')}</h1>
                <p className="text-lg underline text-pop font-medium">{t('consoultPage.text2')}</p>
                <ul className="space-y-1 bg-primary/30 p-2 rounded">
                    <li>&bull; {t('consoultPage.ul1.li1')}</li>
                    <li>&bull; {t('consoultPage.ul1.li2')}</li>
                    <li>&bull; {t('consoultPage.ul1.li3')}</li>
                    <li>&bull; {t('consoultPage.ul1.li4')}</li>
                    <li>&bull; {t('consoultPage.ul1.li5')}</li>
                    <li>&bull; {t('consoultPage.ul1.li6')}</li>
                    <li>&bull; {t('consoultPage.ul1.li7')}</li>
                    <li>&bull; {t('consoultPage.ul1.li8')}</li>
                </ul>
                <p className="text-lg underline text-pop font-medium">{t('consoultPage.text3')}</p>
                <ul className="space-y-1 bg-primary/30 p-2 rounded">
                    <li>&bull; {t('consoultPage.ul2.li1')}</li>
                    <li>&bull; {t('consoultPage.ul2.li2')}</li>
                    <li>&bull; {t('consoultPage.ul2.li3')}</li>
                </ul>
            </div>

            <div className="*:w-5/12 justify-center md:justify-end  md:*:w-5/12 flex flex-row md:flex-col gap-5 *:rounded items-center pb-4">
                <img src={nava4} alt={t('homePage.hero.altImg')} />
                <img src={nava5} alt={t('homePage.hero.altImg')} />
            </div>
        </section>
    )
}

export default Consoult