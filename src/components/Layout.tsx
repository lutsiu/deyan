import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Add ToastContainer once, outside main layout */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
      />
    </div>
  )
}
