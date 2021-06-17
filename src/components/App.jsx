import React from 'react';
import { DateTime } from 'luxon';

import PageBody from "./PageBody";

const App = () => {
  const now = DateTime.local().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

  return (
    <div className="app">
      <header className="persistent-header">persistent header {now}</header>
      <PageBody />
      <footer className="persistent-footer">persistent footer {now}</footer>
    </div>
  )
}

export default App;