import { useRef, useState } from "react"
import Button from "../components/Button"
import Header from "../components/Header"
import Info from "../components/Info"
import Input from "../components/Input"
import Logo from "../components/Logo"

const LandingPage = () => {
    const [disabled, setDisabled] = useState(true)
    const inputRef = useRef()

    return <div >
        <div className="pb-15">
            <Logo />
        </div>
        <div className="pb-9">
            <Header heading={'Verify your age'} />
        </div>
        <div className="pb-3">
            <Info Info={'Please confirm your birth year. This data will not be stored.'} />
        </div>
        <Input inputRef={inputRef} setDisabled={setDisabled} />
        <Button disabled={disabled} textForButton={'Continue'} path={'/otppage'} />
        <br />
    </div>
}

export default LandingPage