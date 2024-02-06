import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/error';
import AuthPage from '../pages/Auth/AuthPage';
import ResultsPage from '../pages/Results/ResultsPage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
