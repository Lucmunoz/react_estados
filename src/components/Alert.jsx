const Alert = ({ color, mensaje}) => {
    return (
        <>
            <div className={`alert alert-${color} m-4 col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-3 text-center`}>{mensaje}</div>
        </>
    )
}

export default Alert;