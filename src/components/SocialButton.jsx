/*  Según exige el desafío, el componente SocialButton recibe como props el nombre o la sintaxis del icono a renderizar según el formato
    que establece FontAwesome. En este caso y para replicar la maqueta que presenta desafío, se reciben valores para 3 iconos los cuales se 
    renderizan como se muestra a continuación.*/

const SocialButton = (props) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center rounded-circle">
                <a href="https://www.facebook.com/DesafioLatam/"><i className={`fa-brands ${props.facebook}`}></i></a>
            </div>
            <div className="d-flex justify-content-center align-items-center rounded-circle">
                <a href="https://github.com/Lucmunoz"><i className={`fa-brands ${props.github}`}></i></a>
            </div>
            <div className="d-flex justify-content-center align-items-center rounded-circle">
                <a href="https://www.linkedin.com/school/desafiolatam/"><i className={`fa-brands ${props.linkedin}`}></i></a>
            </div>
            
        </>
    )
}
export default SocialButton;
