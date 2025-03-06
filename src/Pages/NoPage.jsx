import { Link } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"

const NoPage = () => {
    return <div>
        <Header heading={'Sorry the page you are looking for does not exist or may have been removed.'} />
        <Button textForButton={'Go Back'} path={'/LandingPage'} />
    </div>
}

export default NoPage