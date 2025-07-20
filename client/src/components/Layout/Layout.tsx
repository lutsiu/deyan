import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../Common/ScrollToTheTop";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Header />

      <main className="flex-1" role="main" aria-label="Main content of the page">
        <Outlet />
      </main>

      <Footer />

      {/* ToastContainer shows copy/form submission feedback */}
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
        theme="light" 
        aria-live="polite"
        role="status"
      />
    </div>
  )
}
