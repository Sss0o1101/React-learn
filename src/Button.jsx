function Button (props) {

    const { type, disabled, children} = props;
    // typeをpropsから取得

    // const handleClick = () => {
    //     alert('クリックされました');
    // }

    return (
        <button type={type} disabled={disabled} >
            {children}
        </button>
    )
};

export default Button;
