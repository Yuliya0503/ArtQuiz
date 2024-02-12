import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/error';
import AuthPage from '../pages/Auth/AuthPage';
import ResultsPage from '../pages/Results/ResultsPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import ArtistsPage from '../pages/ArtistsPage/ArtistsPage';
import BlitzPage from '../pages/BlitzPage/BlitzPage';
import PaintingsPage from '../pages/PaintingsPage/PaintingsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/blitz" element={<BlitzPage />} />
        <Route path="/paintings" element={<PaintingsPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
