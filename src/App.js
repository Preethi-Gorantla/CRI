import Header from './components/Header';
import Award from './components/Award';
import './App.css';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid">
        <div className="col-12 App">
          <Header className="col-12" />
          <Award className="col-12" />
          <Products className="col-12" />
          <Footer className="col-12" />
        </div>
    </div>
  );
}

export default App;
