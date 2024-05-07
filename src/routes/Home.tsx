import CenterOf from "../sections/CenterOf/CenterOf"
import Hero from "../sections/Hero/Hero"
import Numbers from "../sections/Numbers/Numbers"
import WhoAmI from "../sections/WhoAmI/WhoAmI"
import { postEmail } from "../services/axiosPost"

const Home = () => {
    return (<div className="">
        <Hero />
        <WhoAmI />
        <CenterOf />
        <Numbers />
    </div>
    )
}

export default Home