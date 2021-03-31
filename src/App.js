import React from 'react';
import Hello from './hello';
import Wrapper from './wrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Hello name='react' color='red'></Hello>
      <Hello color='purple'></Hello>
    </Wrapper>
  );
}

export default App;
// 코드는 무조건 닫아 주어야 함.
// 두개이상의 태그는 무조건 하나의 태그로 갑싸주어야함
// <> </> 이런식의 프래그먼트를 사용할 수 있음
// ()는 부가적인것 위의 코드느 코드의 가독성을 위해 사용한것.
// React 안에서 Javascript를 사용할 때 {}를 사용하지 않으면 그대로 출력되고, 사용하면 {} 안의 변수명의 값을 출력함
// Wrapper 안의 Hello를 화면상에 출력하고 싶을땐 children props를 사용함