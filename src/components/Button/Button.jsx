import style from './Button.module.css';


function Button (props) {

    const { type, disabled, children,} = props;
    // typeをpropsから取得

    // const handleClick = () => {
    //     alert('クリックされました');
    // }

    return (
        <button className={style.button} type={type} disabled={disabled} onClick={onClick} >
            {children}
        </button>
    )
};

export default Button;
