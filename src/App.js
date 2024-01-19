import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Redirect from './pages/Redirect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Redirect />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
