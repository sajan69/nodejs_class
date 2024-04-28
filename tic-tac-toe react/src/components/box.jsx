const Box = ({currentSymbol, onClick}) => {
    return (
        <button onClick={onClick}>{currentSymbol}</button>
    )
}

export default Box

