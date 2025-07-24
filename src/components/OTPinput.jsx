import { useRef } from "react"

const OTPinput = ({ numberOfBoxes, setButtonDisabled }) => {
    const checkForAllInputs = () => {
        let allInputsFilled = 0
        ref.current.forEach(e => {
            if (e.value.length > 0) {
                allInputsFilled += 1
            }
        })
        if (allInputsFilled == numberOfBoxes) {
            setButtonDisabled(false)
        } else setButtonDisabled(true)
    }

    const ref = useRef(Array(numberOfBoxes).fill(0))

    return <div className="flex">
        {Array(numberOfBoxes).fill(1).map((e, i) => {
            return <OTP key={i} inputRef={ref.current[i]} id={i + 1} focusShift={() => {
                if (i >= numberOfBoxes - 1 || ref.current[i].value.length == 0) {
                    return
                }
                ref.current[i + 1].focus()
            }} checkForAllInputs={checkForAllInputs} Reference={(e => ref.current[i] = e)} goBack={() => {
                ref.current[i - 1].focus()
            }} />
        })}

    </div>
}

export default OTPinput

const OTP = ({ Reference, id, focusShift, checkForAllInputs, goBack }) => {

    return <div className="flex p-1">
        <div className="bg-gray-300 w-7 h-9 rounded-lg">
            <input id={id} ref={Reference} className="w-7 h-9 outline-none font-bold text-lg text-gray-600 pl-2" type="text" onChange={(e) => {
                if (e.target.value == 1 || e.target.value == 2 || e.target.value == 3 || e.target.value == 4 || e.target.value == 5 || e.target.value == 6 || e.target.value == 7 || e.target.value == 8 || e.target.value == 9 || e.target.value == 0) {
                    focusShift()
                }
                checkForAllInputs()
            }} onKeyDown={e => {
                if (e.key === 'Backspace') {
                    e.preventDefault()
                    e.target.value = ''
                    goBack()
                    checkForAllInputs()
                }
            }} maxLength={1} />
        </div>
    </div>
}
