import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const menuRef = useRef(null);

    // Manejar click fuera del menú para cerrarlo
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <span className="material-symbols-outlined menu-icon">
                menu
            </span>

            <img src="src/assets/LocalEvents.jpg" alt="logo" />

            <div className="search-bar">
                <input type="text" placeholder="Buscador" />
            </div>

            <div className="nav-actions">
                <button className="create-association">Crear +</button>

                <span className="material-symbols-outlined notification-icon">
                    notifications
                </span>

                <div className="profile-container" ref={menuRef}>
                    <img
                        className="profile"
                        src="src/assets/gato.jpg"
                        alt="Perfil"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                    {menuOpen && (
                        <div className="profile-menu">
                            <NavLink to="/perfil">Ver Perfil</NavLink>
                            <NavLink to="/configuracion">Configuración</NavLink>
                            
                            <button 
                                className="dark-mode-toggle"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                Dark Mode 
                                <span className="material-symbols-outlined">
                                    {darkMode ? "toggle_on" : "toggle_off"}
                                </span>
                            </button>

                            <button className="logout">Cerrar Sesión</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
