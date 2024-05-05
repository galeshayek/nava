import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Root = () => {
    return (
        <div className='bg-oposite text-textColor text-md'>
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Root