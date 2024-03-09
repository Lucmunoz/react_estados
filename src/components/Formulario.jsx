import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ obtenerAlert }) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        if (nombre === "" || email === "" || password === "" || confirmPassword === "") {

            obtenerAlert({
                error: true,
                mensaje: "Por favor, debe completar todos los campos",
                color: "danger",
            });
            return;
        }
    }


    return (
        <Form onSubmit={validarDatos}>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Control type="confirmPassword" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Button className='boton border-0 p' variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
    )
}

export default Formulario;