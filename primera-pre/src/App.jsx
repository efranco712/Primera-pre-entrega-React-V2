import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Banner from './components/Banner';
import Carrousel from './components/Carrousel';
import Error404 from './components/Error404';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} /> 
            <Route path={"/item/:id"} element={<ItemDetailContainer />} /> 
            <Route path={"/destacados"} element={<Banner />} /> 
            <Route path={"/cart"} element={<Cart />} /> 
            <Route path={"/checkout"} element={<Checkout />} /> 
            <Route path={"/thankyou/:id"} element={<ThankYou />} /> 
            <Route path={"/*"} element={<Error404 />} /> 
          </Routes>
          <Carrousel />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
