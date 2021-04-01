import React from 'react';

function Hello({ color, name, isSpecial }) {

    return <div style={{
        color
    }}>
        <hi>{isSpecial ? <b>*</b> : '스페셜하지않다!'}
        안녕하세요 {name}</hi>
    </div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;