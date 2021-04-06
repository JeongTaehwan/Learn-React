import React, { useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function countActiveUser(user) {
  console.log('활성화된 유저 세는중..');
  return user.filter(user => user.active === true).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'taehwan',
      email: '1234@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: '12345@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'person',
      email: '123456@gmail.com',
      active: false,
    }
  ]);
  const NextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: NextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    //setUsers([users.concat(user)]);
    setInputs({
      username: '',
      email: '',
    });
    NextId.current += 1;
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  }, [users]);
  const count = useMemo(() => countActiveUser(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 {count}</div>
    </>
  )
}

export default App;
// 코드는 무조건 닫아 주어야 함.
// 두개이상의 태그는 무조건 하나의 태그로 갑싸주어야함
// <> </> 이런식의 프래그먼트를 사용할 수 있음
// ()는 부가적인것 위의 코드느 코드의 가독성을 위해 사용한것.
// React 안에서 Javascript를 사용할 때 {}를 사용하지 않으면 그대로 출력되고, 사용하면 {} 안의 변수명의 값을 출력함
// Wrapper 안의 Hello를 화면상에 출력하고 싶을땐 children props를 사용함