export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: process.env.REACT_APP_AUTHORITY,
    redirectUri: 'http://localhost:3000',
  },
};

export const tokenRequest = {
  scopes: [process.env.REACT_APP_TOKEN_SCOPE],
};

export const loginRequest = {
  scopes: ['user.read'],
};
