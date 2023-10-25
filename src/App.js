import React, { lazy } from 'react';
import './App.css';
import LazyComponentHandler from './Common/Components/LazyWrapper';

const LazyMain = lazy(() => import('./Containers/Main'));

function App() {
  return (
    <div className="App">
      {/* Can be added as lazy component, it will also allow us to add route based lazy Loading */}
      <LazyComponentHandler lazyComponent={LazyMain} />
    </div>
  );
}

export default App;
