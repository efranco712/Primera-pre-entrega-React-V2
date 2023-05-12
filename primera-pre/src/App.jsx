import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Banner />
      <ItemListContainer greeting={"No hay productos"} />
      <Footer />
    </div>
  );
}

export default App;
