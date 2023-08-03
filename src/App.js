import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuTop from './components/a-top/MenuTop';
import MenuFooter from './components/c-footer/MenuFooter';
import PersonalPage from './components/b-center/a-personal-page/PersonalPage';
import Web from './components/b-center/b-web/Web';
import Gallery from './components/b-center/c-gallery/Gallery';
import News from './components/b-center/d-news/News';
import Card from './components/a-top/a-left-top/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <MenuTop />
          <Routes>
            <Route path="/PersonalPage" element={<PersonalPage />} />
            <Route path="/Web" element={<Web />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/News" element={<News />} />
            <Route path="/Card" element={<Card />} />
          </Routes>
          <MenuFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
