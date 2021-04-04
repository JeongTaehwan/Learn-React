import React from 'react';

function Wrapper({ children }) {
    const style = {
        padding: 16,
        border: '2px solid black',
    };
    return (
        <div style={style}>{children}</div>
    )

}
export default Wrapper;
