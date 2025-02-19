import "../css/VentanaDerecha.css";
import { posts } from "../data/Post"; 



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
                        <p className="post-contenido">{post.text}</p>
                        {post.image && <img src={post.image} alt="Post" className="post-img" />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VentanaDerecha;
