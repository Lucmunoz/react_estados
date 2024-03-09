/*  El componente Alerta será el encargado de renderizar el correspondinete aviso en caso de exito o ante alguna falta como puede ser dejar un campo vacío
    o que las contraseñas no coincidan. Se hace uso del componente Alert desde la documentación de react Boostrap:
    https://react-bootstrap.netlify.app/docs/components/alerts/  

    Desde donde se observa la siguiente sintaxis:
    
    <Alert key={variant} variant={variant}> This is a {variant} alert—check it out!</Alert>
    
    Lo anterior se modifica haciendo uso de los props que recibe este componente: color y mensaje los cuales se definen en el componente formulario.
    */

import Alert from 'react-bootstrap/Alert';

const Alerta = ({ color, mensaje }) => {

    return (
        <>
            <Alert className={`m-4 col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-3 text-center`} key={color} variant={color}>{mensaje}</Alert>
        </>
    )
}

export default Alerta;
