import { useState } from 'react';

function Display(props) {

    const [text, setText] = useState("Loading...");

    return (
        <div>
            {text}
        </div>
    )
}

export default Display;
