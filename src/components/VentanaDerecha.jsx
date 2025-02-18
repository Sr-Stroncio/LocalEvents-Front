import "../css/VentanaDerecha.css";

const posts = [
    {
        id: 1,
        nombre: "Exploradores del Futuro",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "Descubre los avances en IA en nuestro próximo evento.",
        imagenPost: "src/assets/gato.jpg"
    },
    {
        id: 2,
        nombre: "Guardianes del Medioambiente",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "¡Únete a nuestra jornada de limpieza este fin de semana!",
        imagenPost: null
    },
    {
        id: 3,
        nombre: "Comunidad Arte y Cultura",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "Exposición de arte moderno abierta hasta el viernes.",
        imagenPost: "src/assets/gato.jpg"
    },
    {
        id: 4,
        nombre: "Red de Voluntarios Unidos",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "Necesitamos voluntarios para nuestro próximo evento solidario.",
        imagenPost: null
    },
    {
        id: 5,
        nombre: "Club de Astronomía",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "Mañana observaremos Marte en la azotea del observatorio.",
        imagenPost: "src/assets/gato.jpg"
    },
    {
        id: 6,
        nombre: "Guardianes del Medioambiente",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "¡Únete a nuestra jornada de limpieza este fin de semana!",
        imagenPost: null
    },
    {
        id: 7,
        nombre: "Comunidad Arte y Cultura",
        imagenAsociacion: "src/assets/gato.jpg",
        contenido: "Exposición de arte moderno abierta hasta el viernes.",
        imagenPost: "src/assets/gato.jpg"
    },
    {
        id: 8,
        nombre: "Red de Voluntarios Unidos",
        imagenAsociacion: "src/assets/gato.jpg",
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
