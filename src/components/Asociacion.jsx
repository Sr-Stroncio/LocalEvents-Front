import { NavLink } from "react-router-dom";
import LlamadaApi from "../providers/LlamadaApi";

export default function Asociacion({ id, name, description, image, email, phone_number, level }) {
    return (
        <>
            <LlamadaApi table="associations" />
            <div className="_asociacion_card">
                <NavLink to={`/AsociacionInfo/${id}`} className="_asociacion_header">
                    <img src={image} alt={name} className="_asociacion_img" />
                    <span className="_asociacion_name">{name}</span>
                </NavLink>

                <img src={image} alt={name} className="_asociacion_img_banner" />

                <div className="_asociacion_info">
                    <p className="_asociacion_description">{description}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Teléfono:</strong> {phone_number}</p>
                    <p><strong>Nivel:</strong> <span className="_asociacion_level">Nivel {level}</span></p>
                </div>

                <div className="_asociacion_footer">
                    <NavLink to={`/AsociacionInfo/${id}`}>
                        <button className="_btn_asociacion _btn_contact">Info</button>
                    </NavLink>

                    <button className="_btn_asociacion">Unirse</button>
                </div>
            </div>

            <hr className="evento-divider" />
        </>
    );
}
