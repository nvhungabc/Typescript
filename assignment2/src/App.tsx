import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './componets/user'
import Home from './pages/user/home'
import Products_detail from './pages/user/detail'
import Login from './pages/user/login'
import Signin from './pages/user/signin'
import Dashbroad from './pages/admin/dashbroad'
import Add from './pages/admin/add'
import Update from './pages/admin/update'
import AdminLayout from './componets/adminlayout'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path='detail/:id' element={<Products_detail />}/>
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
      <Route index element={<Dashbroad/>} />

      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App