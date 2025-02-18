import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import { useEstetico } from '../providers/ProviderEstetico';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [showExtraOptions, setShowExtraOptions] = useState(false);
    const menuRef = useRef(null);
    const notificationsRef = useRef(null);
    const { AsideOpen, setAsideOpen } = useEstetico();

    console.log('AsideOpen', AsideOpen);

    // Aplicar tema al cargar la página y cambio al dark mode
    useEffect(() => {
        if (darkMode) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }, [darkMode]);

    // Manejar clic fuera de los menús para cerrarlos si están abiertos
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
                setNotificationsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Detectar el tamaño de la pantalla y mostrar u ocultar opciones extra
    useEffect(() => {
        function handleResize() {
            setShowExtraOptions(window.innerWidth <= 450);
        }
    
        handleResize(); 
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    return (
        <nav className='navbar'>
            <span 
                className="material-symbols-outlined menu-icon"
                onClick={() => setAsideOpen(!AsideOpen)}
            >
                menu
            </span>

            <NavLink to="/">
                <img className='img-logo' src="src/assets/LocalEvents.jpg" alt="logo" />
            </NavLink>

            <div className="search-bar">
                <input type="text" placeholder="Buscador" />
            </div>

            <div className="nav-actions">
                {!showExtraOptions && (
                    <>
                        <button className="create-association">Crear +</button>

                        <div className="notifications-container" ref={notificationsRef}>
                            <span 
                                className="material-symbols-outlined notification-icon"
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                            >
                                notifications
                            </span>

                            {notificationsOpen && (
                                <div className="notifications-menu">
                                    <h4 className='notificaciones-title'>Notificaciones</h4>
                                    <div className="notification-item">
                                        <p><strong>Evento Nuevo:</strong> Conferencia sobre tecnología</p>
                                        <span className='span-time'>Hace 2 horas</span>
                                        <span className="close-notification material-symbols-outlined">cancel</span>
                                    </div>
                                    <div className="notification-item">
                                        <p><strong>Evento Nuevo:</strong> Conferencia sobre tecnología</p>
                                        <span className='span-time'>Hace 2 horas</span>
                                        <span className="close-notification material-symbols-outlined">cancel</span>
                                    </div>
                                    <div className="notification-item">
                                        <p><strong>Evento Nuevo:</strong> Conferencia sobre tecnología</p>
                                        <span className='span-time'>Hace 2 horas</span>
                                        <span className="close-notification material-symbols-outlined">cancel</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
                
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
                            {showExtraOptions && (
                                <>
                                    <button className="create-association">Crear +</button>
                                    <NavLink to="/notificaciones">Notificaciones</NavLink>
                                </>
                            )}
                            <NavLink to="/">Configuración</NavLink>

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
