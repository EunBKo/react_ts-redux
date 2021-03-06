import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { URLs } from '../../utils/routes';
// import { URLs } from "../utils/routes";

import MainPage from './MainPage';

//앱 기본 화면
export function BasePages(): React.ReactElement {
  return (
    <>
      <Switch>
        {/* <Redirect exact from="/" to={URLs.PURCHASE} /> */}
        <Route path={URLs.PURCHASE} component={MainPage} />
      </Switch>
    </>
  );
}
