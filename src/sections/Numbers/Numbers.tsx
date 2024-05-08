import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { numberCard } from "../../@types/types"
import i18next from "i18next"

const Numbers = () => {
    const { t } = useTranslation()
    const [cards, setcards] = useState<numberCard[]>([])
    useEffect(() => {
        const array = []
        for (let i = 1; i < 11; i++) {
            const id = i
            const number = t(`homePage.about.section3.card${i}.number`)
            const text = t(`homePage.about.section3.card${i}.text`);
            array.push({ id, number, text });
        }
        setcards(array)
    }, [i18next.language])

    return (
        <section className="flex flex-wrap w-[90vw] justify-center gap-5 m-auto my-10">
            {cards.map((card) => (
                <div key={card.id} className="bg-primary rounded-xl size-72 flex flex-col items-center justify-center pt-2 gap-5">
                    <h3 className="text-pop text-4xl scale-125 font-semibold">{card.number}</h3>
                    <p className="text-oposite text-lg px-2 text-center leading-normal">{card.text}</p>
                </div>
            ))}
        </section>
    )
}

export default Numbers