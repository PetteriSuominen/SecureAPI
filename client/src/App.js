import React, { useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserAgentApplication } from 'msal';
import axios from 'axios';
import Welcome from './components/Welcome';
import './App.css';
import { msalConfig, loginRequest, tokenRequest } from './authConfig';
import { setUserAccount } from './store/actions/auth';
import { useDispatch } from 'react-redux';

const userAgentApplication = new UserAgentApplication(msalConfig);

const App = () => {
  const dispatch = useDispatch();

  const callAPI = token => {
    axios
      .get('/weatherforecast', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  const getAccessToken = useCallback(() => {
    userAgentApplication
      .acquireTokenSilent(tokenRequest)
      .then(accessTokenResponse => {
        let accessToken = accessTokenResponse.accessToken;
        callAPI(accessToken);
      })
      .catch(error => {
        userAgentApplication
          .acquireTokenPopup(loginRequest)
          .then(accessTokenResponse => {
            let accessToken = accessTokenResponse.accessToken;
            callAPI(accessToken);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(error);
      });
  }, []);

  useEffect(() => {
    let account = userAgentApplication.getAccount();
    if (account) {
      dispatch(setUserAccount(account));
      getAccessToken();
    }
  }, [getAccessToken, dispatch]);

  const login = () => {
    userAgentApplication
      .loginPopup({ scopes: loginRequest.scopes, prompt: 'select_account' })
      .then(response => {
        dispatch(setUserAccount(response.account));
        getAccessToken();
      })
      .catch(error => console.log(error));
  };

  const logout = () => {
    userAgentApplication.logout();
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Welcome onLogin={login} onLogOut={logout} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
