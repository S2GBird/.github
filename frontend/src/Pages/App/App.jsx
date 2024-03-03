import AppStyles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExamplePage from '../Example Page/ExamplePage'
import SignupPage from '../SignupPage/SignupPage'
import LandingPage from '../Landing Page/LandingPage'
import LoginPage from '../Login Page/LoginPage'
import Dashboard from '../Dashboard/Dashboard'
import NotFound from '../404Page/NotFound'
import Post from '../../Components/Test/test'
import { AuthContextProvider } from '../../Services/authProvider'

export default function App () {
  return (
    <AuthContextProvider>
      <div className={AppStyles['app-page']}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/example' element={<ExamplePage />} /> {/** This is an example route, and the style to which future routes should follow. */}
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/createpost' element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  )
};
