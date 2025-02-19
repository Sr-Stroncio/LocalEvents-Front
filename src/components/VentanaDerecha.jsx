import "../css/VentanaDerecha.css";
import gato from "../assets/gato.jpg";

const posts = [
    {
        id: 1,
        nombre: "Exploradores del Futuro",
        imagenAsociacion: gato,
        contenido: "Descubre los avances en IA en nuestro próximo evento.",
        imagenPost: gato
    },
    {
        id: 2,
        nombre: "Guardianes del Medioambiente",
        imagenAsociacion: gato,
        contenido: "¡Únete a nuestra jornada de limpieza este fin de semana!",
        imagenPost: null
    },
    {
        id: 3,
        nombre: "Comunidad Arte y Cultura",
        imagenAsociacion: gato,
        contenido: "Exposición de arte moderno abierta hasta el viernes.",
        imagenPost: gato
    },
    {
        id: 4,
        nombre: "Red de Voluntarios Unidos",
        imagenAsociacion: gato,
        contenido: "Necesitamos voluntarios para nuestro próximo evento solidario.",
        imagenPost: null
    },
    {
        id: 5,
        nombre: "Club de Astronomía",
        imagenAsociacion: gato,
        contenido: "Mañana observaremos Marte en la azotea del observatorio.",
        imagenPost: gato
    },
    {
        id: 6,
        nombre: "Guardianes del Medioambiente",
        imagenAsociacion: gato,
        contenido: "¡Únete a nuestra jornada de limpieza este fin de semana!",
        imagenPost: null
    },
    {
        id: 7,
        nombre: "Comunidad Arte y Cultura",
        imagenAsociacion: gato,
        contenido: "Exposición de arte moderno abierta hasta el viernes.",
        imagenPost: gato
    },
    {
        id: 8,
        nombre: "Red de Voluntarios Unidos",
        imagenAsociacion: gato,
        contenido: "Necesitamos voluntarios para nuestro próximo evento solidario.",
        imagenPost: null
    },
];

export function VentanaDerecha() {
    return (
        <div className="ventana-derecha">
            <h3>Posts Recientes</h3>
            <div className="posts-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img src={post.imagenAsociacion} alt="Asociación" className="post-asociacion-img" />
                            <span className="post-nombre">{post.nombre}</span>
                        </div>
                        <p className="post-contenido">{post.contenido}</p>
                        {post.imagenPost && <img src={post.imagenPost} alt="Post" className="post-img" />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VentanaDerecha;
