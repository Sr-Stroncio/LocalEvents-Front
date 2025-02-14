import { useState, useEffect } from "react";
import { useEstetico } from "../providers/ProviderEstetico";
import "../css/Aside.css";

export function Aside() {
    const { AsideOpen, setAsideOpen } = useEstetico();
    const [showSubscriptions, setShowSubscriptions] = useState(false);
    const [showResources, setShowResources] = useState(false);

    const fakeSubscriptions = [
        { nombre: "Asociación 1", imagen: "src/assets/gato.jpg" },
        { nombre: "Asociación 2", imagen: "src/assets/gato.jpg" },
        { nombre: "Asociación 3", imagen: "src/assets/gato.jpg" }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1150) {
                setAsideOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [setAsideOpen]);

    return (
        <aside className={`aside-container ${AsideOpen ? "open" : "closed"}`}>
            <nav className="aside-nav">
                <ul>
                    <li className="aside-section">
                        <span className="material-symbols-outlined span-aside">mountain_flag</span>
                        Eventos
                    </li>
                    <li className="aside-section">
                        <span className="material-symbols-outlined span-aside">diversity_3</span>
                        Asociaciones
                    </li>
                    <li className="aside-section">
                        <span className="material-symbols-outlined span-aside">demography</span>
                        Post
                    </li>

                    <hr className="aside-divider" />

                    <li className="aside-section toggle-section" onClick={() => setShowSubscriptions(!showSubscriptions)}>
                        Suscripciones
                        <span className="material-symbols-outlined span-aside">
                            {showSubscriptions ? "stat_1" : "stat_minus_1"}
                        </span>
                    </li>
                    {showSubscriptions && (
                        <ul className="aside-sublist">
                            {fakeSubscriptions.map((sub, index) => (
                                <li key={index} className="aside-subscription">
                                    <img src={sub.imagen} alt={sub.nombre} className="aside-image" />
                                    <span>{sub.nombre}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <hr className="aside-divider" />

                    <li className="aside-section toggle-section" onClick={() => setShowResources(!showResources)}>
                        Recursos
                        <span className="material-symbols-outlined span-aside">
                            {showResources ? "stat_1" : "stat_minus_1"}
                        </span>
                    </li>
                    {showResources && (
                        <ul className="aside-sublist">
                            <li className="aside-subscription">
                                <span className="material-symbols-outlined span-aside">settings_accessibility</span>
                                Sobre nosotros
                            </li>
                            <li className="aside-subscription">
                                <span className="material-symbols-outlined span-aside">psychology_alt</span>
                                Reglas
                            </li>
                            <li className="aside-subscription">
                                <span className="material-symbols-outlined span-aside">prescriptions</span>
                                Políticas y privacidad
                            </li>
                        </ul>
                    )}
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;
