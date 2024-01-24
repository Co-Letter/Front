import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loading from './pages/Loading'
import Redirect from './pages/Redirect'
import Mailbox from './pages/Mailbox'
import Write from './pages/Write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Redirect />} />
        <Route path="/mailbox/:mailboxId" element={<Mailbox />} />
        <Route path="/write/:mailboxId" element={<Write />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
