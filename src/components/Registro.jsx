import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Formulario from "./Formulario.jsx"
import SocialButton from "./SocialButton.jsx"

const Registro = ({ obtenerAlert }) => {
    return (
        <>
            <h1>Crea una cuenta</h1>
            <div className="d-flex justify-content-center column-gap-4 py-4">
                <SocialButton facebook="fa-facebook" github="fa-github" linkedin="fa-linkedin-in" />
            </div>
            <p>o usa tu email para registrarte</p>

                <Formulario obtenerAlert={obtenerAlert} />

        </>
    );
}
export default Registro;

