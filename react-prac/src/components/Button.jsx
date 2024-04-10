const Button=(props)=>{
    const {text,isDisabled=false,onClick}=props;
    return (
        <button disabled={isDisabled} 
        onClick={()=>{onClick()}}>
            {text}
            </button>
    )
}

export default Button;