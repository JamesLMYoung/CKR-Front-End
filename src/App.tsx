import './App.css';
import '@neo4j-ndl/base/lib/neo4j-ds-styles.css';

import ThemeWrapper from './context/ThemeWrapper';
import QuickStarter from './components/QuickStarter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeWrapper>
        <QuickStarter />
      </ThemeWrapper>
    </BrowserRouter>
  );
}

export default App;
