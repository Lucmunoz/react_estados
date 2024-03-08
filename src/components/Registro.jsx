import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Formulario from "./Formulario.jsx"
import SocialButton from "./SocialButton.jsx"

const Registro = () => {
    return (
        
        <Container className='col-3 p-5 text-center' >
            <Row>
                <h1>Crea una cuenta</h1>
            </Row>
            <Row>
                <SocialButton facebook="fa-facebook" github="fa-github" linkedin="fa-linkedin-in" />
            </Row>

            <Row>
                <p>o usa tu email para registrarte</p>
            </Row>

            <Row>
                <Formulario />
            </Row>
        </Container>

    );
}
export default Registro;
