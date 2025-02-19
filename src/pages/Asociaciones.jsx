import "../css/Asociaciones.css";
import { Asociacion } from "../components/Asociacion";
import VentanaDerecha from "../components/VentanaDerecha";
import { asociaciones } from "../data/Asociacion";

export function Asociaciones() {
    return (
        <div className="_asociaciones_main_container">
            <div className="_asociaciones_list">
                {asociaciones.map((asociacion) => (
                    <Asociacion 
                        key={asociacion.id} 
                        id={asociacion.id}
                        name={asociacion.name} 
                        description={asociacion.description} 
                        image={asociacion.image} 
                        email={asociacion.email} 
                        phone_number={asociacion.phone_number} 
                        level={asociacion.level}
                    />
                ))}
            </div>

            <VentanaDerecha />
        </div>
    );
}

export default Asociaciones;
