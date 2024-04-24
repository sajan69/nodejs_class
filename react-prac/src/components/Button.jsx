import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button=(props)=>{
    const [theme, setTheme] = useContext(ThemeContext)
    const {text,isDisabled=false,onClick}=props;
    return (
        <button disabled={isDisabled} 
        onClick={()=>{onClick();setTheme(theme === 'light' ? 'dark' : 'light')}}>
            {text}
        </button>
    )
}

export default Button;