import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = { // State의 초기값을 객체로 받아옴
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'puwan',
      email: 'puwan@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) { // state는 초기값, action은 변한 값
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state, // 불변성을 위해 사용함
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs, // inputs안에 값을 넣어줌 (?)
        users: state.users.concat(action.user) // 기존의 배열에 새로운 입력한 새로운 배열을 추가함
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user // user의 id가 변한 값의 id와 같은지 비교하고 같으면 user객체를 그대로 가지고오고, active의 값을 바꿔줌. 다르면 user를 반환
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id) // user의 아이디가 action의 id와 다를때 지움
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer 사용방법. state는 현재 값. dispatch는 바꿔줄 값. initialState부분에는 초기값을 지정해줌
  const nextId = useRef(4); // id가 추가 될때 값의 초깃값을 useRef로 4로 설정

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
// 코드는 무조건 닫아 주어야 함.
// 두개이상의 태그는 무조건 하나의 태그로 갑싸주어야함
// <> </> 이런식의 프래그먼트를 사용할 수 있음
// ()는 부가적인것 위의 코드느 코드의 가독성을 위해 사용한것.
// React 안에서 Javascript를 사용할 때 {}를 사용하지 않으면 그대로 출력되고, 사용하면 {} 안의 변수명의 값을 출력함
// Wrapper 안의 Hello를 화면상에 출력하고 싶을땐 children props를 사용함
