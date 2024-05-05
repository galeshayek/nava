import { Link } from "react-router-dom"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"

const ErrorEelement = () => {
    return (
        <div>
            <h1>Oops this page doesn't exist</h1>
            <Link to={'/'}>
                <PrimaryBtn>return to homePage</PrimaryBtn>
            </Link>
        </div>
    )
}

export default ErrorEelement