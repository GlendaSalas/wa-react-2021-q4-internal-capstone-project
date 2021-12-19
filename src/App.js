import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from './components/Router/Router';
import GlobalStyle from './Global';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
