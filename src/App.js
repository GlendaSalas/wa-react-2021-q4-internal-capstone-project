import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <p>This is the content</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
