import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = ({ onLogin, onLogOut }) => {
  const userAccount = useSelector(state => state.auth.account);
  if (userAccount) {
    return (
      <div>
        <p>Hello, {userAccount.name}!</p>
        <button onClick={onLogOut}>Log out</button>
      </div>
    );
  }
  return (
    <div>
      <p>Front page</p>
      <button onClick={onLogin}>Log in</button>
    </div>
  );
};

export default Welcome;
