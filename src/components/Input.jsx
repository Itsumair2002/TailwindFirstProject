import { useRef } from "react"

const Input = ({ inputRef, setDisabled }) => {
    const focusOnInput = () => {
        inputRef.current.focus()
    }
    const changeColor = () => {
        if(inputRef.current.value.length){
            setDisabled(false)
        } else setDisabled(true)
    }
    return <div className="px-6 pb-6 flex justify-center">
        <span onClick={focusOnInput} className="bg-gray-300 py-2 pl-4 pr-10 rounded-lg cursor-text">
            <input onChange={changeColor} ref={inputRef} type="text" placeholder="Your birth Year" className="outline-none font-bold text-sm text-gray-600" />
        </span>
    </div>
}

export default Input