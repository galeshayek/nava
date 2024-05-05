import { useTranslation } from "react-i18next"
import i18next from "i18next"
import { useEffect, useState } from "react"
import './image.scss'
const WhoAmI = () => {
    const [dir, setdir] = useState('r')
    useEffect(() => {
        setdir(i18next.dir() === 'rtl' ? 'r' : "l")
    }, [i18next.language])
    const { t } = useTranslation()
    return (
        <section className="flex  m-auto">
            <div className="md:w-6/12 border-4 border-primary border-l-0 border-t-0 bg-whoAmI bg-cover" id="whoImiPhoto">
            </div>

            <div className='md:w-6/12 px-10 border-4 border-primary border-r-0 border-t-0' dir={i18next.dir()}>
                <h2 className="text-4xl text-center underline-offset-8 underline  mb-3">{t('homePage.about.section1.title')}</h2>
                <ul className={dir == 'r' ? 'flex flex-col gap-5 border-r-4 border-r-complimantry' : 'flex flex-col gap-5 border-l-4 border-l-complimantry'}>
                    <li className="flex gap-10 items-center">
                        <div className={dir == "r" ? "size-10 translate-x-5 bg-pop rounded-full" : "size-10 -translate-x-5 bg-pop rounded-full"}></div>
                        <span className="w-8/12 text-md">
                            {t('homePage.about.section1.part1')}
                        </span>
                    </li>
                    <li className="flex gap-10 items-center">
                        <div className={dir == "r" ? "size-10 translate-x-5 bg-pop rounded-full" : "size-10 -translate-x-5 bg-pop rounded-full"}></div>
                        <span className="w-8/12 text-md">
                            {t('homePage.about.section1.part2')}
                        </span>
                    </li>
                    <li className="flex gap-10 items-center">
                        <div className={dir == "r" ? "size-10 translate-x-5 bg-pop rounded-full" : "size-10 -translate-x-5 bg-pop rounded-full"}></div>
                        <span className="w-8/12 text-md">
                            {t('homePage.about.section1.part3')}
                        </span>
                    </li>
                    <li className="flex gap-10 items-center">
                        <div className={dir == "r" ? "size-10 translate-x-5 bg-pop rounded-full" : "size-10 -translate-x-5 bg-pop rounded-full"}></div>
                        <span className="w-8/12 text-md">
                            {t('homePage.about.section1.part4')}
                        </span>
                    </li>
                    <li className="flex gap-10 items-center">
                        <div className={dir == "r" ? "size-10 translate-x-5 bg-pop rounded-full" : "size-10 -translate-x-5 bg-pop rounded-full"}></div>
                        <span className="w-8/12 text-md">
                            {t('homePage.about.section1.part5')}
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WhoAmI