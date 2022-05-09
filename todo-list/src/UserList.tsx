import React from 'react';
import IUser from './interfaces';

function User({
  user,
  onRemove,
  onToggle,
  selectUpate,
 } : {
    user: IUser;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
    selectUpate: (user: IUser) => void;
  }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.completed ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Remove</button>
      <button onClick={() => selectUpate(user)}>Update</button>
    </div>
  );
}

function UserList({
  users,
  onRemove,
  onToggle,
  selectUpate
  }:{
    users: IUser[];
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
    selectUpate: (user: IUser) => void;
  }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
          selectUpate={selectUpate}
        />
      ))}
    </div>
  );
}

export default UserList;