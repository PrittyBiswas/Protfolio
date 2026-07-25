import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function Layout() {
  useEffect(() => {
    import('../../assets/js/script.js')
  }, [])

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </main>
  )
}

export default Layout
