import './App.css';
import ContextProvider from './store/searchCtx';
import Router from './router';

function App() {
  return (
    <ContextProvider >
      <Router />
    </ContextProvider >
  );
}

export default App;
