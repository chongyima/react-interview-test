import React, { useRef, useState, MouseEvent } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import IUser from './interfaces';

const App = () : JSX.Element => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const [users, setUsers] = useState<Array<IUser>>([
    {
      id: 1,
      username: 'tester',
      email: 'tester@example.com',
      completed: true
    },
    {
      id: 2,
      username: 'liz',
      email: 'liz@example.com',
      completed: false
    }
  ]);
  const [updateId, setUpdateId] = useState<number>(0);
  const { username, email } = inputs;

  const nextId = useRef(3);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  const onUpdate = () => {
    setUsers(users => users.map(user => (user.id === updateId ? {...user, username, email} : user)));
    setInputs({
      username: '',
      email: ''
    });
    setUpdateId(0);
  };
  const onRemove = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const selectUpate = (user: IUser) => {
    setUpdateId(user.id);
    setInputs({
      username: user.username,
      email: user.email
    });
  }
  const onToggle = (id: number) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, completed: !user.completed } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        updateId={updateId}
        onChange={onChange}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} selectUpate={selectUpate}/>
    </>
  );
}

export default App;