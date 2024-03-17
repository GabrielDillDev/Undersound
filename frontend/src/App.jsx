import Header from './components/Header.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';
import ProductList from './components/Products.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Menu/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default App
