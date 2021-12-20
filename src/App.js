/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from './components/Router/Router';
import { store } from './Store';
import GlobalStyle from './Global';

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
