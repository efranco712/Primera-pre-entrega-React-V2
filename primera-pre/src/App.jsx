import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Banner from './components/Banner';
import Carrousel from './components/Carrousel';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Carrousel />
      <ItemListContainer greeting={"No hay productos"} />
      <Footer />
    </div>
  );
}

export default App;
