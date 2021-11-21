import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import BannerComponent from './components/commons/Banner';
import CarouselComponent from './components/Products/Categories';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import ProductsComponent from './components/Products/Products';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <div className="Content">
        <CarouselComponent />
        <ProductsComponent />
        <BannerComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
