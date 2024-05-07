import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { BiArrowBack, BiLogoFacebook, BiLogoWhatsapp, } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="bg-complimantry flex flex-col items-center md:flex-row justify-center md:items-start gap-16 py-10" dir={i18next.dir()}>
            <section className="order-1">
                <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">                        {t('footer.links.title')}
                </h4>
                <div className="text-oposite flex flex-col">
                    <a className="hover:underline" href="https://www.bankhapoalim.co.il/he/social-banking/for-the-community/value-for-the-road">
                        &bull;
                        {t('footer.links.item1')}
                    </a>
                    <a className="hover:underline" href="https://www.alumot.org/post/%D7%A2%D7%A8%D7%9A_%D7%9C%D7%93%D7%A8%D7%9A">
                        &bull;
                        {t('footer.links.item2')}
                    </a>
                </div>
            </section>

            <section className="order-2 text-oposite text-md">
                <h4 className=" text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-2">{t('footer.contact.title')}</h4>
                <ul className="text-lg">
                    <li className="flex gap-2">
                        <p>{t('footer.contact.phone')}</p>
                        <a href="tel:+972508636388" className="hover:underline">{t('footer.contact.phoneNumber')}</a>
                    </li>
                    <li className="flex gap-2">
                        <p>{t('footer.contact.email')}</p>
                        <a href="mailto:navagai3010@gmail.com" className="hover:underline">navagai3010@gmail.com</a>
                    </li>
                </ul>
                <div className="flex gap-3 justify-center pt-6 text-complimantry *:text-5xl *:inline-block *:bg-pop *:rounded-lg">
                    <a className="hover:scale-105 transition" href="mailto:navagai3010@gmail.com" target="_blank" rel="noreferrer noopener">
                        <IoMailOutline />
                    </a>
                    <a className="hover:scale-105 transition" href="https://wa.me/972508636388" target="_blank" rel="noreferrer noopener">
                        <BiLogoWhatsapp />
                    </a>
                    <a className="hover:scale-105 transition" href="https://www.facebook.com/nava.gaizenberg" target="_blank" rel="noreferrer noopener">
                        <BiLogoFacebook />
                    </a>
                </div>
            </section>

            <section>
                <h4 className="order-3 text-xl text-oposite border-b-2 border-oposite pb-1 text-center mb-5">{t('footer.subscribe.title')}</h4>
                <form className="flex flex-col gap-3">
                    <input
                        className="border-4 border-primary rounded p-1"
                        type="email"
                        name="email"
                        autoComplete="email"
                        aria-label={t('footer.subscribe.ariaLabel')}
                        placeholder={t('footer.subscribe.placeholder')}
                    />
                    <button disabled className="bg-pop flex justify-center items-center gap-2 rounded px-3 text-xl hover:scale-110 transition">{t('footer.subscribe.button')} <span className={i18next.dir() == 'ltr' && 'rotate-180' || 'rotate-0'}><BiArrowBack /></span></button>
                </form>
            </section>
        </footer>
    )
}

export default Footer