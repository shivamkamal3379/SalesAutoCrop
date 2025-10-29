import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SalesPage from './SalesPage'
import AdminPage from './AdminPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <SalesPage/> 
      {/* <AdminPage/> */}
    </>
  )
}

export default App
