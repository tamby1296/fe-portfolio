import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './modules/home/HomeScreen';
import AboutScreen from './modules/about/AboutScreen';
import PortfolioScreen from './modules/portfolio/PortfolioScreen';
import ContactScreen from './modules/contact/ContactScreen';
import { useErrorBoundary } from './hooks/useErrorBoundary';
import ErrorScreen from './modules/error/ErrorScreen';
import App from './App';

function AppRouter() {
  const hasError = useErrorBoundary();

  if (hasError)
    return <ErrorScreen />

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomeScreen />} />
          <Route path="about-me" element={<AboutScreen />} />
          <Route path="portfolio" element={<PortfolioScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
