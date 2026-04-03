import style from './Button.module.css';
import { useState } from 'react';


function Button (props) {
    const [count, setCount] = useState(0)

    const { type, disabled, children,} = props;
    // typeをpropsから取得

    // const handleClick = () => {
    //     alert('クリックされました');
    // }

    

    return (
        <button className={style.button} type={type} disabled={disabled}  >
            {children}
        </button>
    )
};

export default Button;
