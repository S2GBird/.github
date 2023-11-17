import AppStyles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamplePage from '../Example Page/ExamplePage'
import LandingPage from '../Landing Page/LandingPage'

export default function App () {
  return (
    <div className={AppStyles['app-page']}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/example' element={<ExamplePage />} /> {/** This is an example route, and the style to which future routes should follow. */}
        </Routes>
      </BrowserRouter>
    </div>
  )
};
