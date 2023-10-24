import AppStyles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExamplePage from '../Example Page/ExamplePage';


export default function App() {
  return (
    <div className={AppStyles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/example' element={<ExamplePage />}></Route> {/**This is an example route, and the style to which future routes should follow. */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};