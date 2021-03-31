import React from 'react';
import Hello from './hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };

  return (
    <div>
      <Hello></Hello>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
// 코드는 무조건 닫아 주어야 함.
// 두개이상의 태그는 무조건 하나의 태그로 갑싸주어야함
// <> </> 이런식의 프래그먼트를 사용할 수 있음
// ()는 부가적인것 위의 코드느 코드의 가독성을 위해 사용한것.
// React 안에서 Javascript를 사용할 때 {}를 사용하지 않으면 그대로 출력되고, 사용하면 {} 안의 변수명의 값을 출력함
//