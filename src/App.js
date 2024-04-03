import Main from './Main';
import Navbar from './Navbar'
import Footer from './Footer'

// Part that is render inside or the root element.
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
