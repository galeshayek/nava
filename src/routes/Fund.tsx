import i18next from "i18next"
import { useTranslation } from "react-i18next"

import diploma from '../assets/otherPhotos/diploma.webp'
import group from '../assets/otherPhotos/group3.webp'

const Fund = () => {
    const { t } = useTranslation()
    return (
        <section dir={i18next.dir()} className="consoultSection grid grid-flow-row md:grid-flow-cols">
            <h1 className="md:col-span-2 bg-primary text-center text-oposite text-5xl py-6 mb-3">{t('fundPage.title')}</h1>
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
            <div className="*:w-5/12 justify-center md:justify-start  md:*:w-6/12 md:pl-5 flex flex-row md:flex-col gap-5 *:rounded items-center pb-4">
                <img src={group} alt={t('homePage.hero.altImg')} />
                <img src={diploma} alt={t('homePage.hero.altImg')} />
            </div>
        </section>
    )
}

export default Fund