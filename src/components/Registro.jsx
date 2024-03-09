/*  El desafío solcita que desde el componente registro se llamen los componentes SocialButton, Formulario y Alert */
import Formulario from "./Formulario.jsx"
import SocialButton from "./SocialButton.jsx"
import Alert from "./Alert.jsx"


const Registro = ({ obtenerAlert_App, alert }) => {
    return (
        <>
            <div className='container col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-5 text-center gap'>
                <h1>Crea una cuenta</h1>
                <div className="d-flex justify-content-center column-gap-4 py-4">
                    <SocialButton facebook="fa-facebook" github="fa-github" linkedin="fa-linkedin-in" />
                </div>
                <p>o usa tu email para registrarte</p>
                <Formulario obtenerAlertRegistro={obtenerAlert_App} />
            </div>

            {alert.error ? <Alert color={alert.color} mensaje={alert.mensaje} /> : ""}

        </>
    );
}
export default Registro;

