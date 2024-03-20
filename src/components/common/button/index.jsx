import "./style.css"

// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, outlined }) => {

    return(
        <div className={outlined ? 'outlined-btn' : 'btn'} onClick={() => onClick()}>{text}</div>
    )
}

export default Button;