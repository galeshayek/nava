import i18next from "i18next"
import { useTranslation } from "react-i18next"

const Erech = () => {
    const { t } = useTranslation()
    return (
        <section dir={i18next.dir()}>
            <h1 className="bg-primary text-center text-5xl text-oposite py-6 mb-3">{t('erechPage.title')}</h1>
            <div className="mx-12 space-y-2 mb-4">
                <div className="bg-primary/30 p-2 rounded">
                    <p>{t('erechPage.text1')}</p>
                    <p>{t('erechPage.text2')}</p>
                    <p>{t('erechPage.text3')}</p>
                    <p>{t('erechPage.text4')}</p>
                    <p>{t('erechPage.text5')}</p>
                </div>
                <ul className="space-y-1 bg-primary/30 p-2 rounded">
                    <li>&bull; {t('erechPage.ul1.li1')}</li>
                    <li>&bull; {t('erechPage.ul1.li2')}</li>
                    <li>&bull; {t('erechPage.ul1.li3')}</li>
                    <li>&bull; {t('erechPage.ul1.li4')}</li>
                    <li>&bull; {t('erechPage.ul1.li5')}</li>
                    <li>&bull; {t('erechPage.ul1.li6')}</li>
                    <li>&bull; {t('erechPage.ul1.li7')}</li>
                    <li>&bull; {t('erechPage.ul1.li8')}</li>
                    <li>&bull; {t('erechPage.ul1.li9')}</li>
                    <li>&bull; {t('erechPage.ul1.li10')}</li>
                    <li>&bull; {t('erechPage.ul1.li11')}</li>
                    <li>&bull; {t('erechPage.ul1.li12')}</li>
                    <li>&bull; {t('erechPage.ul1.li13')}</li>
                    <li>&bull; {t('erechPage.ul1.li14')}</li>
                    <li>&bull; {t('erechPage.ul1.li15')}</li>
                    <li>&bull; {t('erechPage.ul1.li16')}</li>
                    <li>&bull; {t('erechPage.ul1.li17')}</li>
                </ul>
                <p className="text-lg underline text-pop font-medium">{t('erechPage.text6')}</p>
                <ul className="space-y-1 bg-primary/30 p-2 rounded">
                    <li>&bull; {t('erechPage.ul2.li1')}</li>
                    <li>&bull; {t('erechPage.ul2.li2')}</li>
                    <li>&bull; {t('erechPage.ul2.li3')}</li>
                    <li>&bull; {t('erechPage.ul2.li4')}</li>

                </ul>

            </div>
        </section>
    )
}

export default Erech