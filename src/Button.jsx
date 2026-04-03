import style from './Button.module.css';


function Button (props) {

    const { type, disabled, children, onClick} = props;
    // typeをpropsから取得

    // const handleClick = () => {
    //     alert('クリックされました');
    // }

    return (
        <button type={type} disabled={disabled} onClick={onClick} >
            {children}
        </button>
    )
};

export default Button;
