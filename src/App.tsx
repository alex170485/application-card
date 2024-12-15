import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainPage } from './bundle/MainPage/MainPage.tsx';
import { ErrorPage } from './bundle/404Page/404Page.tsx';
import { AuthorizedUserLayout } from './shared/AuthorizedUserLayout/AuthorizedUserLayout.tsx';

function App() {
  return (
    <Routes>
      <Route element={<AuthorizedUserLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
