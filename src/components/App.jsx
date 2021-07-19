import React from 'react';
import { DateTime } from 'luxon';

import PageBody from "./PageBody";

const App = () => {
  return (
    <div className="app">
    	<div class="persistent-header">
    		<img class="persistent-header__logo" src={'https://www.temple.edu/sites/all/modules/custom/tu_global/images/svg/temple-logo-t-box.svg'} />
    	</div>
      <PageBody />
    </div>
  )
}

export default App;