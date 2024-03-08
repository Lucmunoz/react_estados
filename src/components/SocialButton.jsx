
const SocialButton = (props) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center col-3 border border-black rounded-circle p-0">
                <i className={`fa-brands ${props.facebook}`}></i>
            </div>
            <div className="d-flex justify-content-center align-items-center col-3 border border-black rounded-circle p-0">
                <i className={`fa-brands ${props.github}`}></i>
            </div>
            <div className="d-flex justify-content-center align-items-center col-3 border border-black rounded-circle p-0">
                <i className={`fa-brands ${props.linkedin}`}></i>
            </div>
        </>
    )
}
export default SocialButton;

/*
<div className="d-flex border border-black "></div>
            <div className="d-flex border border-black "> </div>
            <div className="d-flex border border-black "> </div>*/
