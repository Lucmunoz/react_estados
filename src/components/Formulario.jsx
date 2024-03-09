import { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ obtenerAlertRegistro }) => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        /*  En primer lugar, la validación considera revisar si es que al momento de presionar el boton "Registarse" hay algun campo de
        entrada de texto vacío. Si esto ocurre, se define un estado para la alarma que considera definir el valor de la propiedad error a true
        para que esta sea renderizada en el componente App.jsx. Si este valor es Falso, la alerta no se renderiza. */

        if (nombre === "" || email === "" || password === "" || confirmPassword === "") {

            obtenerAlertRegistro({
                error: true,
                mensaje: "Por favor, debe completar todos los campos",
                color: "danger",
            });
            return;
        }

        else {

            /*  Al utilizar formularios de bootstrap y definir un campo de entrada de texto de tipo email, el navegador entiende que el valor de entrada
            esperado debe seguir las reglas del formato de correo electrónico. A partir de esto, no es necesario hacer una validación ya que está se
            realizará de forma automática. 
            
            Si se llegara a necesitar realizar esta validación, se revisa que el valor de entrada del campo de texto tenga los siguientes elementos:
            1.- Empezar por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
            2.- Seguido por el símbolo de la arroba @
            3.- Por último, el nombre del dominio del correo \w+([.-]?\w+)*(\.\w{2,10})+$
            
            lo anterior considera la siguiente nomenclatura:
            
            Meta carácter w: Que abarca los caracteres desde la a-z, A-Z y 0-9.
            Cuantificador +: Que indica que debe haber 1 o más ocurrencias del patrón definido
            Cuantificador ?: Que indica que puede haber 0 o 1 ocurrencia del patrón definido.
            Cuantificador *: Que indica que debe haber 0 o más ocurrencias del patrón definido
            Cuantificador {n,m}: Que indica que el patrón se puede repetir entre un mínimo de n veces hasta un máximo de m
            Meta carácter ^: Indica que el texto debe empezar por el patrón definido
            Meta carácter $: Indica que el texto debe finalizar por el patrón definido
            Grupo []: El par de corchetes indican que el texto puede tener algunos de los caracteres que se encuentren en dicho grupo.
            
            así, el formato de un correo es:
            /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
            
            luego, podríamos validar haciendo lo siguiente:
            
            formatoMailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            
            if( formatoMailValido.test(valorMailIngresado) ){
                alert('Email valido');
                return true;
            }else{
                alert('Email invalido');
                return false;
            }
            
            el metodo test busca coincidencia entre dos cadenas y devuelve true si la encuentra.
            
            Lo que si validaremos, es que ambas contraseñas sean las mismas y para ello, simplemente compararemos el valor del estado de
            passWord y confirmPassword*/

            if (password != confirmPassword) {

                /*Si las contraseñas son distintas, se define el siguiente estado para la alerta. Recordar que si la propiedad error es true,
                la alerta será renderizada en el componente App.jsx.*/

                obtenerAlertRegistro({
                    error: true,
                    mensaje: "Las contraseñas no coinciden. Intente nuevamente",
                    color: "danger",
                });
                return;
            }
            else {

                /*Si todos los datos ingresados estan ok, defino el siguiente estado para la alerta. */
                //ReactDOM.findDOMNode(this.messageForm).reset();


                obtenerAlertRegistro({
                    error: true,
                    mensaje: "Registro creado exitosamente",
                    color: "success",
                });

                //formRef.current.reset();

                setNombre("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                e.target.reset();
                return;
            }

        }
    }


    return (

        <Form id="formulario" onSubmit={validarDatos}>

            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value.trim())} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value.trim())} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value.trim())} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Control type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value.trim())} />
            </Form.Group>

            <Button className='boton border-0 p' variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
    )
}

export default Formulario;