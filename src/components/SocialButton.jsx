
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
