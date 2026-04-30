import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './routes/HomePage';
import { RoomsPage } from './routes/RoomsPage';
import { RoomDetailPage } from './routes/RoomDetailPage';
import { CafePage } from './routes/CafePage';
import { SpaPage } from './routes/SpaPage';
import { ContactsPage } from './routes/ContactsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="rooms/:slug" element={<RoomDetailPage />} />
          <Route path="cafe" element={<CafePage />} />
          <Route path="spa" element={<SpaPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

