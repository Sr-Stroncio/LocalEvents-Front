import "../css/Eventos.css";
import { Evento } from "../components/Evento";
import VentanaDerecha from "../components/VentanaDerecha";
import { events } from "../data/events"; // Importamos los eventos desde la carpeta data

export function Eventos() {
    return (
        <div className="eventos-main-container">
            <div className="eventos-container">
                {events.map((evento) => (
                    <Evento 
                        key={evento.id} 
                        id={evento.id}
                        nombre={evento.title} 
                        bio={evento.description} 
                        imagen={evento.image} 
                        estado={evento.state} 
                        tipo={evento.type} 
                    />
                ))}
            </div>

            <VentanaDerecha />
        </div>
    );
}

export default Eventos;
