/*  El desafío solcita que desde el componente registro se llamen los componentes SocialButton, Formulario y Alert */
import Formulario from "./Formulario.jsx"
import SocialButton from "./SocialButton.jsx"
import Alerta from "./Alerta.jsx"



const Registro = ({ obtenerAlert_App, alert }) => {
    return (
        <>
            <div className='container col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-5 text-center gap'>
                <h1>Crea una cuenta</h1>

                {/* En el punto 2 el desafío solicita que, para el componente SocialButton, el valor del icono se envíe mediante props desde
                    el componente Registro. */}
                <div className="d-flex justify-content-center column-gap-4 py-4">
                    <SocialButton facebook="fa-facebook" github="fa-github" linkedin="fa-linkedin-in" />
                </div>
                
                <p>o usa tu email para registrarte</p>
                
                {/* Según exige el desafío, se llama al componente Formulario enviando como prop la función que permite cambiar o setear el estado
                    en este caso de nuestra alerta. Esto pues, se debe ejecutar esta función al momento en que el usuario presione el boton para
                    registrarse y renderizar un mensaje que indique si el registro fue exitoso o no. Este estado viene desde el componente App.jsx 
                    mediante props.*/ }
                
                <Formulario obtenerAlertRegistro={obtenerAlert_App} />
            </div>

            {/* Una vez que el usuario presiona el boton de registro, se modifica el estado de alert que corresponde a un objeto con 3 propiedades o keys:
                - error: Esta propiedad tendrá valor true o false y se utilizará como flag para renderizar el componente.
                - mensaje: Esta propiedad tendra el string del mensaje a mostrar
                - color: Esta propiedad tendrá el string del color de la alerta. Según la documentación de bootstrap este puede ser: primary, danger, dark, etc. 

                Haciendo uso del operador ternario, verificamos el valor de error para ver si se renderiza o no el componente Alerta. Para renderizarlo se
                le llama enviando como propiedaes el valor del mensaje a mostrar y el color del contenedor de alerta. */}
            {alert.error ? <Alerta color={alert.color} mensaje={alert.mensaje} /> : ""}
        </>
    );
}
export default Registro;

