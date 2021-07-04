import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './Component/AppRouter/AppRouter.Component';
import Sidebar from './Component/Features/Sidebar/Sidebar.Component';
import Header from './Component/Features/Header/Header.Component';
import Footer from './Component/Features/Footer/Footer.Component';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div id="divAppID">
          <Sidebar />
          <AppRouter />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
