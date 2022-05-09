import React from 'react';

const CreateUser = ({
  username,
  email,
  updateId,
  onChange,
  onCreate,
  onUpdate
  }:{
    username: string;
    email: string;
    updateId: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCreate: () => void;
    onUpdate: () => void;
  }):JSX.Element => {
  return (
    <div>
      <input
        name="username"
        placeholder="User Name"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={email}
      />
      
      {updateId > 0 ? <button onClick={onUpdate}>Update</button> : <button onClick={onCreate}>Register</button>}
    </div>
  );
};

export default CreateUser;
