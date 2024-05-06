import { useTranslation } from 'react-i18next'
import './style.scss'
const CenterOf = () => {
    const { t } = useTranslation()
    return (
        <section className="flex m-auto min-h-96">
            <div className="md:w-6/12 border-4 border-primary border-b-0 border-l-0 flex flex-col justify-center gap-10" >
                <h2 className="text-4xl text-pop text-center underline-offset-8 underline mb-3 ">{t('homePage.about.section2.title')}
                </h2>
                <p className='text-center leading-relaxed'>{t('homePage.about.section2.text')}</p>
            </div>
            <div className="md:w-6/12 border-4 border-primary border-r-0 border-b-0 bg-cover" id='aboutBgImage'>
            </div>
        </section>
    )
}

export default CenterOf