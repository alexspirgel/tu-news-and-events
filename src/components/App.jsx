import React from 'react';
import { DateTime } from 'luxon';

import PageBody from "./PageBody";

import logo from './temple-logo-t-box.svg';

const App = () => {
  return (
    <div className="app">
    	<div class="persistent-header">
    		<img class="persistent-header__logo" src={logo} />
    	</div>
      <PageBody />
    </div>
  )
}

export default App;