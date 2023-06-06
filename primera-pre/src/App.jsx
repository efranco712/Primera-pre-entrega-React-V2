import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Banner from './components/Banner';
import Carrousel from './components/Carrousel';
import {  BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} /> 
        <Route path={"/item/:id"} element={<ItemDetailContainer />} /> 
        <Route path={"/destacados"} element={<Destacados />} /> 
        <Route path={"/*"} element={<Error404 />} /> 
      </Routes>
      <Carrousel />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
