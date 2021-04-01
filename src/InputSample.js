import React, { useState } from 'react';

function InputSample() {
    const [text, SetText] = useState(' ');

    const onChange = (e) => {
        SetText(e.target.value);
    };

    const onReset = () => {
        SetText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset} value={text}>초기화</button>
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;