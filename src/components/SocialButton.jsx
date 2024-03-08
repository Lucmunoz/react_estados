
const SocialButton = (props) => {
    return (
        <div>
            <i className= {`fa-brands ${props.facebook}`}></i>
            <i className= {`fa-brands ${props.github}`}></i>
            <i className= {`fa-brands ${props.linkedin}`}></i>
        </div>
    )
}
export default SocialButton;