import { FCC } from "../../@types/types"

const PrimaryBtn: FCC = ({ children }) => {
    return (
        <button className="bg-primary px-5 py-2 rounded-lg text-md">{children}</button>
    )
}

export default PrimaryBtn