import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"



const InputField = (promps) => {
    const [theme]= useContext(ThemeContext);
    return (
        <label>
            <span>{promps.label}- {theme}</span>
            <input type="text"/>
        </label>
    )

}
export default InputField