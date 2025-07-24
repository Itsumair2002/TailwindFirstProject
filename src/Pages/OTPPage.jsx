import { useState } from "react"
import Button from "../components/Button"
import Header from "../components/Header"
import Info from "../components/Info"
import Logo from "../components/Logo"
import OTPinput from "../components/OTPinput"

const OTPPage = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true)
    return <div>
        <div className="mb-20">
            <Logo />
        </div>
        <div className="mb-13">
            <Header heading={'Check Your Email For A Code'} />
        </div>
        <div className="mb-2">
            <Info Info={'Please enter the verification code sent to your email id abdullahumair50@gmail.com'} />
        </div>
        <div className="mb-10 flex justify-center">
            <OTPinput setButtonDisabled={setButtonDisabled} numberOfBoxes={6} />
        </div>
        <div>
            <Button textForButton={'Verify'} disabled={buttonDisabled} path={'/Home'}/>
        </div>
        <div className="ml-35 pt-4">
            <Info Info={"Can't find the email? Click here to resend"} />
        </div>
    </div>
}
export default OTPPage