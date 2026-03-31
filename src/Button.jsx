function Button (props) {

    const { type, disabled } = props;
    // typeをpropsから取得

    // const handleClick = () => {
    //     alert('クリックされました');
    // }

    return (
        <button type={type}  >
            <span>クリック</span>
        </button>
    )
};

export default Button;
