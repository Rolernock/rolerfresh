import './App.css'
import { Route, Routes } from 'react-router'
import MainLayout from './components/MainLayout'
import NotFoundPage from './screens/NotFoundPage'
import AboutScreen from './screens/AboutScreen'
import ServicePage from './screens/ServiceScreen'
import ProductScreen from './screens/ProductScreen'
import ContactScreen from './screens/ContactScreen'
import HomePage from './screens/HomePage'
import BlogScreen from './screens/BlogScreen'
import ReadMessageScreen from './screens/ReadMessageScreen'
import FeatureScreen from './screens/FeatureScreen'

import TeamScreen from './screens/TeamScreen'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/product' element={<ProductScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/feature' element={<FeatureScreen />} />
        <Route path='/blog' element={<BlogScreen />} />
        <Route path='/msg' element={<ReadMessageScreen />} />
        <Route path='/team' element={<TeamScreen />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
