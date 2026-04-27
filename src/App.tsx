import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './routes/HomePage';
import { RoomsPage } from './routes/RoomsPage';
import { RoomDetailPage } from './routes/RoomDetailPage';
import { RestaurantPage } from './routes/RestaurantPage';
import { BanquetPage } from './routes/BanquetPage';
import { SpaPage } from './routes/SpaPage';
import { NewsPage } from './routes/NewsPage';
import { ContactsPage } from './routes/ContactsPage';
import { GuidePage } from './routes/GuidePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="rooms/:slug" element={<RoomDetailPage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="banquet" element={<BanquetPage />} />
          <Route path="spa" element={<SpaPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="guide" element={<GuidePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

