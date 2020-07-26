import React from 'react';

const Welcome = ({ onLogin, onLogOut, userAccount }) => {
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
