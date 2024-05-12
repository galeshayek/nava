import i18next from "i18next"
import { useTranslation } from "react-i18next"
import logo from '../assets/otherPhotos/erechladerechLogo.webp'
import poster from '../assets/otherPhotos/erchPoster.webp'
import group from '../assets/otherPhotos/group1.webp'
import group2 from '../assets/otherPhotos/group2.webp'

const Erech = () => {
    const { t } = useTranslation()
    return (
        <section dir={i18next.dir()} className="consoultSection grid grid-flow-row md:grid-flow-cols">
            <h1 className="md:col-span-2 bg-primary text-center text-oposite text-5xl py-6 mb-3">{t('erechPage.title')}</h1>
            <div className="mx-12 space-y-2 mb-4">
                <div className="bg-primary/30 p-2 rounded space-y-1">
                    <p>&bull; {t('erechPage.text1')}</p>
                    <p>&bull; {t('erechPage.text2')}</p>
                    <p>&bull; {t('erechPage.text3')}</p>
                    <p>&bull; {t('erechPage.text4')}</p>
                    <p>&bull; {t('erechPage.text5')}</p>
                </div>
                <p className="text-lg underline text-pop font-medium">{t('erechPage.text6')}</p>
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
                <p className="text-lg underline text-pop font-medium">{t('erechPage.text7')}</p>
                <ul className="space-y-1 bg-primary/30 p-2 rounded">
                    <li>&bull; {t('erechPage.ul2.li1')}</li>
                    <li>&bull; {t('erechPage.ul2.li2')}</li>
                    <li>&bull; {t('erechPage.ul2.li3')}</li>
                    <li>&bull; {t('erechPage.ul2.li4')}</li>

                </ul>
            </div>
            <div className="*:w-3/12 justify-center md:justify-start  md:*:w-full md:pl-5 flex flex-row md:flex-col gap-5 *:rounded items-center pb-4">
                <img src={group} alt={t('homePage.hero.altImg')} />
                <img src={group2} alt={t('homePage.hero.altImg')} />
                <img src={poster} alt={t('homePage.hero.altImg')} />
            </div>
        </section>
    )
}

export default Erech