import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/globel.css";
import AppRouter from '@routes/AppRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
