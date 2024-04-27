import './App.css';

const Button = ({ isOutline, icon, text, ...rest }) => {
    return (
        <>
            <button {...rest} className={isOutline ? "outline_btn" : "primary_btn"}>
                {icon}
                {text}
            </button>
        </>
    );
}

export default Button;
