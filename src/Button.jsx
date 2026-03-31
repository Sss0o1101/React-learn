function Button (props) {

    const { type } = props;
    // typeをpropsから取得

    const handleClick = () => {
        alert('クリックされました');
    }

    return (
        <button type="button" onClick={handleClick}>
            <span>クリック</span>
        </button>
    )
};

export default Button;
