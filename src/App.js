import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllQuotes from "./pages/AllQuotes";
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Navigate to='/quotes' />} />
        <Route path="/quotes/" exact element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
