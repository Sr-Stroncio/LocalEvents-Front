import "../css/Eventos.css";

export function Evento({ nombre, bio, imagen, estado, tipo }) {
    return (
        <>
            <div className="evento">
                <div className="evento-header">
                    <img src={imagen} alt="Asociación" className="asociacion-img" />
                    <span className="asociacion-nombre">{nombre}</span>
                </div>

                <img src={imagen} alt="Evento" className="evento-img" />

                <div className="evento-info">
                    <span className={`evento-estado ${estado.toLowerCase()}`}>{estado}</span>
                    <span className="evento-tipo">{tipo}</span>
                </div>

                <p className="evento-descripcion">{bio}</p>

                <div className="evento-footer">
                    <button className="btn-eventos btn-forum">
                        <span className="material-symbols-outlined">forum</span>
                    </button>

                    <button className="btn-eventos btn-forum">Info</button>

                    <button className="btn-eventos btn-join">Unirse</button>
                </div>
            </div>

            <hr className="evento-divider" />
        </>
    );
}

export default Evento;
