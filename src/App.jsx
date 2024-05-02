
import './App.css'

import { Routes, Route,Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './Pages/Home/Home'
import Infor from './Pages/Info/Infor'
import Header from './Components/Header/Header'
// phong

const MainLayout = () => {
  return (
    <div className=" mx-auto">
      <Header/>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}  >
        <Route index element={<Home/>}/>
        <Route path='/info' element={<Infor/>}/>
      </Route>
    </Routes>
  )
}

export default App
