import "../css/Eventos.css";

export function Evento({ nombre, bio, imagen }) {
    return (
        <>
            <div className="evento">

                <div className="evento-header">
                    <img src={imagen} alt="Asociación" className="asociacion-img" />
                    <span className="asociacion-nombre">{nombre}</span>
                </div>

                <img src={imagen} alt="Evento" className="evento-img" />

                <p className="evento-descripcion">{bio}</p>

                <div className="evento-footer">

                    <button className="btn-eventos">
                        <span className="material-symbols-outlined">forum</span>
                    </button>

                    <button className="btn-eventos">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>

                    <button className="btn-eventos btn-join">Unirse</button>
                </div>
            
            </div>

            <hr className="evento-divider" />
        </>
    );
}

export default Evento;
