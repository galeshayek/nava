import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'

const Root = () => {
    return (
        <div className='bg-oposite text-textColor text-md'>
            <ScrollToTop />
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Root