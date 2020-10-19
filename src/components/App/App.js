import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '../Routes';

import { NotificationContainer } from 'react-notifications';
import Loader from 'react-loader-spinner';

import Container from '../Container';
import AppBar from '../AppBar';

const Phonebook = lazy(() => import('../Phonebook'));
const Login = lazy(() => import('../Login'));
const Register = lazy(() => import('../Register'));
const HomePage = lazy(() => import('../HomePage'));

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <Loader type="Circles" color="#ffa580" height={100} width={100} />
          }
        >
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={Phonebook}
            />
          </Switch>
        </Suspense>
        <NotificationContainer />
      </Container>
    </>
  );
};

export default App;
