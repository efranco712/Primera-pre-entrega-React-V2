import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Banner from './components/Banner';
import Carrousel from './components/Carrousel';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} /> 
          <Route path={"/item/:id"} element={<ItemDetailContainer />} /> 
          <Route path={"/destacados"} element={<Banner />} /> 
          <Route path={"/*"} element={<Error404 />} /> 
        </Routes>
      <Carrousel />
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
