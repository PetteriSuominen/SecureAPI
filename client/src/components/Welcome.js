import React from 'react';
import { useSelector } from 'react-redux';
import Button from './common/Button';

const Welcome = ({ onLogin, onLogOut }) => {
  const userAccount = useSelector(state => state.auth.account);
  if (userAccount) {
    return (
      <div>
        <p>Hello, {userAccount.name}!</p>
        <Button onClick={onLogOut}>Log out</Button>
      </div>
    );
  }
  return (
    <div>
      <p>Front page</p>
      <Button onClick={onLogin}>Log in</Button>
    </div>
  );
};

export default Welcome;
