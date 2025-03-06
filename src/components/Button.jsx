import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Button = ({ disabled, textForButton, onClickHandler, path }) => {
    const navigate = useNavigate()
    const onClickLocal = () => {
        if (!disabled) {
            onClickHandler && onClickHandler()
            navigate(path)
        }
    }
    return <div className="px-6 pt-3 flex justify-center">
        <span className={`text-white font-bold ${disabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-600  cursor-pointer"} px-22 py-2 rounded-lg text-sm`} onClick={onClickLocal} >{textForButton}</span>
    </div>
}
export default Button

//Learnt about useNavigate hook here, which can help without using unnecessary Link tag