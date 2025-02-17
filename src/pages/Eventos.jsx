import "../css/Eventos.css";
import { Evento } from "../components/Evento";

const asociaciones = [
    {
        id: 1,
        nombre: "Exploradores del Futuro",
        bio: "Promovemos la innovación y la tecnología a través de eventos educativos.",
        imagen: "src/assets/gato.jpg"
    },
    {
        id: 2,
        nombre: "Guardianes del Medioambiente",
        bio: "Nos dedicamos a la protección del planeta con campañas ecológicas.",
        imagen: "src/assets/gato.jpg"
    },
    {
        id: 3,
        nombre: "Comunidad Arte y Cultura",
        bio: "Celebramos el arte en todas sus formas con exposiciones y talleres.",
        imagen: "src/assets/gato.jpg"
    },
    {
        id: 4,
        nombre: "Red de Voluntarios Unidos",
        bio: "Apoyamos a comunidades vulnerables con proyectos de impacto social.",
        imagen: "src/assets/gato.jpg"
    },
    {
        id: 5,
        nombre: "Club de Astronomía",
        bio: "Compartimos nuestra pasión por el universo con observaciones y charlas.",
        imagen: "src/assets/gato.jpg"
    }
];

export function Eventos() {
    return (
        <div className="eventos-container">
            {asociaciones.map((asociacion) => (
                <Evento 
                    key={asociacion.id} 
                    nombre={asociacion.nombre} 
                    bio={asociacion.bio} 
                    imagen={asociacion.imagen} 
                />
            ))}
        </div>
    );
}

export default Eventos;
