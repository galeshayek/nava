import i18next from "i18next"
import { useTranslation } from "react-i18next"

const Fund = () => {
    const { t } = useTranslation()
    return (
        <section dir={i18next.dir()}>
            <h1 className="bg-primary text-center text-5xl text-oposite py-6 mb-3">{t('fundPage.title')}</h1>
            <div className="mx-12 space-y-2 mb-4">
                <p className="text-xl font-medium">{t('fundPage.text1')}</p>
                <p className="text-lg underline text-pop font-medium">{t('fundPage.text2')}</p>
                <div className="bg-primary/30 w-fit p-2 rounded">
                    <p>1. {t('fundPage.text3')}</p>
                    <p>2. {t('fundPage.text4')}</p>
                    <p>3. {t('fundPage.text5')}</p>
                </div>
                <ol className="space-y-1 bg-primary/30 p-2 rounded">
                    <li>&bull; {t('fundPage.li7')}</li>
                    <li>&bull; {t('fundPage.li1')}</li>
                    <li>&bull; {t('fundPage.li2')}</li>
                    <li>&bull; {t('fundPage.li3')}</li>
                    <li>&bull; {t('fundPage.li4')}</li>
                    <li>&bull; {t('fundPage.li5')}</li>
                    <li>&bull; {t('fundPage.li6')}</li>
                </ol>
            </div>
        </section>
    )
}

export default Fund