import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Aside from './Aside';
import "../css/Layout.css";
import { useEstetico } from '../providers/ProviderEstetico';

export function Layout() {
    const { AsideOpen, setAsideOpen } = useEstetico();

    // Aca maejamos el cambio de pantalla para abrir o cerrar el aside
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth > 1150) {
                setAsideOpen(true); 
            } else {
                setAsideOpen(false); 
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);


        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // Aca manejamos el click fuera del aside para cerrarlo
    const handleClickOutside = (event) => {
        if (window.innerWidth > 1150) return; 

        const isClickInsideAside = document.querySelector(".aside-container")?.contains(event.target);
        const isClickInsideNavbar = document.querySelector(".navbar")?.contains(event.target);

        if (!isClickInsideAside && !isClickInsideNavbar) {
            setAsideOpen(false);
        }
    };

    // Aca manejamos el layout de la pagina
    return (
        <div onClick={handleClickOutside}>
            <Navbar />
            <Aside />
            {AsideOpen && window.innerWidth <= 1150 && <div className="overlay"></div>}
            <div className="div-global">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
