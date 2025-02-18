import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import { startPeriodicFetch, stopPeriodicFetch } from './store/tasksThunks'

// Wrapper component to handle periodic fetch lifecycle
const AppWrapper = () => {
  useEffect(() => {
    // Start periodic fetch when component mounts
    store.dispatch(startPeriodicFetch());

    // Cleanup on unmount
    return () => {
      stopPeriodicFetch();
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </StrictMode>,
)
