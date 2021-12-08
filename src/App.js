import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.container';
import WalletPage from './pages/WalletPage/WalletPage.container';
import Header from './components/Header/Header.component';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallets" element={<WalletPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
