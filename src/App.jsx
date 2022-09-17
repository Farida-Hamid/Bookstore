import {
  Routes,
  Route,
} from 'react-router-dom';
import Library from './components/Library';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
