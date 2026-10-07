import './App.css';

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

import Admin from './Pages/Admin.jsx';
import AdminLogin from './Pages/AdminLogin.jsx';

import { Routes, Route, useLocation } from "react-router-dom";


function App() {

    const location = useLocation();

    // Admin pages should NOT have Navbar or Footer
    const isAdminPage = location.pathname.startsWith("/admin");


    return (

        <div className="App">

            {/* Public Website Navbar */}
            {!isAdminPage && <Navbar />}


            <Routes>

                {/* ================= PUBLIC PAGES ================= */}

                <Route
                    path="/"
                    element={<Hero />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/skills"
                    element={<Skills />}
                />

                <Route
                    path="/projects"
                    element={<Projects />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* ================= ADMIN PAGES ================= */}

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />

                <Route
                    path="/admin"
                    element={<Admin />}
                />

            </Routes>


            {/* Public Website Footer */}
            {!isAdminPage && <Footer />}

        </div>
    );
}

export default App;