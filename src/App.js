import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuTop from './components/a-top/MenuTop';
import MenuFooter from './components/c-footer/MenuFooter';
import PersonalPage from './components/b-center/a-personal-page/PersonalPage';
import Web from './components/b-center/b-web/Web';
import Gallery from './components/b-center/c-gallery/Gallery';
import News from './components/b-center/d-news/News';
import Card from './components/a-top/a-left-top/Card';
import MenuLeftOne from './components/c-footer/a-left-footer/MenuLeftOne';
import MenuLeftTwo from './components/c-footer/a-left-footer/MenuLeftTwo';
import MenuLeftFree from './components/c-footer/a-left-footer/MenuLeftFree';
import MenuLeftFour from './components/c-footer/a-left-footer/MenuLeftFour';
import MenuLeftFive from './components/c-footer/a-left-footer/MenuLeftFive';
import MenuRightOne from './components/c-footer/c-right-footer/MenuRightOne';
import MenuRightTwo from './components/c-footer/c-right-footer/MenuRightTwo';
import MenuRightFree from './components/c-footer/c-right-footer/MenuRightFree';
import MenuRightFour from './components/c-footer/c-right-footer/MenuRightFour';
import MenuRightFive from './components/c-footer/c-right-footer/MenuRightFive';

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
            {/* MenuLeft */}
            <Route path="/MenuLeftOne" element={<MenuLeftOne />} />
            <Route path="/MenuLeftTwo" element={<MenuLeftTwo />} />
            <Route path="/MenuLeftFree" element={<MenuLeftFree />} />
            <Route path="/MenuLeftFour" element={<MenuLeftFour />} />
            <Route path="/MenuLeftFive" element={<MenuLeftFive />} />
            {/* MenuRight */}
            <Route path="/MenuRightOne" element={<MenuRightOne />} />
            <Route path="/MenuRightTwo" element={<MenuRightTwo />} />
            <Route path="/MenuRightFree" element={<MenuRightFree />} />
            <Route path="/MenuRightFour" element={<MenuRightFour />} />
            <Route path="/MenuRightFive" element={<MenuRightFive />} />
          </Routes>
          <MenuFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
