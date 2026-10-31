import { useEffect, useState } from 'react';

function Display(props) {

    const [text, setText] = useState("Loading...");

    useEffect(() => {}, [])

    return (
        <div>
            {text}
        </div>
    )
}

export default Display;
