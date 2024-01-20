import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Redirect from './pages/Redirect'
import Mailbox from './pages/Mailbox'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Redirect />} />
        <Route path="/mailbox" element={<Mailbox />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
