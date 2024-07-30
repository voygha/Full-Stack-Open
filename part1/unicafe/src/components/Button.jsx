const Button = ({ handleClick, text, classn }) => {
    return (
        <>
            <button onClick={handleClick} className={classn}>{text}</button>
        </>
    )
}

export default Button