import React from 'react';

import { useLocationQuery } from 'react-use-location-query';

const App = () => {
  return (
    <div>
      <SubApp />
    </div>
  );
};

const SubApp = () => {
  useLocationQuery();
  return (
    <div>
      <div></div>
    </div>
  );
};
export default App;
